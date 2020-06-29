import React, { useState, useEffect } from "react";
import AdminSetForm from "../atom/AdminSettingsForm";
import { getSettingsData, Edit } from "../../../constants/index";

const AdminSet = ({ history }) => {
  const [data, setData] = useState([]);

  const adminName = localStorage.getItem("admin");

  useEffect(() => {
    getSettingsData(setData, "admin/info", adminName);
  }, [adminName]);

  const handleEdit = (item) => {
    Edit(item, "admin/settings", getSettingsData);
    localStorage.removeItem("admin");
    localStorage.clear();
    history.replace("/app/admin/store");
  };

  return (
    <>
      <AdminSetForm data={data} handleEdit={handleEdit} />
    </>
  );
};

export default AdminSet;
