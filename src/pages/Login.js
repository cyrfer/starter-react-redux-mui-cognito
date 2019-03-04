import React from 'react';
import Layout from '../components/Layout'
import UserAuthFlow from '../components/UserAuthFlow'

const Login = (props) => {
    return (
<Layout>
    <UserAuthFlow navigateTo="/" displayText={'Until SAML'} />
</Layout>
    )
}

export default Login;
