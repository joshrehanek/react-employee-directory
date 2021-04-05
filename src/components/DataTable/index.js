import React, { useState, useEffect } from 'react';
import './style.css';
import { Table } from 'react-bootstrap';

export default function DataTable({ search }) {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=15&nat=us")
            .then((res) => res.json())
            .then((res) => {
                setEmployees(res.results)
            }
            )
    }, [])

    const handleSearchContents = (string, match) =>
        string.toLowerCase().indexOf(match.toLowerCase()) !== -1;

    const handleSearchBoxChange = ({ name, email }) =>
        !search ||
        handleSearchContents(name.first, search) ||
        handleSearchContents(name.last, search) ||
        handleSearchContents(email, search);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {employees
                    .filter(handleSearchBoxChange)
                    .map(({ name, email, location, picture }, i) =>
                        <EmployeeRow
                            name={ name }
                            email={ email }
                            location={ location }
                            picture={ picture }
                            i={i}
                        />)}
            </tbody>
        </Table>
    );


function EmployeeRow({ name, email, location, picture }) {
    return (
        <tr>
            <td>{ name.first }</td>
            <td>{ name.last }</td>
            <td>{ email }</td>
            <td>{ location.city }, { location.state }</td>
            <td><img src={ picture.thumbnail } alt="profile" /></td>
        </tr>
    );
};
};

