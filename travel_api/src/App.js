import React, {Component} from 'react';
import Login from './Components/Login'
import Main from './Components/Main'
import Post from './Components/Post'
import Locations from './Components/Locations'
import Header from './Components/NavBar'
import Footer from './Components/Footer'


import './App.css';
import { log } from 'util';

class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn:false,
      username: null, 
      password: null,
      email: null,
      terms:'',
      items: [],
    }
  }

  login = (username) =>{
    this.setState({
      logged:true,
      username:username
    })
  }

  onChange = (e) =>{
    this.setState({term:e.target.value})
  }

  onSubmit = (e) =>{
    e.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
  }

  deleteItem = (index) =>{
    this.setState({
      items: this.state.items.filter((items,i)=>i!==index)
    })
  }

  handleRegister = async (formData) =>{
    console.log("Registered");
    console.log(formData);
    //check
    const registerResponse = await fetch("http://localhost:9000/api/v1/users/register" ,{      
    method: "POST",
      body: JSON.stringify(formData),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
      //check
    })
      const parsedResponse = await registerResponse.json()
      console.log(parsedResponse)
      if(parsedResponse.status.code === 201){
        console.log('Successful Registration');
        this.setState({
          loggedIn: true,
          username: parsedResponse.data.username
        })
        
      }
    }
  
  render(){
    return (
    <div className="App">
      {
    this.state.loggedIn ?
    <Locations/> 
    :
    <Login handleRegister={this.handleRegister}/>
      }
      </div>
    );
}
}

export default App;


