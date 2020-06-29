import React, { useState, useEffect } from "react";
import { Layout } from "antd";

import { getStoreData, Delete, Edit } from "../../../constants/";
import CustomCard from "../atom/CustomCard";
import EditModal from "../atom/editModal";

const Dashboard = () => {
  const [brand, setBrand] = useState([]);
  const [editableData, setEditableData] = useState({});
  const [modalVisible, setModalVisible] = useState();

  useEffect(() => {
    getShopCardData();
  }, []);

  const getShopCardData = () => {
    getStoreData(setBrand, "shopingcard");
  };

  const onhandleEdit = (item) => {
    setEditableData(item);
    getShopCardData();
    setModalVisible(true);
  };

  const onhandleDelete = (item) => {
    Delete(item, "shopcard/delete", getShopCardData);
  };

  const onUpdate = (item) => {
    Edit(item, "shopcard/edit", getShopCardData);
    setModalVisible(false);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <Layout>
      <CustomCard
        brand={brand}
        handleEdit={onhandleEdit}
        handleDelete={onhandleDelete}
      />
      <EditModal
        data={editableData}
        visible={modalVisible}
        onCancel={handleCancel}
        handleEdit={onUpdate}
      />
    </Layout>
  );
};
export default Dashboard;
