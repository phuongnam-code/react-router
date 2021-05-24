import React, { Component } from 'react';
import { Link } from "react-router-dom";
import menus from '../constant/menuList';

export class Menu extends Component {
    render() {
        const isAuth = !!localStorage.getItem("token");
        return (
            <div>
                <ul>
                    {menus.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    ))}
                    <li >
                        {isAuth ? <Link to='/logout'>Logout</Link> : <Link to='/login'>Login</Link>}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;
