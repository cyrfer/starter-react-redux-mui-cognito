import React from 'react';
import SignIn from '../components/SignIn'
import PasswordReset from '../components/PasswordReset'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

import {
    signinSubmit, signinError, signinSuccess,
    userResetPasswordSubmit, userResetPasswordSuccess, userResetPasswordError,
    signinUpdateUsername, signinUpdatePassword,
} from '../actions'

import Cognito from '../lib/Cognito'
import getFormData from '../lib/getFormData'


const onChallengePasswordReset = (dispatch, {Auth}, user, history, navidateTo) => (evt) => {
    evt.preventDefault();
    const data = getFormData(evt.target);
    dispatch(userResetPasswordSubmit(data));

    Auth.completeNewPassword(user, data.password).then(r => {
        dispatch(userResetPasswordSuccess(r))
        history.push(navidateTo)
    }).catch(e => {
        console.error('password reset error:', JSON.stringify(e));
        dispatch(userResetPasswordError({resetPasswordError: e}))
    })
}

const onSubmitSignin = (dispatch, {Auth}, history, navidateTo) => (evt) => {
    evt.preventDefault();
    const data = getFormData(evt.target);
    dispatch(signinSubmit(data))

    Auth.signIn({
        username: data.username,
        password: data.password,
    }).then(r => {
        dispatch(signinSuccess(r))
        history.push(navidateTo)
    }).catch(e => {
        console.error('signIn error:', JSON.stringify(e))
        dispatch(signinError(e))
    })
}

const onChangePassword = (dispatch) => (evt) => {
    dispatch(signinUpdatePassword(evt.target.value))
}

const onChangeUsername = (dispatch) => (evt) => {
    dispatch(signinUpdateUsername(evt.target.value))
}

const UserAuthFlow = (props) => {
    return (
    props.challengeName === Cognito.Challenges.NEW_PASSWORD_REQUIRED
        ? <PasswordReset 
            buttonText={'Reset Password'}
            dialogTitle={'Reset Password'}
            valuePassword={props.valuePassword} 
            onChangePassword={props.onChangePassword}
            onSubmit={onChallengePasswordReset(props.dispatch, props.services, props.user, props.history, props.navigateTo || '/')} />
        : <SignIn 
            valueUsername={props.valueUsername || ''}
            valuePassword={props.valuePassword || ''}
            signinError={props.signinError}
            onChangeUsername={onChangeUsername(props.dispatch)}
            onChangePassword={onChangePassword(props.dispatch)}
            onSubmit={onSubmitSignin(props.dispatch, props.services, props.history, props.navidateTo || '/')}
            buttonText={props.buttonText || 'Sign In'}
            dialogTitle={props.displayText || 'Sign In'} />
    )
}


const mapStateToProps = (state, otherProps) => {
    return {
        ...otherProps,
        // valuePhone: state.user.phone,
        // valueEmail: state.user.email,
        valueUsername: state.user.username,
        valuePassword: state.user.password,
        signinError: state.user.signinError,
        resetPasswordError: state.user.resetPasswordError,
        challengeName: state.user.challengeName,
        user: state.user,
        services: state.services,
    }
}

export default withRouter(connect(mapStateToProps)(UserAuthFlow));
