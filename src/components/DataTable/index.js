import React from 'react'
import './style.css'
import { Table } from 'react-bootstrap';

export default function DataTable({ Employees }) {
    return (
        <div>
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
                {this.Employees.map(function (users) {
                    return(
                    <tr>
                    <td>
                        <img src={users.picture.thumbnail} alt="profile"/>
                    </td>
                        <td>{users.name.first}</td>
                        <td>{users.name.last}</td>
                        <td>{users.email}</td>
                        <td>{users.location.state}, {users.location.country}</td>
                    </tr>
                    );
                })}
                </tbody>
            </Table>
       
                        {/* use .map function to map over fileteredEmployes for each user intaking props and make .row for each */}
            
        </div>
    )
}
