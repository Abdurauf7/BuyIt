import React, { Component } from "react";
import { Layout } from "antd";

import AppContent from "../Content";
import AppHeader from "../Header";
import AppSidenav from "../Sidenav";
import AppFooter from "../Footer";

class AppLayout extends Component {
  render() {
    return (
      <Layout>
        <AppSidenav />
        <Layout>
          <AppHeader />
          <Layout>
            <AppContent />
            <AppFooter />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
