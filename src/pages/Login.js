import React, { Component } from 'react';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    login = (e) => {
        e.preventDefault();
        localStorage.setItem("token", "some-login-token");
        this.props.history.push("/profile/Nam");
        window.location.reload();
    }

    onChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        console.log()
        return (
            <form onSubmit={this.login} autoComplete='off'>

                <div className="tooltip">
                    <h3>Đăng nhập</h3>
                    <p>
                        <label >Username:</label>
                        <input name="username" onChange={this.onChange} placeholder='admin'/>
                    </p>
                    <p>
                        <label >Password:</label>
                        <input name="password" onChange={this.onChange} placeholder='admin'/>
                    </p>
                    <button type="submit">login</button>
                </div>
                
            </form>
        )
    }
}

export default Login;
