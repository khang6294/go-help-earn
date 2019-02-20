import React from 'react'
import { Button, Icon} from 'semantic-ui-react'
const SocialLogin = (props) => {
    return (
        <div>
            <Button onClick = {() => props.socialLogin('facebook')} type="button" style={{ marginBottom: '10px' }} fluid color="facebook">
                <Icon name="facebook" /> Login with Facebook
            </Button>
    
            <Button onClick = {() => props.socialLogin('google')} type="button" fluid color="google plus">
                <Icon name="google plus" />
                Login with Google
            </Button>
        </div>
    )
}

export default SocialLogin


