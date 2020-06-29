import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter, Switch } from "react-router-dom";
import loadable from "react-loadable";
import LoadingComponent from "../../Loading";
import { Layout } from "antd";

let AsyncUserInfo = loadable({
  loader: () => import("../../../routes/UserInformation/"),
  loading: LoadingComponent,
});

let AsyncStore = loadable({
  loader: () => import("../../../routes/Store/"),
  loading: LoadingComponent,
});

let AsyncSettings = loadable({
  loader: () => import("../../../routes/Settings/components/AdminSettings"),
  loading: LoadingComponent,
});
const AdminContent = ({ match }) => {
  return (
    <Layout.Content>
      <Switch>
        <Route path={`${match.url}/dashboard`} component={AsyncUserInfo} />
        <Route path={`${match.url}/store`} component={AsyncStore} />
        <Route path={`${match.url}/settings`} component={AsyncSettings} />
        <Redirect from={`${match.url}`} to={`${match.url}/dashboard`} />
      </Switch>
    </Layout.Content>
  );
};

export default withRouter(AdminContent);
