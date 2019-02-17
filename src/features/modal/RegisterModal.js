import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';
import RegisterForm from '../auth/Register';
import * as actionCreators from '../../store/actions/index'

class RegisterModal extends Component {
    render() {
        return (
            <Modal
                size='mini'
                open={true}
                onClose={() => {
                    this.props.closeModal();
                    this.props.resetErr();
                }}
            >
                <Modal.Header>
                    Register
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <RegisterForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, {
    closeModal: actionCreators.closeModal,
    resetErr: actionCreators.resetErr
})(RegisterModal);