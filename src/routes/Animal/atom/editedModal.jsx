import React from "react";
import { Modal, Form, InputNumber, Button } from "antd";

const EditModal = ({ visible, handleEdit, data, onCancel }) => {
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={false}
      destroyOnClose={true}
    >
      <Form
        hideRequiredMark
        {...layout}
        className="mt-5"
        onFinish={(values) => handleEdit({ id: data.id, ...values })}
      >
        <Form.Item name="url" label="Image" initialValue={data.url}>
          <div className="w-50 mb-2">
            <img src={data.url} alt={data.about} />
          </div>
        </Form.Item>
        <Form.Item name="about" label="About" initialValue={data.about}>
          <div>
            <p>{data.about}</p>
          </div>
        </Form.Item>
        <Form.Item name="price" label="Price" initialValue={data.price}>
          <div className="mt-2">
            <p>{data.price}$</p>
          </div>
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantitiy"
          rules={[{ message: "Enter Your Quantity", required: true }]}
        >
          <InputNumber min={0} className="w-50" />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ marginLeft: "25%" }}
            block
            type="primary"
            htmlType="submit"
          >
            Buy
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
