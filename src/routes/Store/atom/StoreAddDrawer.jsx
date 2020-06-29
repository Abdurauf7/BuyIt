import React from "react";

import { Form, Input, Select, InputNumber, Button, Drawer } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const EditModal = ({ handleAdd, visible, onCancel }) => {
  return (
    <Drawer
      title="Store Menu"
      width={480}
      visible={visible}
      destroyOnClose={true}
      onClose={onCancel}
    >
      <Form hideRequiredMark className="mt-4" {...layout} onFinish={handleAdd}>
        <Form.Item
          label="Product"
          name="product_name"
          rules={[{ message: "Enter Product name", required: true }]}
        >
          <Input placeholder="Enter Product Name" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="product_category"
          rules={[{ message: "Select category", required: true }]}
        >
          <Select placeholder="Select Category">
            <Select.Option value="clothes">Clothes</Select.Option>
            <Select.Option value="technologies">Technologies</Select.Option>
            <Select.Option value="animals">Animals</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="image"
          name="product_image"
          rules={[{ message: "Enter image url", required: true }]}
        >
          <Input placeholder="Enter image url" className="w-100" />
        </Form.Item>
        <Form.Item
          label="About product"
          name="product_detail"
          rules={[{ message: "Enter about product", required: true }]}
        >
          <Input.TextArea placeholder="Enter about product" className="w-100" />
        </Form.Item>
        <Form.Item
          label="Price"
          name="product_price"
          rules={[{ message: "Enter price", required: true }]}
        >
          <InputNumber placeholder="Enter price" min={0} className="w-100" />
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="product_quantity"
          rules={[{ message: "Enter quantity", required: true }]}
        >
          <InputNumber placeholder="Enter quantity" min={0} className="w-100" />
        </Form.Item>
        <Form.Item>
          <div style={{ marginLeft: "10em" }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default EditModal;
