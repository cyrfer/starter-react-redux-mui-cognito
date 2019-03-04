import React, {Fragment} from 'react';
import { connect } from 'react-redux'

// import logo from '../logo.svg';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom'

import {userLogout} from '../actions'


const LoginButtons = withStyles({
    signup: {
        marginLeft: 12,
        marginRight: 0,
    }
})(({classes, loginPath='/login', signupPath='/signup'}) => {
    // <Button size="small" variant="contained" color="secondary" component={Link} to={signupPath}>Sign Up</Button>
    return (
<Fragment>
    <Hidden xsDown={true}>
        <Button size="small" variant="contained" color="secondary" component={Link} to={loginPath}>Login</Button>
        <Button className={classes.signup} color="inherit" component={Link} to={signupPath}>Sign Up</Button>
    </Hidden>
    <Hidden smUp={true}>
        <Button size="small" variant="contained" color="secondary" component={Link} to={loginPath}>Login</Button>
        <Button className={classes.signup} color="inherit" component={Link} to={signupPath}>Sign Up</Button>
    </Hidden>
</Fragment>
    )
})

const onClickLogout = (dispatch, {Auth}, history, navigateTo) => () => {
    dispatch(userLogout())
    Auth.signOut().then((r) => {
        // console.log('logout response:', JSON.stringify(r))
        history.push(navigateTo)
    }).catch(e => {
        console.error('logout error:', JSON.stringify(e))
        history.push(navigateTo)
    })
}

const LogoutButtons = withRouter(({services, history, dispatch}) => {
    return (
<Fragment>
    <Hidden xsDown={true}>
        <Button onClick={onClickLogout(dispatch, services, history, '/login')} size="small" variant="contained" color="secondary">Logout</Button>
    </Hidden>
    <Hidden smUp={true}>
        <Button onClick={onClickLogout(dispatch, services, history, '/login')} size="small" variant="contained" color="secondary">Logout</Button>
    </Hidden>
</Fragment>
    )
})

const hasSession = (user) => {
    return user && user.signInUserSession;
}

const Header = withStyles({
    pageTitle: {
        flexGrow: 1,
        textDecoration: 'none',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
})(withRouter((props) => {
    const {classes, user, services, dispatch, title, shortTitle, location} = props;
    return (
<AppBar position="static">
    <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
        </IconButton>
        <Hidden xsDown={true}>
            <Typography className={classes.pageTitle} variant="h6" color="inherit" component={Link} to={'/'}>{title}</Typography>
        </Hidden>
        <Hidden smUp={true}>
            <Typography className={classes.pageTitle} variant="h6" color="inherit" component={Link} to={'/'}>{shortTitle || title}</Typography>
        </Hidden>
        {location.pathname === '/login' ? '' : hasSession(user) 
            ? <LogoutButtons {...{user, services, dispatch}} />
            : <LoginButtons {...{user, services, dispatch}} />}
    </Toolbar>
</AppBar>
);
}))

const mapStateToProps = (state, ...otherProps) => {
    // console.log('header state:', JSON.stringify(state))
    return {
        ...otherProps,
        user: state.user,
        title: state.header.title,
        shortTitle: state.header.shortTitle,
        services: state.services,
    }
}

export default connect(mapStateToProps)(Header);
