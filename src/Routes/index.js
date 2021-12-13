import { Route } from "react-router-dom"
import { Switch } from "react-router";
import Home from "../home"
import Single from "../single"
import Nav from "../components/nav";
import PageNavigation from "../navigation";


export default function Routes() {
 
    return (
        <div>
            <Nav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={Single} />
            <Route exact path="/page/:id" component={PageNavigation} />
        </Switch>
        </div>
    )
}