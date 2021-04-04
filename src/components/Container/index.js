import React, {Component} from 'react';
import API from "../../utils/API"
import DataTable from "../DataTable"
import SearchBox from "../SearchBox"


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

    handleSearchBoxChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.state({
            [name]: value
        })
    } 

    handleSearchBoxSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        console.log(this.state.employees)
        return (
            <div>
            <SearchBox 
            name="searchEmployee"
            value={this.handleSearchBoxChange}
            />
            <DataTable 
            users ={this.state.Employees} 
            value={this.Employees}
            />
            </div>
        )
    }
}

export default Container;