import React, { Component } from 'react'
import Register from './Register/Register'
import { Card, CardGroup, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Login extends Component {
    constructor(){
    super()
    this.state = {
        username: null,
        password: null,
        email: null
    }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.login()
    }


    handleChange = (e) =>{
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

    render(){
        return(
            <div>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <h1>Register as a new User</h1>
                </Card>
            
        {/* <form onSubmit={this.handleSubmit}>
            <input type='text' name='username' placeholder='username' value = {this.state.username} onChange={this.handleChange}/>
            <input type = 'password' name= "password" placeholder="password" value = {this.state.password} onChange={this.handleChange}/>
            <input type = 'submit' value='Submit'/>
        </form> */}
        <Register handleRegister={this.props.handleRegister}/>
        </div>
    )
    }
}

export default Login