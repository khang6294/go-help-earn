import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const eventImageTextStyle = {
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'black'
};

const WorkDetailsHeader = ({work}) => {
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
                    <p>{work.date}</p>
                    <p>
                    Posted by <strong>{work.postedBy}</strong>
                    </p>
                </Item.Content>
                </Item>
            </Item.Group>
            </Segment>
        </Segment>

        <Segment attached="bottom">
            <Button>Cancel My Work</Button>
            <Button color="teal">TAKE THIS WORK</Button>

            <Button as={Link} to={`/manage/${work.id}`} color="orange" floated="right">
            Manage Work
            </Button>
        </Segment>
        </Segment.Group>
    );
};

export default WorkDetailsHeader;