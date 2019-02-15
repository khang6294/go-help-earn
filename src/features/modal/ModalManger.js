import React from 'react'
import {connect} from 'react-redux'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
const modalLookUp = {
    LoginModal,
    RegisterModal
}
const ModalManger = (props) => {
    let renderedModal = null
    const {currentModal} = props
    if(currentModal){
        const {modalType,modalProps} = currentModal
        const ModalComponent = modalLookUp[modalType];
        renderedModal = <ModalComponent {...modalProps}/>
    }
    return (
        <div>
           {renderedModal} 
        </div>
    )
}


const mapStateToProps = (state) => ({
    currentModal: state.modal
})

export default connect(mapStateToProps)(ModalManger)
