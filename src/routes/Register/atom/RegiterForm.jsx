import React from "react";
import { Layout, Form, Button, Input, InputNumber, Typography } from "antd";

const Register = ({ handleRegister, history }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 7 },
  };

  return (
    <Layout style={{ background: "#fff" }}>
      <Layout.Content
        style={{ width: "85%", margin: "10% auto" }}
        className="bg-light p-5"
      >
        <Form hideRequiredMark {...layout} onFinish={handleRegister}>
          <Form.Item>
            <Typography className="i georgia f1" style={{ marginLeft: "145%" }}>
              Register
            </Typography>
          </Form.Item>
          <Form.Item
            label="Name"
            name="customer_name"
            rules={[{ message: "Enter Your Name", required: "true" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="customer_address"
            rules={[{ message: "Enter Your Address", required: "true" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="customer_phone"
            rules={[{ message: "Enter Your Phone", required: "true" }]}
          >
            <InputNumber className="w-100" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="customer_mail"
            rules={[
              { type: "email", message: "Enter Email", required: "true" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="customer_password"
            rules={[{ message: "Enter Your Password", required: "true" }]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item>
            <div style={{ marginLeft: "115%", display: "flex" }}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>

              <Button
                onClick={() => history.replace("/")}
                className="ml-2"
                type="danger"
                htmlType="submit"
              >
                Cancel
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Layout.Content>
    </Layout>
  );
};

export default Register;
