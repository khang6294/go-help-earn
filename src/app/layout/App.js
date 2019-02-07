import React, { Component } from 'react';
import NavBar from '../../features/nav/NavBar/NavBar'
import WorkDashboard from '../../features/work/WorkDashboard/WorkDashboard'
import {Container} from 'semantic-ui-react'
import HomePage from '../../features/home/HomePage'
import {Switch, Route} from 'react-router-dom'
import WorkDetailsPage from '../../features/work/WorkDetails/WorkDetailsPage'
import WorkForm from '../../features/work/WorkForm/WorkForm'
import ModalManager from '../../features/modal/ModalManger'
class App extends Component {
    render() {
        return (
            <>
            <ModalManager/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
            </Switch>
            <Route 
                path="/(.+)"
                render = {() => (
                    <>
                        <NavBar/>
                        <Container className="main">
                            <Switch>
                                <Route path="/works" component={WorkDashboard}/>
                                <Route path="/work/:workId" exact component ={WorkDetailsPage}/>
                                <Route path="/manage/:workId" component={WorkForm} />
                                <Route path="/createWork" component = {WorkForm}/>
                            </Switch>
                        </Container>
                    </>
                    )}
            />  
            </>
        );
    }
}

export default App;
