import React, { Component } from 'react'
import { Jumbotron, Button, Form, Input, Spinner } from 'reactstrap';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: null,
            password: null, 
            email: null
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
        console.log(this.state);
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log("submitted the form");
        this.props.handleRegister(this.state)
        
    }
    render(){
        return(
            <div>
            <Jumbotron>
            <Spinner color="primary" />
            <Spinner color="secondary" />
            <Spinner color="success" />
            <Spinner color="danger" />
            <Spinner color="warning" />
            <Spinner color="info" />
            <Spinner color="dark" />
            <Form onSubmit={this.handleSubmit}>
                username: <Input type = "text" name="username" onChange={this.handleChange}></Input>
                password: <Input type = "text" name="password" onChange={this.handleChange}></Input>
                email: <Input type = "text" name="email" onChange={this.handleChange}></Input>
                <Button color="secondary" type = "submit" >Register</Button>
            </Form>
            </Jumbotron>
            </div>
        )
    }
}

export default Register