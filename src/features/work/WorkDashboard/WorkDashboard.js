import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import WorkList from '../WorkList/WorkList'
import * as actionCreators from '../../../store/actions/index'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
class WorkDashboard extends Component {

    state = {
    }

    render() {
        const {works} = this.props
        console.log(works)

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
    works: state.firestore.ordered.works
})



export default connect(mapStateToProps,{
    createWork: actionCreators.createWork,
})(
    firestoreConnect([{collection:'works'}])(WorkDashboard)
);
