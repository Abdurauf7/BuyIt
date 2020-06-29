import React from "react";
import { Form, Input, Layout, InputNumber, Button, Typography } from "antd";
import { withRouter } from "react-router-dom";

const AdminSettingsFrom = ({ history, data, handleEdit }) => {
  console.log(data);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 6 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <Layout>
      <Layout.Content className="bg-light mt-5">
        <Typography.Title
          className="i serif pt-2 mb-2"
          style={{ marginLeft: "41%" }}
          level={1}
        >
          Settings
        </Typography.Title>
        <Form
          {...layout}
          onFinish={(values) => handleEdit({ id: data.id, ...values })}
          className="mt-5"
        >
          <Form.Item label="Name" name="admin_name">
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="admin_address"
            initialValue={data.address === "" ? data.address : data.address}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="admin_phone"
            // initialValue={data.phone}
          >
            <InputNumber min={0} className="w-100" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: "email" }]}
            // initialValue={data.email}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="admin_password"
            // initialValue={data.password}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Edit
            </Button>

            <Button
              onClick={() => history.push("/app/admin/dashboard")}
              className="ml-5"
              type="danger"
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
        {/* </div> */}
      </Layout.Content>
    </Layout>
  );
};

export default withRouter(AdminSettingsFrom);
