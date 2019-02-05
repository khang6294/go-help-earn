import React, { Component } from 'react'
import {Segment,Form,Button} from 'semantic-ui-react'

class WorkForm extends Component {

    state = {
        event: {
            title: '',
            date:'',
            city:'',
            venue:'',
            postedBy:''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createWork(this.state.event)
    }

    handleInputChange = (e) => {
        const newEvent = {...this.state.event}
        newEvent[e.target.name] = e.target.value;
        this.setState({
            event: newEvent
        })
    }

    render() {
        const {handleCloseForm} = this.props
        const {event} = this.state
        return (
        <>
            <Segment>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Work Title</label>
                    <input name="title" value={event.title} onChange={this.handleInputChange} placeholder="Work Name" />
                </Form.Field>
                <Form.Field>
                    <label>Event Date</label>
                    <input name="date" value={event.date} onChange={this.handleInputChange} type="date" placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input name="city" value={event.city} onChange={this.handleInputChange} placeholder="City work is taking place" />
                </Form.Field>
                <Form.Field>
                <label>Venue</label>
                <input name="venue" value={event.venue} onChange={this.handleInputChange} placeholder="Enter the Venue of the work" />
                </Form.Field>
                <Form.Field>
                    <label>Posted By</label>
                    <input name="postedBy" value={event.postedBy} onChange={this.handleInputChange} placeholder="Enter the name of person posting" />
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