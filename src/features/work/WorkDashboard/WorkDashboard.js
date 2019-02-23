import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import WorkList from '../WorkList/WorkList'
import * as actionCreators from '../../../store/actions/index'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import Loading from '../../../app/layout/Loading'
class WorkDashboard extends Component {
    componentDidMount(){
        this.props.getWorksForDashboard()
    }
    render() {
        const {works,loading} = this.props
        // if (loading) return <Loading inverted={true} />;
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

const mapStateToProps = (state) => {
    return {
        works: state.work.works,
    }
}

export default connect(mapStateToProps,{
    createWork: actionCreators.createWork,
    getWorksForDashboard: actionCreators.getWorksForDashboard
})(
    firestoreConnect([{collection:'works'}])(WorkDashboard)
);
