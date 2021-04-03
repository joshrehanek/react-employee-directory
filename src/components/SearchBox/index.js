import React from 'react'
import '../../styles.css'

export default function SearchBox(props) {
    return (
        <div className='searchBox'>
            <input 
            type='text'
            placeholder='Search an Employee'
            value={props.value}
            onChange={props.handleSearchBox}
            ></input>
        </div>
    )
}
