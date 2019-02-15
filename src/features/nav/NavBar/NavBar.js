import React, { Component } from 'react'
import {Menu,Container,Button} from 'semantic-ui-react'
import SignedIn from '../Menus/SignedIn'
import SignedOut from '../Menus/SignedOut'
import { Link, withRouter } from 'react-router-dom';
import * as actionCreators from '../../../store/actions/index'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
    auth: state.auth
})

class NavBar extends Component {
    state = {
        isAuth: false
    };
    
    handleSignIn = () => {
        this.props.openModal('LoginModal')
    };
    
    handleRegister = () => {
        this.props.openModal('RegisterModal')
    }

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
                        <Menu.Item header as={Link} to="/">
                            GoHelpEarn
                        </Menu.Item>
                        <Menu.Item as={Link} to="/works" name="Works" />
                        {isAuth && <Menu.Item>
                            <Button as={Link} to="/createWork" floated="right" positive inverted content="Create Work" />
                        </Menu.Item>}
                        {isAuth ? (
                            <SignedIn signOut={this.handleSignOut} />
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

export default withRouter(connect(mapStateToProps, {
    openModal: actionCreators.openModal
})(NavBar))