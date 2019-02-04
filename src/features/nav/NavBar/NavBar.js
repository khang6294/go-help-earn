import React, { Component } from 'react'
import {Menu,Container,Button} from 'semantic-ui-react'
import SignedIn from '../Menus/SignedIn'
import SignedOut from '../Menus/SignedOut'

class NavBar extends Component {
    state = {
        isAuth: false
    };
    
    handleSignIn = () => {
        this.setState({
            isAuth: true
        });
    };

    handleSignOut = () => {
        this.setState({
            isAuth: false
        });
    };

    render() {
        const {isAuth} = this.state
        return (
            <div>
                <Menu inverted fixed="top">
                    <Container>
                        <Menu.Item header>
                            GoHelpEarn
                        </Menu.Item>
                        <Menu.Item name="Works" />
                        {isAuth && <Menu.Item>
                            <Button floated="right" positive inverted content="Create Work" />
                        </Menu.Item>}
                        {isAuth ? (
                            <SignedIn signOut={this.handleSignOut} />
                        ) : (
                            <SignedOut signIn={this.handleSignIn} />
                        )}
                    </Container>
                </Menu>
            </div>
        )
    }
}

export default NavBar;
