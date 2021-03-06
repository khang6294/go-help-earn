import React from 'react'
import {Image,Dropdown,Menu} from 'semantic-ui-react'
const SignedIn = (props) => {
    const {signOut,profile} = props
    return (
        <>
            <Menu.Item position="right">
                <Image avatar spaced="right" src={profile.photoURL || '/img/user.png'} />
                <Dropdown pointing="top left" text={profile.displayName}>
                <Dropdown.Menu>
                    <Dropdown.Item text="Create Work" icon="plus" />
                    <Dropdown.Item text="My Events" icon="calendar" />
                    <Dropdown.Item text="My Network" icon="users" />
                    <Dropdown.Item text="My Profile" icon="user" />
                    <Dropdown.Item text="Settings" icon="settings" />
                    <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </>
    )
}

export default SignedIn
