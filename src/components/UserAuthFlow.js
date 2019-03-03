import React from 'react';
import SignIn from '../components/SignIn'
import PasswordReset from '../components/PasswordReset'
import { connect } from 'react-redux'

import {
    signinSubmit, signinError, signinSuccess, signinPasswordRequired,
    userResetPasswordSubmit, userResetPasswordSuccess, userResetPasswordError,
    updateSigninUsername, updateSigninPassword,
    // updateSigninEmail, updateSigninPhone,
} from '../actions'

import Cognito from '../lib/Cognito'
import getFormData from '../lib/getFormData'


const onSubmitPasswordReset = (dispatch, {Auth}, user) => (evt) => {
    evt.preventDefault();
    const data = getFormData(evt.target);
    console.log('password reset form data:', data);
    dispatch(userResetPasswordSubmit(data));

    Auth.sendCustomChallengeAnswer(user, data.password).then(r => {
        console.log('password reset response:', r);
        dispatch(userResetPasswordSuccess(r, user))
    }).catch(e => {
        console.error('password reset error:', e);
        dispatch(userResetPasswordError(e, user))
    })
}

const onSubmitSignin = (dispatch, {Auth}) => (evt) => {
    evt.preventDefault();
    const data = getFormData(evt.target);
    dispatch(signinSubmit(data))

    Auth.signIn({
        username: data.username,
        password: data.password,
        // attributes: {
        //     email: data.email,
        //     phone: data.phone,
        // }
    }).then(r => {
        console.log('signIn response:', r)
        if (r.challengeName) {
            switch(r.challengeName) {
                case Cognito.Challenges.NEW_PASSWORD_REQUIRED:
                    dispatch(signinPasswordRequired(r, data))
                    break;
                default:
            }
            return;
        }
        dispatch(signinSuccess(r))
    }).catch(e => {
        console.error('signIn error:', e)
        dispatch(signinError(e))
    })
}

const onChangePassword = (dispatch) => (evt) => {
    dispatch(updateSigninPassword(evt.target.value))
}

const onChangeUsername = (dispatch) => (evt) => {
    dispatch(updateSigninUsername(evt.target.value))
}

// const onChangeEmail = (dispatch) => (evt) => {
//     dispatch(updateSigninEmail(evt.target.value))
// }

// const onChangePhone = (dispatch) => (evt) => {
//     dispatch(updateSigninPhone(evt.target.value))
// }

const UserAuthFlow = (props) => {
    console.log('userauthflow props:', props)
    return (
    props.authAction === Cognito.Challenges.NEW_PASSWORD_REQUIRED
        ? <PasswordReset 
            valuePassword={props.valuePassword} 
            onChangePassword={props.onChangePassword}
            onSubmit={onSubmitPasswordReset(props.dispatch, props.services, props.user)} />
        : <SignIn 
            valueUsername={props.valueUsername}
            valuePassword={props.valuePassword}
            authError={props.authError}
            onChangeUsername={onChangeUsername(props.dispatch)}
            onChangePassword={onChangePassword(props.dispatch)}
            onSubmit={onSubmitSignin(props.dispatch, props.services)}
            buttonText={props.buttonText}
            dialogTitle={props.displayText} />
    )
}


const mapStateToProps = (state, otherProps) => {
    console.log('userauthflow mapstatetoprops state:', state)
    return {
        ...otherProps,
        // valuePhone: state.user.phone,
        // valueEmail: state.user.email,
        valueUsername: state.user.username,
        valuePassword: state.user.password,
        authError: state.user.authError,
        authAction: state.user.authAction,
        services: state.services,
    }
}

export default connect(mapStateToProps)(UserAuthFlow);
