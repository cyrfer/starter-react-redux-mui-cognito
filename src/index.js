import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore/*, applyMiddleware*/ } from 'redux'
// import thunk from 'redux-thunk';

import rootReducer from './reducers'
import { Home, Login } from './pages'

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Amplify, { Auth } from "aws-amplify";

// https://aws-amplify.github.io/docs/js/authentication#create-your-own-ui
// import { Authenticator, SignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react';

import awsconfig from './aws-exports'
// console.log('awsconfig', awsconfig)

Amplify.configure(awsconfig)

const preloadedState = {
    header: {
        title: 'POC: Cognito',
        shortTitle: 'POC',
    },
    user: {
        username: '',
        password: '',
    },
    services: {
        Auth,
    }
}
const store = createStore(rootReducer, preloadedState)//, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
        </Fragment>
    </Router>
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
