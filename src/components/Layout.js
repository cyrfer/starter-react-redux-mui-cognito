import React from 'react';
import Header from './Header'

import CssBaseline from '@material-ui/core/CssBaseline';

const Layout = ({children}) => {
    return (
<React.Fragment>
    <CssBaseline />
    <Header />
    <main>{children}</main>
</React.Fragment>
    )
}

export default Layout
