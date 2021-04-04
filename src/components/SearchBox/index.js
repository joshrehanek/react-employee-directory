import React from 'react'
import { Form } from 'react-bootstrap';
import '../../styles.css'

export default function SearchBox(props) {
    return (
        <div>
        <Form.Control 
        className='searchBox' 
        size="sm" 
        type="text" 
        placeholder="Search an Employee"
        value={props.value} 
        onChange={props.handleSearchBox}
        />
    
        </div>
    )
}
