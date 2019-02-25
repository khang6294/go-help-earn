import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import format from 'date-fns/format'
import firebase from '../../../firebaseConfig'
const eventImageTextStyle = {
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'black'
};

const WorkDetailsHeader = ({work}) => {
    let user = firebase.auth().currentUser
    let workDate;
    if (work.date) {
        if(work.date.seconds){
            workDate = work.date.toDate()
        } else {
            workDate = work.date
        }
    }
    return (
        <Segment.Group>
        <Segment basic attached="top" style={{ padding: '0' }}>
            <Segment basic style={eventImageTextStyle}>
            <Item.Group>
                <Item>
                <Item.Content>
                    <Header
                    size="huge"
                    content={work.title}
                    style={{ color: 'black' }}
                    />
                    <p>{format(workDate, 'dddd Do MMMM')} at {format(workDate, 'HH:mm')} </p>
                    <p>
                    Posted by <strong>{work.createdBy}</strong>
                    </p>
                </Item.Content>
                </Item>
            </Item.Group>
            </Segment>
        </Segment>

        <Segment attached="bottom">
            { 
                user && user.uid === work.creatorUid ? 
                <Button>Cancel My Work</Button> :
                user ?
                <Button color="teal">TAKE THIS WORK</Button> :
                null
            }
            {user && user.uid === work.creatorUid && <Button as={Link} to={`/manage/${work.id}`} color="orange" floated="right">
            Manage Work
            </Button>}
        </Segment>
        </Segment.Group>
    );
};

export default WorkDetailsHeader;
