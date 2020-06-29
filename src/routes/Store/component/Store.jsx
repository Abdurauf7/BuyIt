import React, { useState, useEffect } from "react";

import { Layout, Button } from "antd";
import StoreTable from "../atom/StoreTable";
import StoreModal from "../atom/StoreAddDrawer";
import StoreEditModal from "../atom/StoreEditModal";

import { addStoreItem, getStoreData, Edit, Delete } from "../../../constants/";

const Store = () => {
  const [data, setData] = useState([]);
  const [editableData, setEditableData] = useState({});
  const [modalVisible, setModalVisible] = useState();
  const [drawerVisible, setDrawerVisible] = useState();

  const handleEdit = (item) => {
    setModalVisible(true);
    setEditableData(item);
  };
  const handleDrawer = () => {
    setDrawerVisible(true);
  };

  useEffect(() => {
    getStoreInfo();
  }, []);

  const handleDelete = (item) => {
    Delete(item, "product/delete", getStoreInfo);
  };
  const getStoreInfo = () => {
    getStoreData(setData, "product");
  };
  const handleAdd = (item) => {
    addStoreItem(item, "product/add", getStoreInfo);
    setDrawerVisible(false);
  };
  const handleUpdate = (item) => {
    Edit(item, "product/edit", getStoreInfo);
    setModalVisible(false);
  };
  const handleCancel = (props) => {
    setModalVisible(props);
  };
  const handleClose = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout>
      <Layout.Content
        className="bg-light"
        style={{ width: "95%", margin: "4em auto" }}
      >
        <Button
          type="primary"
          className="float-right m-5  mr-5"
          onClick={handleDrawer}
        >
          Add
        </Button>
        <StoreTable data={data} onDelete={handleDelete} onEdit={handleEdit} />
        <StoreModal
          handleAdd={handleAdd}
          visible={drawerVisible}
          onCancel={handleClose}
        />
        <StoreEditModal
          data={editableData}
          handleUpdate={handleUpdate}
          visible={modalVisible}
          onCancel={handleCancel}
        />
      </Layout.Content>
    </Layout>
  );
};

export default Store;
