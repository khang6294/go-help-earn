import React,{Component} from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { withFirestore } from 'react-redux-firebase';
import WorkDetailsHeader from './WorkDetailsHeader';
import WorkDetailsInfo from './WorkDetailsInfo';
import WorkDetailsChat from './WorkDetailsChat';
import WorkDetailsSidebar from './WorkDetailsSidebar';
import objectToArray from '../../../app/utils/objectToArray'

const mapStateToProps = (state, ownProps) => {
    let work = {};
    if (state.firestore.ordered.works && state.firestore.ordered.works[0]) {
        work = state.firestore.ordered.works[0];
    }
    return {
        work: work,
    }
}

class EventDetailsPage extends Component{

    componentDidMount() {
        const { firestore, match } = this.props;
        firestore.setListener(`events/${match.params.id}`);
    }

    render(){
        const { work } = this.props;
        const attendees =
        work && work.attendees && objectToArray(work.attendees);
        return(
        <Grid>
            <Grid.Column width={10}>
                <WorkDetailsHeader work={work} />
                <WorkDetailsInfo work={work} />
                <WorkDetailsChat />
            </Grid.Column>
            <Grid.Column width={6}>
                {/* <WorkDetailsSidebar attendees={Object.values(work.attendees)}/> */}
            </Grid.Column>
            </Grid>
        )
    }
}

export default withFirestore(connect(mapStateToProps)(EventDetailsPage));
