import React from 'react'

function LocationsList(props){
    const locations = props.locations.map(function(location){
        return(
            <li key={location._id}>
            <h3>{location.country}, {location.city}</h3>
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