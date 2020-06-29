import React from "react";
import { Form, Input, Layout, InputNumber, Button } from "antd";
const From = ({ data, handleEdit, history }) => {
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
        <Form
          {...layout}
          onFinish={(values) => handleEdit({ id: data.id, ...values })}
          className="mt-5"
        >
          <Form.Item label="Name" name="customer_name" initialValue={data.name}>
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="customer_address">
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number" name="customer_phone">
            <InputNumber min={0} className="w-100" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="customer_password">
            <Input type="password" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Edit
            </Button>

            <Button
              onClick={() => history.replace("/app/user/dashboard")}
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

export default From;
