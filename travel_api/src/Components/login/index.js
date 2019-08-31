import React, { Component } from 'react'

class Login extends Component {
    constructor(){
    super()
    this.state = {
        username: '',
        password: '',
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
            <div><h1>Login</h1>
            
        <form onSubmit={this.handleSubmit}>
            <input type='text' name='username' placeholder='username' value = {this.state.username} onChange={this.handleChange}/>
            <input type = 'password' name= "password" placeholder="password" value = {this.state.password} onChange={this.handleChange}/>
            <input type = 'submit' value='Submit'/>
        </form>
        </div>
    )
    }
}

export default Login