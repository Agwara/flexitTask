import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "../pages/Home/Home"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import NoContentYet from "../pages/NoContentYet/NotContentYet"

import PrivateRoute from "./PrivateRoute"



const AppRouter = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />

      <PrivateRoute exact path="/message" component={NoContentYet} />
      
      <PrivateRoute exact path="/ranking" component={NoContentYet} />
      <PrivateRoute exact path="/challenge" component={NoContentYet} />
      <PrivateRoute exact path="/party" component={NoContentYet} />
      <PrivateRoute exact path="/connect" component={NoContentYet} />
      <PrivateRoute exact path="/parade" component={NoContentYet} />
      <PrivateRoute exact path="/group" component={NoContentYet} />

      <Route exact path="*" component={PageNotFound} />
    </Switch>
  </Router>  
)

export default AppRouter;