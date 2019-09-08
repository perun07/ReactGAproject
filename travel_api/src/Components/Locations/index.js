import React, { Component } from 'react';
import LocationsList from './LocationList'
import AddLocation from "./AddLocation"


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

    deleteLocation = async (id) => {
        console.log(id);
        try{
            const deleteLocation = await fetch (`http://localhost:9000/api/v1/locations/${id}`,{
            method: 'DELETE'
        })
        const locationsParsed = await deleteLocation.json()
        } catch(err){
            console.log(err);
            
        }
        
    }

    createLocation = async (formData) => {
        console.log(formData);
        
        try{
            const addLocation = await fetch('http://localhost:9000/api/v1/locations', {
                method: "POST",
                body: JSON.stringify(formData), 
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const locationsParsed = await addLocation.json()
            if(locationsParsed.status.code === 200){
                this.setState({
                    locations:[...this.state.locations]
            })
        }
        } catch(err){

        }
        
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
                <AddLocation createLocation = {this.createLocation}/>
                <LocationsList locations={this.state.locations} deleteLocation={this.deleteLocation}/>
                
            </div>
        )
    }
}

export default Locations