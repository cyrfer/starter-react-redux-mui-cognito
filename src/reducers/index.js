import {ActionTypes as AT} from '../actions';

const userReducer = (state={}, action) => {
    console.log('userReducer', action);

    switch(action.type) {
        case AT.SIGNIN_EMAIL_UPDATE:
            state.user.email = action.data;
            break;

        case AT.SIGNIN_PASSWORD_UPDATE:
            state.user.password = action.data;
            break;

        case AT.SIGNIN_PHONE_UPDATE:
            state.user.phone = action.data;
            break;

        case AT.SIGNIN_SUBMIT: {
            const {password, ...userOmitPw} = action.data;
            state = {...state, ...{user: userOmitPw}}
            break;
        }

        case AT.SIGNIN_ERROR: {
            state.user = {
                authError: action.data
            };
            break;
        }

        case AT.SIGNIN_SUCCESS: {
            state.user = {};
            break;
        }

        case AT.SIGNIN_PASSWORD_REQUIRED: {
            state.user.authAction = action.data;
            break;
        }

        case AT.USER_RESET_PASSWORD_SUBMIT: {
            state.user.authAction = action.data;
            break;
        }

        default:
            return state;
    }
    return state;
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
            userReducer(state, action)
            break;
        default:
            // state = state;
    }
    return state;
}

export default rootReducer;
