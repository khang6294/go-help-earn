import React, { Component } from 'react'
import {Menu,Container,Button} from 'semantic-ui-react'
import SignedIn from '../Menus/SignedIn'
import SignedOut from '../Menus/SignedOut'
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from 'react-redux-firebase'
import * as actionCreators from '../../../store/actions/index'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

class NavBar extends Component {
    
    handleSignIn = () => {
        this.props.openModal('LoginModal')
    };
    
    handleRegister = () => {
        this.props.openModal('RegisterModal')
    }

    handleSignOut = () => {
        this.props.firebase.logout()
    };

    render() {
        const {auth} = this.props
        const authenticated = auth.isLoaded && !auth.isEmpty

        return (
            <div>
                <Menu inverted fixed="top">
                    <Container>
                        <Menu.Item header as={Link} to="/">
                            GoHelpEarn
                        </Menu.Item>
                        <Menu.Item as={Link} to="/works" name="Works" />
                        {authenticated && <Menu.Item>
                            <Button as={Link} to="/createWork" floated="right" positive inverted content="Create Work" />
                        </Menu.Item>}
                        {authenticated ? (
                            <SignedIn auth={auth} signOut={this.handleSignOut} />
                        ) : (
                            <SignedOut 
                                signIn={this.handleSignIn}
                                register = {this.handleRegister}                                   
                            />
                        )}
                    </Container>
                </Menu>
            </div>
        )
    }
}

export default withRouter(withFirebase(connect(mapStateToProps, {
    openModal: actionCreators.openModal
})(NavBar)))