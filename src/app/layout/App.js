import React, { Component } from 'react';
import NavBar from '../../features/nav/NavBar'
import WorkDashboard from '../../features/work/WorkDashboard/WorkDashboard'
import {Container} from 'semantic-ui-react'
class App extends Component {
    render() {
        return (
        <div>
            <NavBar/>
            <Container className="main">
                <WorkDashboard/>
            </Container>
        </div>
        );
    }
}

export default App;
