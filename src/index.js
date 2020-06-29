import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import Root from "./components/Root";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "tachyons";
import "react-tabs/style/react-tabs.css";

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
