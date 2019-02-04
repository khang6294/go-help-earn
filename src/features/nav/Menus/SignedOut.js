import React from 'react'
import {Menu,Button} from 'semantic-ui-react'

const SignedOut = (props) => {
    const {signIn} = props
    return (
        <>
            <Menu.Item position="right">
                <Button onClick={signIn} basic inverted content="Sign in" />
                <Button basic inverted content="Register" style={{marginLeft: '0.5em'}} />
            </Menu.Item>
        </>
    )
}

export default SignedOut
