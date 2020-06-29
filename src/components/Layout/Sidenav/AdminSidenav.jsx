import React from "react";
import { Menu } from "antd";
import { withRouter } from "react-router";
import { Layout } from "antd";
import { UserAddOutlined, ShopOutlined, HomeOutlined } from "@ant-design/icons";

class Sider extends React.Component {
  handleClick = (e) => {
    const key = e.key;
    this.props.history.push(key);
  };

  render() {
    return (
      <Layout.Sider style={{ background: "#fff" }}>
        <Menu
          onClick={this.handleClick}
          style={{ height: "100vh" }}
          mode="inline"
          theme="light"
        >
          <div
            className="mb-4 mt-4"
            style={{
              textAlign: "center",
            }}
          >
            <HomeOutlined style={{ fontSize: "50px" }} />
            <span className="f3 i georgia ml-1" style={{ color: "orange" }}>
              Buy it
            </span>
          </div>

          <Menu.Item
            key="/app/admin/dashboard"
            icon={<UserAddOutlined style={{ fontSize: "32px" }} />}
            className="mb-3 mt-4"
          >
            <span className="ml-2">User Information</span>
          </Menu.Item>
          <Menu.Item
            key="/app/admin/store"
            icon={<ShopOutlined style={{ fontSize: "32px" }} />}
            className="mb-3 mt-4"
          >
            <span className="ml-3">Store</span>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}
export default withRouter(Sider);
