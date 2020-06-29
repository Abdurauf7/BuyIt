import React from "react";
import LoginForm from "../atom/LoginForm";
import QueueAnim from "rc-queue-anim";
import { LoginMenu } from "../../../constants/";
import auth from "../../UserInformation/auth";

const Login = ({ history }) => {
  const onSubmit = (data) => {
    auth.login(() => LoginMenu(data, history, "login"));
  };
  return (
    <>
      <QueueAnim
        type={["right", "left"]}
        interval={[1000, 200]}
        delay={[100, 100]}
        duration={[5000, 2000]}
        ease={["easeOutBack", "easeInOutCirc"]}
        leaveReverse
      >
        <LoginForm key="1" handleSubmit={onSubmit} />
      </QueueAnim>
    </>
  );
};

export default Login;
