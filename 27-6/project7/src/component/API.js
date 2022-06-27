import React from 'react';
class API extends React.Component {
    constructor(props) {
        super(props);
        this.state({
            employees: [],
            si: ''
        })
    }
    handleClick = (e) => {
        this.setState({ si: e.target.value })
    }
    componentDidMount() {
        fetch('https://breakingbadapi.com/api/characters')
            .then((response) => response.json())
            .then(employeeslist => {
                this.setState({ employees: employeeslist })
            })
    }
    render() {
        return (
            <>
                <input type="text" placeholder='search for a movie now' onChange={this.handleClick} />
                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.filter((name) => name.includes(this.state.si)).map((employee) => (
                                <tr>
                                    <th scope="row">{employee.char_id}</th>
                                    <td>{employee.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>)
    }
}
export default API;