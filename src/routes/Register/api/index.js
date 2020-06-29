import axios from "axios";
import { openNotification, baseUrl } from "../../../constants/";

export const registerUser = (data, history) => {
  return axios.post(`${baseUrl}register`, data).then((res) => {
    if (res.data.status === 200) {
      history.replace("/");
    } else if (res.data.status === 404) {
      openNotification(
        "error",
        "This email already exist",
        "Enter another email"
      );
    }
  });
};
