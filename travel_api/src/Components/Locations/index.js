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
            method: 'DELETE',
            credentials: "include"
        })
        const locationsParsed = await deleteLocation.json()
        if(locationsParsed.status.code === 200){
            this.setState({
                locations:this.state.locations.filter(function(locations){
                    if(locations._id === id){
                        return false;
                    }else{
                        return true
                    }
                })
            })
        }
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
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const locationsParsed = await addLocation.json()
            console.log(locationsParsed);
            
            if(locationsParsed.status.code === 201){    
                this.setState({
                    locations:[...this.state.locations, locationsParsed.data]
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

    // updateLocations = async()=>{
    //     try{
    //         const updateLocation = await fetch(`http://localhost:9000/api/v1/locations/${id}`, {
    //             method: "PUT",
    //             body: JSON.stringify(formData),

    //         })
    //     }
    // }
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