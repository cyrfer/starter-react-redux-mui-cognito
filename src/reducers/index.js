import {ActionTypes as AT} from '../actions';

const userReducer = (user={}, action) => {
    console.log('userReducer', JSON.stringify(action));

    switch(action.type) {
        case AT.SIGNIN_EMAIL_UPDATE:
            return {...user, email: action.data};

        case AT.SIGNIN_PASSWORD_UPDATE:
            return {...user, password: action.data};

        case AT.SIGNIN_PHONE_UPDATE:
            return {...user, phone: action.data};

        case AT.SIGNIN_SUBMIT: {
            const {password, ...userOmitPw} = action.data;
            return userOmitPw;
        }

        case AT.SIGNIN_ERROR:
            return {...user, authError: action.data}

        case AT.SIGNIN_SUCCESS:
            return action.data

        case AT.SIGNIN_PASSWORD_REQUIRED: {
            user.authAction = action.data;
            break;
        }

        case AT.USER_RESET_PASSWORD_SUBMIT: {
            user.authAction = action.data;
            break;
        }

        default:
            return user;
    }
}

const rootReducer = (state={}, action) => {
    // console.log('rootReducer', action);

    switch(action.type) {
        case AT.SIGNIN_USERNAME_UPDATE:
        case AT.SIGNIN_PASSWORD_UPDATE:
        case AT.SIGNIN_EMAIL_UPDATE:
        case AT.SIGNIN_PHONE_UPDATE:
        case AT.SIGNIN_SUBMIT:
        case AT.SIGNIN_ERROR:
        case AT.SIGNIN_SUCCESS:
        case AT.SIGNIN_PASSWORD_REQUIRED:
        case AT.USER_RESET_PASSWORD_SUBMIT:
        case AT.USER_RESET_PASSWORD_SUCCESS:
        case AT.USER_RESET_PASSWORD_ERROR:
            return {...state, user: userReducer(state.user, action)}
        default:
            return state;
    }
}

export default rootReducer;
