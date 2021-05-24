import React, { Component } from 'react'

export class Logout extends Component {
    logout = () => {
        localStorage.removeItem("token");
        this.props.history.push("/");
        window.location.reload();
    };
    render() {
        return (
            <div>
                <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}

export default Logout
