import React, { useState, useEffect } from "react";
import {
  getUser as getData,
  addStoreItem as addToShoppingCard,
} from "../../../constants/";
import CustomCard from "../atom/CustomCard";
import EditModal from "../atom/EditModal";

import { Layout } from "antd";
const Cloth = () => {
  const [getCloth, setCloth] = useState([]);

  const [editedData, setEditedData] = useState([]);
  const [modalVisible, setModalVisible] = useState();

  const getClothData = () => {
    getData(setCloth, "cloth");
  };

  useEffect(() => {
    getClothData();
  }, []);

  const handleEdit = (item) => {
    setEditedData(item);
    setModalVisible(true);
  };

  const handleBuy = (item) => {
    addToShoppingCard(item, "addToShoppingCard", getClothData);

    setModalVisible(false);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  return (
    <Layout>
      <Layout.Content className="bg-light">
        <CustomCard getCloth={getCloth} BuyItem={handleEdit} />
        <EditModal
          visible={modalVisible}
          data={editedData}
          handleEdit={handleBuy}
          onCancel={handleCancel}
        />
      </Layout.Content>
    </Layout>
  );
};

export default Cloth;
