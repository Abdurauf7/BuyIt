import React from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { ExportOutlined, SettingOutlined } from "@ant-design/icons";
import { withRouter } from "react-router";
import auth from "../../../routes/UserInformation/auth";

const AppHeader = ({ history }) => {
  const handleClick = (e) => {
    const key = e.key;
    if (key === "/app/user/settings") {
      history.replace(key);
    } else if (key === "/") {
      auth.logout(() => {
        localStorage.removeItem("user");
        localStorage.clear();
        history.replace(key);
      });
    }
  };
  const menu = (
    <Menu onClick={handleClick}>
      <Menu.Item key="/app/user/settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="/" icon={<ExportOutlined />}>
        Quit
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout.Header style={{ background: "#fff" }}>
      <div
        style={{
          float: "right",
        }}
      >
        <Dropdown overlay={menu} className="ml-4" placement="bottomCenter">
          <Avatar
            size="large"
            style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          >
            {localStorage.getItem("user")}
          </Avatar>
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default withRouter(AppHeader);
