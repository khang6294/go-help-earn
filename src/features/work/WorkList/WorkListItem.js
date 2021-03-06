import React, { Component } from 'react'
import {Segment,Item,Icon,List,Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import WorkListAttendee from './WorkListAttendee'
import format from 'date-fns/format'

class WorkListItem extends Component {
    render() {
        const {work} = this.props
        return (
            <>
                <Segment.Group>
                <Segment>
                    <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src={work.creatorPhotoURL} />
                        <Item.Content>
                            <Item.Header as="a">{work.title}</Item.Header>
                            <Item.Meta>${work.fee}</Item.Meta>
                            <Item.Description>
                                Created by <a>{work.createdBy}</a>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                    <Icon name="clock" /> {format(work.date.toDate(), 'dddd Do MMMM')} at {format(work.date.toDate(), 'HH:mm')} |
                    <Icon name="marker" /> {work.place}
                    </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                    { work.attendees && 
                        Object.values(work.attendees).map(attendee => <WorkListAttendee attendee={attendee} key={attendee.id}/>)}
                    </List>
                </Segment>
                <Segment clearing>
                <span>{work.description}</span>
                    <Button 
                        as={Link} 
                        to={`/work/${work.id}`} 
                        color="teal" 
                        floated="right" 
                        content="View"
                    />
                </Segment>
                </Segment.Group>
            </>
        )
    }
}

export default WorkListItem