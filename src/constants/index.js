import { notification } from "antd";
import axios from "axios";

export const openNotification = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
  });
};

export const baseUrl = "http://localhost:4009/";

export const LoginMenu = (data, history, url) => {
  return axios.post(`${baseUrl}${url}`, data).then((res) => {
    if (res.data.status === 202) {
      localStorage.setItem("admin", res.data.data);
      history.replace("/app/admin");
    } else if (res.data.status === 302) {
      localStorage.setItem("user", res.data.data);
      history.replace("/app/user");
    } else if (res.data.status === 404) {
      openNotification(
        "error",
        "Email or Password typed incorrect",
        "Please retype email or password"
      );
    }
  });
};

export const getUser = (data, url) => {
  return axios.get(`${baseUrl}${url}`).then((res) => {
    data(res.data.data);
  });
};

export const Edit = (data, url, editedData) => {
  return axios.put(`${baseUrl}${url}`, data).then((res) => {
    if (res.data.status === 202) {
      editedData();
      openNotification("success", "Successfully edited");
    } else if (res.data.status === 404) {
      openNotification("error", "Can't edit");
    }
  });
};

export const Delete = (data, url, deleted) => {
  return axios.delete(`${baseUrl}${url}${data}`).then((res) => {
    if (res.data.status === 202) {
      deleted();
      openNotification("success", "Successfully deleted");
    } else if (res.data.status === 404) {
      openNotification("error", "Can't delete");
    }
  });
};

export const getStoreData = (data, url) => {
  return axios.get(`${baseUrl}${url}`).then((res) => {
    data(res.data.data);
  });
};

export const addStoreItem = (data, url, getStoreInfo) => {
  return axios.post(`${baseUrl}${url}`, data).then((res) => {
    if (res.data.status === 202) {
      getStoreInfo();
      openNotification("success", "items added in the store");
    } else {
      openNotification("error", "Error While adding Item to the store");
    }
  });
};

export const getSettingsData = (data, url, params) => {
  axios.get(`${baseUrl}${url}${params}`).then((res) => {
    return data(res.data.data);
  });
};
