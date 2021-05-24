import React from "react";
import { Router } from "react-router-dom";
import history from "./config/history";
import Menu from "./components/Menu";
import RouteComponent from "./components/RouteComponent";

export default function App() {
    return (
        <Router history={history}>
            <div className="App">
                <Menu />
                <RouteComponent />
            </div>
        </Router>
    );
}