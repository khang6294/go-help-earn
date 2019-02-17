import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'
import WorkDetailsHeader from './WorkDetailsHeader';
import WorkDetailsInfo from './WorkDetailsInfo';
import WorkDetailsChat from './WorkDetailsChat';
import WorkDetailsSidebar from './WorkDetailsSidebar';

const mapStateToProps = (state, ownProps) => {
    const workId = ownProps.match.params.workId;

    let work = {};

    if (workId && state.work.works.length > 0) {
        work = state.work.works.filter(work => work.id === workId)[0]
    }

    return {
        work: work,
        works: state.work.works
        
    }
}

const EventDetailsPage = ({work,works}) => {
    console.log(works)
    return (
        <Grid>
        <Grid.Column width={10}>
            <WorkDetailsHeader work={work} />
            <WorkDetailsInfo work={work} />
            <WorkDetailsChat />
        </Grid.Column>
        <Grid.Column width={6}>
            <WorkDetailsSidebar attendees={work.attendees}/>
        </Grid.Column>
        </Grid>
    );
};

export default connect(mapStateToProps)(EventDetailsPage);
