import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import WorkList from '../WorkList/WorkList'
import * as actionCreators from '../../../store/actions/index'
import {connect} from 'react-redux'

class WorkDashboard extends Component {

    state = {
    }

    render() {
        const {works} = this.props
        return (
        <Grid>
            <Grid.Column width ={10}>
                <WorkList 
                    works = {works}
                />
            </Grid.Column>
            <Grid.Column width = {6}>
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
