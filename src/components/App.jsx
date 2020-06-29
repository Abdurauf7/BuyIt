import React, { Component } from "react";
import loadable from "react-loadable";
import { Route, Switch, Redirect } from "react-router-dom";
import LoadingComponent from "./Loading/";
import { PrivateUserRoute } from "../routes/ProtectedRoutes";

let AsynAppLayout = loadable({
  loader: () => import("./Layout/AppLayout/"),
  loading: LoadingComponent,
});

let AsyncLogin = loadable({
  loader: () => import("../routes/Login/"),
  loading: LoadingComponent,
});
let AsyncAdmin = loadable({
  loader: () => import("./Layout/AppLayout/AppAdmin"),
  loading: LoadingComponent,
});

let AsyncRegister = loadable({
  loader: () => import("../routes/Register/"),
  loading: LoadingComponent,
});

class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <PrivateUserRoute
          path={`${match.url}app/user`}
          component={AsynAppLayout}
        />
        <PrivateUserRoute
          path={`${match.url}app/admin`}
          component={AsyncAdmin}
        />
        <Route path={`${match.url}app/register`} component={AsyncRegister} />
        <Route path={`${match.url}app/login`} component={AsyncLogin} />
        <Redirect from={`${match.url}`} to={`${match.url}app/login`} />
      </Switch>
    );
  }
}

export default App;
