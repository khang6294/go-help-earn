import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
import WorkList from '../WorkList/WorkList'
import * as actionCreators from '../../../store/actions/index'
import {connect} from 'react-redux'
import {firestoreConnect,isLoaded, isEmpty} from 'react-redux-firebase'
import Loading from '../../../app/layout/Loading'
class WorkDashboard extends Component {

    render() {
        const {works} = this.props
        if (!isLoaded(works) || isEmpty(works)) return <Loading inverted={true} />
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
        works: state.firestore.ordered.works 
    }
}

export default connect(mapStateToProps,{
    createWork: actionCreators.createWork,
})(
    firestoreConnect([{collection:'works'}])(WorkDashboard)
);
