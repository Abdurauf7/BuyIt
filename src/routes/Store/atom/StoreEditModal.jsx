import React from "react";
import { Form, Input, Select, InputNumber, Button, Modal } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const EditModal = ({ data, handleUpdate, visible, onCancel }) => {
  return (
    <Modal
      visible={visible}
      destroyOnClose={true}
      footer={false}
      onCancel={() => onCancel(false)}
    >
      <Form
        className="mt-4"
        {...layout}
        onFinish={(values) => handleUpdate({ id: data.id, ...values })}
      >
        <Form.Item label="Product" name="product_name" initialValue={data.name}>
          <Input placeholder="Enter Product Name" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="product_category"
          initialValue={data.category}
        >
          <Select>
            <Select.Option value="clothes">Clothes</Select.Option>
            <Select.Option value="technologies">Technologies</Select.Option>
            <Select.Option value="animals">Animals</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="About" name="product_about" initialValue={data.about}>
          <Input placeholder="Enter about product" />
        </Form.Item>
        <Form.Item label="Price" name="product_price" initialValue={data.price}>
          <InputNumber min={0} className="w-100" />
        </Form.Item>
        <Form.Item label="Image" name="product_image" initialValue={data.url}>
          <Input />
        </Form.Item>
        <Form.Item
          label="quantity"
          name="product_quantity"
          initialValue={data.quantity}
        >
          <InputNumber min={0} className="w-100" />
        </Form.Item>
        <Form.Item>
          <Button
            className="w-100"
            type="primary"
            style={{ marginLeft: "78%" }}
            htmlType="submit"
            block
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
