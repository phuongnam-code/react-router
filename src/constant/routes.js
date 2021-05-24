import Home from "../pages/Home";
import About from "../pages/About";
import Topics from "../pages/Topics";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        exact: false,
        component: About
    },
    {
        path: '/topics',
        exact: false,
        component: Topics
    },
    {
        path: '/profile',
        exact: false,
        component: Profile
    },
    {
        path: '/login',
        exact: false,
        component: Login
    },
    
    {
        path: '/logout',
        exact: false,
        component: Logout
    },
];

export default routes;