import React, { Component } from 'react'
import {Grid,Button} from 'semantic-ui-react'
import WorkList from '../WorkList/WorkList'
import WorkForm from '../WorkForm/WorkForm'
import * as actionCreators from '../../../store/actions/index'
import {connect} from 'react-redux'

class WorkDashboard extends Component {

    state = {
        isOpen:false
    }

    handleOpenForm = () => {
        this.setState({
            isOpen: true
        })
    }

    handleCloseForm = () => {
        this.setState({
            isOpen:false
        })
    }

    render() {
        const {isOpen} = this.state
        const {works} = this.props
        return (
        <Grid>
            <Grid.Column width ={10}>
                <WorkList 
                    works = {works}
                />
            </Grid.Column>
            <Grid.Column width = {6}>
                <Button onClick={this.handleOpenForm} positive content="Create work"/>
                {isOpen && 
                <WorkForm 
                    handleCloseForm={this.handleCloseForm}
                    createWork={(work) => this.props.createWork(work)}
                />}
            </Grid.Column>
        </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    works: state.work.works
})



export default connect(mapStateToProps,{
    createWork: actionCreators.createWork,
})(WorkDashboard);
