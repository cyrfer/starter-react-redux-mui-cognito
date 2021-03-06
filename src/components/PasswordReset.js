
import React from 'react';
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import FormField from './FormField'


const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        maxWidth: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});


const PasswordReset = ({classes, buttonText, dialogTitle, onSubmit, 
    onChangePassword, valuePassword,
}) => {
    return (
<Paper className={classes.paper}>
    <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">{dialogTitle || 'Reset Password'}</Typography>
    <form onSubmit={onSubmit} action="#">
        <FormField inputType={'password'} fieldName={'password'} onChange={onChangePassword} value={valuePassword} label={'Password'} autoComplete="current-password" />
        <Button type="submit" onClick={()=>{}} fullWidth variant="contained" color="primary" className={classes.submit}>{buttonText}</Button>
    </form>
</Paper>
    )
}

// SignIn.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     dialogTitle: PropTypes.string.isRequired,
//     buttonText: PropTypes.string.isRequired,
//     classes: PropTypes.object.isRequired,
//     user: PropTypes.object.isRequired,
// }

export default withStyles(styles)(PasswordReset)
