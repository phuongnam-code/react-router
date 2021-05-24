import { Switch, Route } from "react-router-dom";
import routes from "../constant/routes";
import NotFound from "../pages/NotFound";

const RouteComponent = () => (
    <Switch>
        {routes.map((route, index) => (
            <Route 
                exact={route.exact} 
                path={route.path} 
                component={route.component} 
                key={index} />
        ))}
        <Route path='' component={NotFound}/>
    </Switch>
)

export default RouteComponent;