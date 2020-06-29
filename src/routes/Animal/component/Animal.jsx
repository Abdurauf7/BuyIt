import React, { useState, useEffect } from "react";
import AnimalCard from "../atom/AnimalCard";
import EditModal from "../atom/editedModal";
import {
  getUser as getData,
  addStoreItem as addToShoppingCard,
} from "../../../constants/";
import { Layout } from "antd";

const Animal = () => {
  const [getAnimal, setAnimal] = useState([]);
  const [editedData, setEditedData] = useState([]);
  const [modalVisible, setModalVisible] = useState();

  const getAnimalData = () => {
    getData(setAnimal, "animals");
  };
  useEffect(() => {
    getAnimalData();
  }, []);

  const handleEdit = (item) => {
    setEditedData(item);
    setModalVisible(true);
  };
  const handleBuy = (item) => {
    addToShoppingCard(item, "addToShoppingCard", getAnimalData);

    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <Layout>
      <Layout.Content>
        <AnimalCard data={getAnimal} handleEdit={handleEdit} />
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

export default Animal;
