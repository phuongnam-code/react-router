import React from "react";
import { Redirect } from "react-router-dom";

const withAuth = (Component) => {
    const AuthRoute = () => {
        const isAuth = !!localStorage.getItem("token");
        if (isAuth) {
            return <Component />;
        } else {
            alert("please login, click OK go to Login page")
            return <Redirect to="/login" />;
        }
    };
    return AuthRoute;
};

export default withAuth;