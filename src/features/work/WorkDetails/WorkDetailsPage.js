import React,{Component} from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { withFirestore } from 'react-redux-firebase';
import WorkDetailsHeader from './WorkDetailsHeader';
import WorkDetailsInfo from './WorkDetailsInfo';
import WorkDetailsChat from './WorkDetailsChat';

const mapStateToProps = (state, ownProps) => {
    let work = {};
    if (state.firestore.ordered.works && state.firestore.ordered.works[0]) {
        work = state.firestore.ordered.works.filter(work => work.id === ownProps.match.params.workId)[0]
    }
    return {
        work: work,
    }
}

class EventDetailsPage extends Component{

    componentDidMount() {
        const { firestore, match } = this.props;
        firestore.setListener(`works/${match.params.workId}`);
    }

    componentWillUnmount() {
        const { firestore, match } = this.props;
        firestore.unsetListener(`works/${match.params.workId}`);
    }

    render(){
        const { work } = this.props;
        return(
            <Grid>
                <Grid.Column width={10}>
                    <WorkDetailsHeader work={work} />
                    <WorkDetailsInfo work={work} />
                    <WorkDetailsChat />
                </Grid.Column>
            </Grid>
        )
    }
}

export default withFirestore(connect(mapStateToProps)(EventDetailsPage));
