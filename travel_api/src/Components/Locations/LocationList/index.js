import React from 'react'
import EditLocationModal from './EditLocationModal/EditLocationModal'

function LocationsList(props){
    const locations = props.locations.map(function(location){
        return(
            <li key={location._id}>
            <h3>{location.city}, {location.country}</h3>
            <button onClick={()=>{
                props.deleteLocation(location._id)
            }}>Delete</button>
            <EditLocationModal id={location._id} updateLocations = {props.updateLocations} />
            </li>
        )
    })
    return(
        <ul>
            {locations}
        </ul>
    )
}

export default LocationsList