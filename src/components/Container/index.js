import React, { useState } from 'react';
import DataTable from "../DataTable"
import { Form } from 'react-bootstrap';



export default function Container() {
    const [search, setSearch] = useState("");

        return (
            <div>
                <Form.Control
                    className='searchBox'
                    size="sm"
                    type="text"
                    placeholder="Search an Employee"
                    value={search}
                    onChange={({ target }) => setSearch(target.value)}
                />
                <br/>
                <DataTable
                   search={search}
                />
            </div>
        )
    }