import React, { Component } from 'react'
import {Segment,Form,Button,Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import PlacesAutocomplete from 'react-places-autocomplete';
import {geocodeByAddress,getLatLng} from 'react-places-autocomplete';
import * as actionCreators from '../../../store/actions/index'

class WorkForm extends Component {

    state = {
        work: {...this.props.work},
    }

    handlePlaceSelect = selectedPlace => {
        geocodeByAddress(selectedPlace)
            .then(results => getLatLng(results[0]))
            .then(latlng => {
                const newWork = {...this.state.work}
                newWork.place = selectedPlace;
                newWork.placeCoord = latlng
                this.setState({
                    work: newWork,
                    loadSuggest:false
                });
            })
    };

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
            console.log(newWork)
            this.props.createWork(newWork)
            this.props.history.push('/works')
        }
    }

    handleInputChange = (e) => {
        const newWork = {...this.state.work}
        newWork[e.target.name] = e.target.value;
        this.setState({
            work: newWork,
        })
    }

    handlePlaceChange = (place) => {
        const newWork = {...this.state.work}
        newWork.place = place
        this.setState({ work: newWork,loadSuggest: true });
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
                    <label>Place</label>
                    <PlacesAutocomplete
                        value={this.state.work.place}
                        onChange={this.handlePlaceChange}
                        onSelect={this.handlePlaceSelect}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                            {...getInputProps({
                                placeholder: 'Event Place ...',
                                className: 'location-search-input',
                                
                            })}
                            />
                            {this.state.work.place !== "" && this.state.loadSuggest && 
                            <Segment style={{zIndex:100,position:'absolute'}}>
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                                );
                            })}
                            </Segment>
                            }
                        </div>
                        )}
                    </PlacesAutocomplete>
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
        fee: 0,
        place:'',
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