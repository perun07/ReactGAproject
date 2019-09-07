import React, { Component } from 'react';
import { log } from 'util';

class Locations extends Component {
    constructor(){
        super()

        this.state = {
            locations: []
        }
    }
    componentDidMount(){
        this.getLocations()
    }

    getLocations = async ()=>{
        try {
            const response = await fetch ('http://localhost:9000/api/v1/locations')
            if (response.status !== 200){
                throw Error (response.statusText)
            }
            const locationsParsed = await response.json()
            this.setState({locations:locationsParsed.data})
        } catch(err){
            console.log(err);
            return err
            
        }
    }
    render(){
        return (
            <div>
                <h1>Travel Locations</h1>
            </div>
        )
    }
}

export default Locations