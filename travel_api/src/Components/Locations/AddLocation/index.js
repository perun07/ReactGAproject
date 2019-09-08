import React, { Component } from  'react'

class AddLocation extends Component {
    constructor(){
        super()
        this.state = {
            country: "",
            city: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] :e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(typeof(this.props.createLocation))
        this.props.createLocation(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Location</h4>
                <label htmlFor= "city">City:</label>
                <input type = "text" name = "city" onChange = {this.handleChange}/>
                <br></br>
                <label htmlFor="country">Country</label>
                <input type = "text" name = "country" onChange = {this.handleChange}></input>
                <input type="submit" value="Add a Location" />
            </form>
        )
    }
}

export default AddLocation