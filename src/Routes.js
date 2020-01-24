import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import {
    Homepage,
    Products
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
            <PublicRoute path="/products" component={Products}/>
        </Switch>
    </Router>
);

  export default Routes;