import React from 'react'

const Search = (props) =>{

    const searchList = props.items.map((item,index)=> {
    return <li key={index}>{item} <button onClick={(e)=> props.deleteItem(index)}>Delete</button></li>
    })

    return(
        <div>
            <ul>
                {searchList}
            </ul>
        </div>
    )
}


export default Search