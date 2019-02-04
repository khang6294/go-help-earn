import React, { Component } from 'react'
import {Grid,Button} from 'semantic-ui-react'
import WorkList from '../WorkList/WorkList'
import WorkForm from '../WorkForm/WorkForm'

const worksData = [
  {
    id: '1',
    title: 'Carry the sofa',
    date: '2018-03-27T11:00:00+00:00',
    fee: 15,
    category: 'help',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'Helsinki, Finland',
    venue: "Opastinsilta 2B, 00520, Helsinki, Finland",
    postedBy: 'Ken',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Kenji',
        photoURL: 'https://randomuser.me/api/portraits/men/21.jpg'
      },
      {
        id: 'b',
        name: 'Nhan',
        photoURL: 'https://randomuser.me/api/portraits/men/23.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Clean the house',
    date: '2018-03-28T14:00:00+00:00',
    fee:20,
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'Oulu, Finland',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    postedBy: 'Joe',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Nhan',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Khang',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


class WorkDashboard extends Component {

    state = {
        works: worksData,
        isOpen:false
    }

    handleOpenForm = () => {
        this.setState({
            isOpen: true
        })
    }

    handleCloseForm = () => {
        this.setState({
            isOpen:false
        })
    }

    render() {
        const {works,isOpen} = this.state
        return (
        <Grid>
            <Grid.Column width ={10}>
                <WorkList works = {works}/>
            </Grid.Column>
            <Grid.Column width = {6}>
                <Button onClick={this.handleOpenForm} positive content="Create work"/>
                {isOpen && <WorkForm handleCloseForm={this.handleCloseForm}/>}
            </Grid.Column>
        </Grid>
        )
    }
}

export default WorkDashboard;
