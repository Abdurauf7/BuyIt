import React from "react";
import { Form, Modal, Input, Button, Typography, InputNumber } from "antd";
const UserModal = ({ data, visible, onCancel, handleEdit }) => {
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };

  return (
    <Modal
      visible={visible}
      onCancel={() => onCancel(false)}
      footer={null}
      destroyOnClose={true}
    >
      <Form
        {...layout}
        onFinish={(values) => handleEdit({ id: data.id, ...values })}
        className="mt-4"
      >
        <Form.Item
          label="User name"
          name="customer_name"
          initialValue={data.name}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="customer_address"
          initialValue={data.address}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="customer_phone"
          initialValue={data.phone}
        >
          <InputNumber className="w-100" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Edit
          </Button>
        </Form.Item>
        <Form.Item initialValue={data.id}>
          <Typography />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
