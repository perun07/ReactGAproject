import React, {Component} from 'react';
import Login from './Components/Login'
import Main from './Components/Main'
import Post from './Components/Post'
import Locations from './Components/Locations'
import Header from './Components/NavBar'
import Footer from './Components/Footer'


import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      logged:false,
      username: '', 
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
  
  render(){
    console.log(this.state);
    
    return (
    <div className="App">
    <h1>Country Search</h1>
    {this.state.logged ? <Main username={this.state.username}/> : <Login login={this.login}/>}
    <Locations/>
    <form onSubmit={this.onSubmit}>
      <input value={this.state.term} onChange={this.onChange} />
      <button>Submit</button>
    </form>
    <Post items={this.state.items} deleteItem = {this.deleteItem}/>
    </div>
  );
}
}
export default App;
