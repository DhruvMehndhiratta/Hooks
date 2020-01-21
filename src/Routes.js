import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import {
    Homepage
} from './containers';
import { Header } from './components';


const PublicRoute = ({component:Component, ...rest }) => (
    <Route {...rest} render={props => {
        return(
            <div>
                <Header />
                <Component {...props} />
            </div>
        )
    }}
    />
)

const Routes = () => (
    <Router >
        <Switch>
            <PublicRoute exact path="/" component={Homepage}/>
        </Switch>
    </Router>
);

  export default Routes;