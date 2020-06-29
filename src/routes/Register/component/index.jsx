import React from "react";
import { Layout } from "antd";
import RegisterForm from "../atom/RegiterForm";
import { registerUser } from "../api/index";

const Register = ({ history }) => {
  const handleRegister = async (data) => {
    await registerUser(data, history);
  };
  return (
    <Layout>
      <Layout.Content>
        <RegisterForm handleRegister={handleRegister} history={history} />
      </Layout.Content>
    </Layout>
  );
};

export default Register;
