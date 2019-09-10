import React from 'react'
import EditLocationModal from './EditLocationModal/EditLocationModal'
import { Card, CardGroup, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

function LocationsList(props){
    const locations = props.locations.map(function(location){
        return(
            <div>
            <CardGroup>
            <Card body inverse color="primary">
            <div key={location._id}>
            <h3>{location.city}, {location.state}, {location.country}</h3>
            <p>{location.post}</p>
            <Button color="warning" onClick={()=>{
                props.deleteLocation(location._id)
            }}>Delete</Button>
            <EditLocationModal id={location._id} updateLocations = {props.updateLocations} />
            </div>
            </Card>
            </CardGroup>
            </div>
        )
    })
    return(
        <ul>
            {locations}
        </ul>
    )
}

export default LocationsList