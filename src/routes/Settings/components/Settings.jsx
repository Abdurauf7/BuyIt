import React, { useState, useEffect } from "react";

import { getSettingsData, Edit } from "../../../constants/index";

import SettingsForm from "../atom/SettingsForm";
const Settings = ({ history }) => {
  const [data, setData] = useState([]);

  const userName = localStorage.getItem("user");

  useEffect(() => {
    getSettingsData(setData, "user/info", userName);
  }, [userName]);
  const onHandleEdit = (item) => {
    Edit(item, "user/edit", getSettingsData);
    localStorage.removeItem("user");
    localStorage.clear();
    history.replace("/");
  };
  return (
    <SettingsForm data={data} handleEdit={onHandleEdit} history={history} />
  );
};

export default Settings;
