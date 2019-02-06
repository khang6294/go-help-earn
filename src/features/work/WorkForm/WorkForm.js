import React, { Component } from 'react'
import {Segment,Form,Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import * as actionCreators from '../../../store/actions/index'

class WorkForm extends Component {

    state = {
        work: {...this.props.work}

    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.work.id) {
            this.props.updateWork(this.state.work);
            this.props.history.goBack();
        } else {
            const newWork = {
                ...this.state.work,
                hostPhotoURL: '/img/user.png'
            }
            this.props.createWork(newWork)
            this.props.history.push('/works')
        }
    }

    handleInputChange = (e) => {
        const newWork = {...this.state.work}
        newWork[e.target.name] = e.target.value;
        this.setState({
            work: newWork
        })
    }

    render() {
        const {work} = this.state
        return (
        <>
            <Segment>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Work Title</label>
                    <input name="title" value={work.title} onChange={this.handleInputChange} placeholder="Work Name" />
                </Form.Field>
                <Form.Field>
                    <label>Event Date</label>
                    <input name="date" value={work.date} onChange={this.handleInputChange} type="date" placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input name="city" value={work.city} onChange={this.handleInputChange} placeholder="City work is taking place" />
                </Form.Field>
                <Form.Field>
                    <label>Venue</label>
                    <input name="venue" value={work.venue} onChange={this.handleInputChange} placeholder="Enter the Venue of the work" />
                </Form.Field>
                <Form.Field>
                    <label>Fee</label>
                    <input name="fee" value={work.fee} onChange={this.handleInputChange} placeholder="Enter the fee for the work" />
                </Form.Field>
                <Form.Field>
                    <label>Posted By</label>
                    <input name="postedBy" value={work.postedBy} onChange={this.handleInputChange} placeholder="Enter the name of person posting" />
                </Form.Field>
                <Button positive type="submit">
                    Submit
                </Button>
                <Button type="button" onClick ={this.props.history.goBack}>
                    Cancel
                </Button>
            </Form>
            </Segment>
        </>
        )
    }
}


const mapStateToProps = (state,ownProps) => {
    const workId = ownProps.match.params.workId;

    let work = {
        title: '',
        date:'',
        city:'',
        fee: 0,
        venue:'',
        postedBy:''
    }
  
    if (workId && state.work.works.length > 0) {
      work = state.work.works.filter(work => work.id === workId)[0]
    }
  
    return {
      work:work
    }
}

export default connect(mapStateToProps,{
    createWork: actionCreators.createWork,
    updateWork: actionCreators.updateWork
})(WorkForm)