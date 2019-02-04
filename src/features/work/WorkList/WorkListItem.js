import React, { Component } from 'react'
import {Segment,Item,Icon,List,Button} from 'semantic-ui-react'
import WorkListAttendee from './WorkListAttendee'
class WorkListItem extends Component {
    render() {
        const {work} = this.props
        return (
            <div>
                <Segment.Group>
                <Segment>
                    <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src={work.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header as="a">{work.title}</Item.Header>
                            <Item.Meta>${work.fee}</Item.Meta>
                            <Item.Description>
                                Posted by <a>{work.postedBy}</a>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                    <Icon name="clock" /> {work.date} |
                    <Icon name="marker" /> {work.venue}
                    </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                    {work.attendees.map(attendee => <WorkListAttendee attendee={attendee} key={attendee.id}/>)}
                    </List>
                </Segment>
                <Segment clearing>
                <span>{work.description}</span>
                    <Button as="a" color="teal" floated="right" content="View" />
                </Segment>
                </Segment.Group>
            </div>
        )
    }
}

export default WorkListItem