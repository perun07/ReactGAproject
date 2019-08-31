import React, {Component} from 'react';
import Login from './Components/login'
import Main from './Components/Main'
import Search from './Components/Search'


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
    {this.state.logged ? <Main username={this.state.username}/> : <Login login={this.login}/>}
    <h1>Contry Search</h1>
    <form onSubmit={this.onSubmit}>
      <input value={this.state.term} onChange={this.onChange} />
      <button>Submit</button>
    </form>
    <ToDo items={this.state.items} deleteItem = {this.deleteItem}/>
    </div>
  );
}
}
export default App;
