import React,{Component} from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import format from 'date-fns/format'
import WorkDetailsMap from './WorkDetailsMap'
class WorkDetailsInfo extends Component{
    state = {
        showMap: false
    }

    showMapToggle = () => {
        this.setState(prevState => ({
            showMap: !prevState.showMap
        }))
    }

    render(){
        const {work} = this.props
        let workDate;
        if (work.date) {
            workDate = work.date.toDate()
        }
        return (
            <Segment.Group>
            <Segment attached="top">
                <Grid>
                <Grid.Column width={1}>
                    <Icon size="large" color="teal" name="info" />
                </Grid.Column>
                <Grid.Column width={15}>
                    <p>{work.description}</p>
                </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                <Grid.Column width={1}>
                    <Icon name="calendar" size="large" color="teal" />
                </Grid.Column>
                <Grid.Column width={15}>
                    <span>{format(workDate, 'dddd Do MMMM')} at {format(workDate, 'HH:mm')} </span>
                </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                <Grid.Column width={1}>
                    <Icon name="marker" size="large" color="teal" />
                </Grid.Column>
                <Grid.Column width={11}>
                    <span>{work.place}</span>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button onClick={this.showMapToggle} color="teal" size="tiny" content="Show Map" />
                </Grid.Column>
                </Grid>
            </Segment>
            {this.state.showMap &&
            <WorkDetailsMap lat={work.placeCoord.lat} lng={work.placeCoord.lng}/>}
            </Segment.Group>
        );
    }
};


export default WorkDetailsInfo;
