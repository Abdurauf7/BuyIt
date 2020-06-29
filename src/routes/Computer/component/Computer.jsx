import React, { useState, useEffect } from "react";
import CustomCard from "../atom/CustomCard";
import {
  getUser as getData,
  addStoreItem as addToShoppingCard,
} from "../../../constants/";

import { Layout } from "antd";
import EditModal from "../atom/editModal";
const Computers = () => {
  const [getdata, setData] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [modalVisible, setModalVisible] = useState();

  useEffect(() => {
    getComputer();
  }, []);
  const getComputer = () => {
    getData(setData, "technology");
  };
  const handleEdit = (item) => {
    setModalVisible(true);
    setEditedData(item);
  };

  const handleBuy = (item) => {
    addToShoppingCard(item, "addToShoppingCard", getComputer);
    setModalVisible(false);
  };

  const onClose = () => {
    setModalVisible(false);
  };
  return (
    <Layout.Content className="bg-light">
      <CustomCard data={getdata} handleBuy={handleEdit} />
      <EditModal
        data={editedData}
        visible={modalVisible}
        handleEdit={handleBuy}
        onCancel={onClose}
      />
    </Layout.Content>
  );
};

export default Computers;
