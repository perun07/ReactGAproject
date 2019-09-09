import React from 'react'

function LocationsList(props){
    const locations = props.locations.map(function(location){
        return(
            <li key={location._id}>
            <h3>{location.city}, {location.country}</h3>
            <button onClick={()=>{
                props.deleteLocation(location._id)
            }}>Delete</button>
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