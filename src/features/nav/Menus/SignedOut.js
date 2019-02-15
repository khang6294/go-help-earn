import React from 'react'
import {Menu,Button} from 'semantic-ui-react'

const SignedOut = (props) => {
    const {signIn,register} = props
    return (
        <>
            <Menu.Item position="right">
                <Button onClick={signIn} basic inverted content="Sign in" />
                <Button onClick={register} basic inverted content="Register" style={{marginLeft: '0.5em'}} />
            </Menu.Item>
        </>
    )
}

export default SignedOut
