import React from "react";
import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const StoreTable = ({ data, onEdit, onDelete }) => {
  const columns = [
    { key: "id", title: "#", dataIndex: "id", fixed: "left", width: "5%" },
    { key: "name", title: "Name", dataIndex: "name", width: "5%" },
    { key: "category", title: "Category", dataIndex: "category", width: "7%" },
    { key: "about", title: "About", dataIndex: "about" },
    { key: "price", title: "Price", dataIndex: "price", width: "5%" },
    {
      key: "image",
      title: "Image",

      render: (image) => (
        <div className="w-50">
          <img alt={image.name} src={image.url} />
        </div>
      ),
    },
    { key: "quantity", title: "Quantity", dataIndex: "quantity", width: "9%" },
    {
      key: "Action",
      title: "Action",
      fixed: "right",
      width: "8%",
      render: (item) => (
        <>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => onEdit(item)}
          />
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => onDelete(item.id)}
            className="ml-2"
          />
        </>
      ),
    },
  ];
  return (
    <Table
      style={{ width: "90%", margin: "5em auto" }}
      dataSource={data}
      bordered
      columns={columns}
      scroll={{ x: 1500, y: 5000 }}
    />
  );
};

export default StoreTable;
