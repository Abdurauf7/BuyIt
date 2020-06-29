import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter, Switch } from "react-router-dom";
import loadable from "react-loadable";
import LoadingComponent from "../../Loading";
import { Layout } from "antd";

let AsyncDashboard = loadable({
  loader: () => import("../../../routes/Dashboard/"),
  loading: LoadingComponent,
});

let AsyncColth = loadable({
  loader: () => import("../../../routes/Cloth"),
  loading: LoadingComponent,
});

let AsyncComputer = loadable({
  loader: () => import("../../../routes/Computer"),
  loading: LoadingComponent,
});

let AsyncAnimal = loadable({
  loader: () => import("../../../routes/Animal"),
  loading: LoadingComponent,
});

let AsyncSettings = loadable({
  loader: () => import("../../../routes/Settings"),
  loading: LoadingComponent,
});
const Content = ({ match }) => {
  return (
    <Layout.Content>
      <Switch>
        <Route path={`${match.url}/dashboard`} component={AsyncDashboard} />
        <Route path={`${match.url}/cloth`} component={AsyncColth} />
        <Route path={`${match.url}/computers`} component={AsyncComputer} />
        <Route path={`${match.url}/animal`} component={AsyncAnimal} />
        <Route path={`${match.url}/settings`} component={AsyncSettings} />
        <Redirect from={`${match.url}`} to={`${match.url}/dashboard`} />
      </Switch>
    </Layout.Content>
  );
};

export default withRouter(Content);
