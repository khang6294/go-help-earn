import React, { Component } from 'react'
import {Segment,Form,Button} from 'semantic-ui-react'

class WorkForm extends Component {
    render() {
        const {handleCloseForm} = this.props
        return (
        <>
            <Segment>
            <Form>
                <Form.Field>
                    <label>Work Title</label>
                    <input placeholder="Work Name" />
                </Form.Field>
                <Form.Field>
                    <label>Event Date</label>
                    <input type="date" placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                <label>Venue</label>
                <input placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                    <label>Posted By</label>
                    <input placeholder="Enter the name of person posting" />
                </Form.Field>
                <Button positive type="submit">
                    Submit
                </Button>
                <Button type="button" onClick ={handleCloseForm}>
                    Cancel
                </Button>
            </Form>
            </Segment>
        </>
        )
    }
}


export default WorkForm