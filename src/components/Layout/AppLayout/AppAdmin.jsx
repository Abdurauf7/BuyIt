import React, { Component } from "react";
import { Layout } from "antd";

import AppContent from "../Content/AdminContent";
import AppHeader from "../Header/AdminHeader";
import AppSidenav from "../Sidenav/AdminSidenav";
import AppFooter from "../Footer";

class AppAdmin extends Component {
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

export default AppAdmin;
