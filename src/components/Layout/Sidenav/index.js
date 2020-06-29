import React from "react";
import { Menu } from "antd";
import { withRouter } from "react-router";
import { Layout } from "antd";
import {
  ShoppingCartOutlined,
  LaptopOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import ClothIcon from "../../../assets/icons/";
import Logo from "../../Logo/Logo";
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
            <Logo />
            <span className="f3 i georgia" style={{ color: "orange" }}>
              Buy it
            </span>
          </div>

          <Menu.Item
            key="/app/user/dashboard"
            icon={<ShoppingCartOutlined style={{ fontSize: "32px" }} />}
            className="mb-3"
          >
            <span className="ml-2">Shopping Card</span>
          </Menu.Item>
          <Menu.Item
            key="/app/user/cloth"
            icon={<ClothIcon />}
            className="mb-3"
          >
            <span className="ml-3">Cloth</span>
          </Menu.Item>
          <Menu.Item
            key="/app/user/computers"
            icon={<LaptopOutlined style={{ fontSize: "32px" }} />}
            className="mb-3"
          >
            <span className="ml-2">Electronic </span>
          </Menu.Item>

          <Menu.Item
            key="/app/user/animal"
            icon={<GithubOutlined style={{ fontSize: "32px" }} />}
            className="mb-3"
          >
            <span className="ml-2">Animal </span>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}
export default withRouter(Sider);
