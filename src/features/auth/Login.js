import React, { Component } from 'react'
import {Segment,Form,Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import * as actionCreators from '../../store/actions/index'

class LoginForm extends Component {

    state = {
        email:'',
        password:''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {email,password} = this.state
        return (
        <div>
            <Segment>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    <input name="email" type="email" value={email} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input name="password" type="password" value={password} onChange={this.handleInputChange} />
                </Form.Field>
                <Button positive type="submit">
                    Login
                </Button>
                <Button type="button">
                    Cancel
                </Button>
            </Form>
            </Segment>
        </div>
        )
    }
}

export default LoginForm
