import React, { useState, useEffect } from "react";

import UserTable from "../atom/UserTable";
import EditModal from "../atom/EditModal";
import { Layout } from "antd";
import { getUser, Edit, Delete } from "../../../constants/";

const UserInfo = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState();
  const [editabledata, setEditableData] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    getUser(setData, "user");
  };
  const handleCancel = (props) => {
    setModalVisible(props);
  };

  const onhandleDelete = (item) => {
    Delete(item, "user/delete", getUserData);
  };
  const onhandleEdit = (item) => {
    setEditableData(item);
    getUserData();
    setModalVisible(true);
  };

  const onUpdate = (item) => {
    Edit(item, "user/edit", getUserData);
    setModalVisible(false);
  };
  return (
    <Layout>
      <Layout.Content style={{ marginTop: "5%", background: "#fff" }}>
        <UserTable
          data={data}
          handleEdit={onhandleEdit}
          handleDelete={onhandleDelete}
        />
        <EditModal
          data={editabledata}
          visible={modalVisible}
          onCancel={handleCancel}
          handleEdit={onUpdate}
        />
      </Layout.Content>
    </Layout>
  );
};

export default UserInfo;
