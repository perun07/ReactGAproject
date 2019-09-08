import React, { Component } from 'react';
import LocationsList from './LocationList'
// import { log } from 'util';

class Locations extends Component {
    constructor(){
        super()
        this.state = {
            locations: []
        }
    }
    componentDidMount(){
        console.log('component is mounted');
        this.getLocations()
    }

    getLocations = async ()=>{
        try {
            console.log('before request')
            const response = await fetch ('http://localhost:9000/api/v1/locations')
            console.log('after request')
            console.log(response)
            if (response.status !== 200){
                throw Error (response.statusText)
            }
            const locationsParsed = await response.json()
            this.setState({
                locations: locationsParsed.data
            })
        } catch(err){
            console.log('errored')
            console.log(err);
            return err
            
        }
    }
    render(){
        return (
            <div>
                <h1>Travel Locations</h1>
                <LocationsList locations={this.state.locations}/>
                {console.log(this.state.locations)}
                
            </div>
        )
    }
}

export default Locations