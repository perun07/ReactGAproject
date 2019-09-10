import React, { Component } from 'react'
import { log } from 'util'

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
            <form onSubmit={this.handleSubmit}>
                username: <input type = "text" name="username" onChange={this.handleChange}/>
                password: <input type = "text" name="password" onChange={this.handleChange}/>
                email: <input type = "text" name="email" onChange={this.handleChange}/>
                <input type = "submit" value="Register"/>
            </form>
        )
    }
}

export default Register