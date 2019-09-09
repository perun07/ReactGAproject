import React, {Component} from 'react'

class Main extends Component {
    render(){
        return(
            <div>
                <h5>You are Logged in {this.props.username}</h5>    
            </div>
        )
    }
}

export default Main