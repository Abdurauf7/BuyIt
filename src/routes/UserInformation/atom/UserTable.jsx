import React from "react";
import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const UserTable = ({ data, handleEdit, handleDelete }) => {
  const columns = [
    { key: "id", title: "#", dataIndex: "id" },
    { key: "name", title: "Name", dataIndex: "name" },
    { key: "address", title: "Address", dataIndex: "address" },
    { key: "phone", title: "Phone", dataIndex: "phone" },
    {
      key: "Action",
      title: "Action",
      render: (item) => (
        <>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(item)}
          />
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(item.id)}
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
      columns={columns}
      bordered
    />
  );
};

export default UserTable;
