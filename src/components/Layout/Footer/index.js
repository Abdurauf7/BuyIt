import React from "react";
import { Layout } from "antd";

const AppFooter = () => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
        background: "#f0f0f0",
        height: "5%",
      }}
    >
      <span> © 2020 TeamInc</span>
    </Layout.Footer>
  );
};

export default AppFooter;
