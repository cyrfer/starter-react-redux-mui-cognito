
const ActionTypes = {
    SIGNIN_USERNAME_UPDATE: 'SIGNIN_USERNAME_UPDATE',
    SIGNIN_PASSWORD_UPDATE: 'SIGNIN_PASSWORD_UPDATE',
    SIGNIN_EMAIL_UPDATE: 'SIGNIN_EMAIL_UPDATE',
    SIGNIN_PHONE_UPDATE: 'SIGNIN_PHONE_UPDATE',
    SIGNIN_SUBMIT: 'SIGNIN_SUBMIT',
    SIGNIN_ERROR: 'SIGNIN_ERROR',
    SIGNIN_PASSWORD_REQUIRED: 'SIGNIN_PASSWORD_REQUIRED',
    SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
    USER_RESET_PASSWORD_SUBMIT: 'USER_RESET_PASSWORD_SUBMIT',
    USER_RESET_PASSWORD_ERROR: 'USER_RESET_PASSWORD_ERROR',
    USER_RESET_PASSWORD_SUCCESS: 'USER_RESET_PASSWORD_SUCCESS',
};

const updateSigninPassword = data => {
    return {
        type: ActionTypes.SIGNIN_PASSWORD_UPDATE,
        data
    }
}

const updateSigninUsername = data => {
    return {
        type: ActionTypes.SIGNIN_USERNAME_UPDATE,
        data
    }
}

const updateSigninEmail = data => {
    return {
        type: ActionTypes.SIGNIN_EMAIL_UPDATE,
        data
    }
}

const updateSigninPhone = data => {
    return {
        type: ActionTypes.SIGNIN_PHONE_UPDATE,
        data
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

const signinPasswordRequired = (data) => {
    return {
        type: ActionTypes.SIGNIN_PASSWORD_REQUIRED,
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

export {
    ActionTypes,
    updateSigninEmail,
    updateSigninPhone,
    updateSigninUsername,
    updateSigninPassword,
    signinSubmit,
    signinError,
    signinPasswordRequired,
    signinSuccess,
    userResetPasswordSubmit,
    userResetPasswordError,
    userResetPasswordSuccess,
};
