import React, {Component} from 'react'

class Main extends Component {
    render(){
        return(
            <div>
                <h1>You are Logged in {this.props.username}</h1>    
            </div>
        )
    }
}

export default Main