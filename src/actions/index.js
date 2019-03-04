
const ActionTypes = {
    SIGNIN_USERNAME_UPDATE: 'SIGNIN_USERNAME_UPDATE',
    SIGNIN_PASSWORD_UPDATE: 'SIGNIN_PASSWORD_UPDATE',
    SIGNIN_EMAIL_UPDATE: 'SIGNIN_EMAIL_UPDATE',
    SIGNIN_PHONE_UPDATE: 'SIGNIN_PHONE_UPDATE',
    SIGNIN_SUBMIT: 'SIGNIN_SUBMIT',
    SIGNIN_ERROR: 'SIGNIN_ERROR',
    SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
    USER_RESET_PASSWORD_SUBMIT: 'USER_RESET_PASSWORD_SUBMIT',
    USER_RESET_PASSWORD_ERROR: 'USER_RESET_PASSWORD_ERROR',
    USER_RESET_PASSWORD_SUCCESS: 'USER_RESET_PASSWORD_SUCCESS',
    USER_LOGOUT: 'USER_LOGOUT',
};

const signinUpdatePassword = data => {
    return {
        type: ActionTypes.SIGNIN_PASSWORD_UPDATE,
        data: {password: data}
    }
}

const signinUpdateUsername = data => {
    return {
        type: ActionTypes.SIGNIN_USERNAME_UPDATE,
        data: {username: data}
    }
}

const signinUpdateEmail = data => {
    return {
        type: ActionTypes.SIGNIN_EMAIL_UPDATE,
        data: {email: data}
    }
}

const signinUpdatePhone = data => {
    return {
        type: ActionTypes.SIGNIN_PHONE_UPDATE,
        data: {phone: data}
    }
}

const signinSubmit = (data) => {
    return {
        type: ActionTypes.SIGNIN_SUBMIT,
        data
    }
}

const signinError = (data) => {
    return {
        type: ActionTypes.SIGNIN_ERROR,
        data
    }
}

const signinSuccess = (data) => {
    return {
        type: ActionTypes.SIGNIN_SUCCESS,
        data
    }
}

const userResetPasswordSubmit = (data) => {
    return {
        type: ActionTypes.USER_RESET_PASSWORD_SUBMIT,
        data
    }
}

const userResetPasswordError = (data) => {
    return {
        type: ActionTypes.USER_RESET_PASSWORD_ERROR,
        data
    }
}

const userResetPasswordSuccess = (data) => {
    return {
        type: ActionTypes.USER_RESET_PASSWORD_SUCCESS,
        data
    }
}

const userLogout = () => {
    return {
        type: ActionTypes.USER_LOGOUT
    }
}

export {
    ActionTypes,
    signinUpdateEmail,
    signinUpdatePhone,
    signinUpdateUsername,
    signinUpdatePassword,
    signinSubmit,
    signinError,
    signinSuccess,
    userResetPasswordSubmit,
    userResetPasswordError,
    userResetPasswordSuccess,
    userLogout,
};
