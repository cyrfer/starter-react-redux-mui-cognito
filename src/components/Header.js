import React from 'react';
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
import {Link} from 'react-router-dom'

const styles = {
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textDecoration: 'none',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const Header = ({title, shortTitle, classes}={}) => {
    return (
<AppBar position="static">
    <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
        </IconButton>
        <Hidden xsDown={true}>
            <Typography className={classes.title} variant="h6" color="inherit" component={Link} to={'/'}>{title}</Typography>
        </Hidden>
        <Hidden smUp={true}>
            <Typography className={classes.title} variant="h6" color="inherit" component={Link} to={'/'}>{shortTitle || title}</Typography>
        </Hidden>
        <Hidden xsDown={true}>
            <Button size="small" variant="contained" color="secondary" component={Link} to={'/login'}>Login</Button>
        </Hidden>
        <Hidden smUp={true}>
            <Button size="small" variant="contained" color="secondary" component={Link} to={'/login'}>Login</Button>
        </Hidden>
    </Toolbar>
</AppBar>
);
}

const mapStateToProps = (state, ...otherProps) => {
    return {
        title: state.header.title,
        shortTitle: state.header.shortTitle,
        ...otherProps,
        services: state.services,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
