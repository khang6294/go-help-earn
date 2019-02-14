import React, { Component } from 'react'
import WorkListItem from './WorkListItem'
class WorkList extends Component {
    render() {
        const {works} = this.props
        console.log(works)
        return (
        <div>
            <h1>Work List</h1>
            {works && works.map(work => 
            <WorkListItem 
                key={work.id}
                work={work}
            />)}
        </div>
        )
    }
}

export default WorkList
