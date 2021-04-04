import React, { Component } from 'react';
import API from "../../utils/API"
import DataTable from "../DataTable"
// import SearchBox from "../SearchBox"
import { Form } from 'react-bootstrap';


class Container extends Component {
    state = {
        search: "",
        employees: [{}],
        filteredEmployees: [{}]
    }

    componentDidMount() {
        API.getUsers()
            .then(res => {
                this.setState({
                    employees: res.data.results,
                    filteredEmployees: res.data.results
                })
            });
    }

    searchEmployees = query => {
        API.search(query)
            .then(res => this.setState({ filteredEmployees: res.data }))
            .catch(err => console.log(err));
    }

    handleSearchBoxChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.state({
            [name]: value
        })
    }

    handleSearchBoxSubmit = e => {
        e.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        console.log(this.state.employees)
        return (
            <div>
                <Form.Control
                    className='searchBox'
                    size="sm"
                    type="text"
                    placeholder="Search an Employee"
                    value={this.search}
                    onChange={this.handleSearchBox}
                />

                <DataTable
                    users={this.state.Employees}
                    value={this.Employees}
                />
            </div>
        )
    }
}

export default Container;