import React, {Component} from 'react';
import API from "../../utils/API"
import Table from "../Table"
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
        .then(res => this.setState({ employees: res.data }))
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
        this.searchEmployees(this.state.search)
    };

    render() {
        console.log(this.state.employees)
        return (
            <div>
                <Table 
                users ={this.state.filteredEmployees} 

                />
            
    

            </div>
        )
    }
}

export default Container;