import React from "react";
import { Row, Col, Form, Input, Layout, Button, Typography } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import img from "../../../assets/img/shop.jpg";
import { withRouter } from "react-router-dom";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = ({ handleSubmit, history }) => {
  return (
    <Layout style={{ background: "#fff" }}>
      <Row>
        <Col span={10}>
          <div>
            <img src={img} alt="" className="w-100" />
          </div>
        </Col>
        <Col span={10}>
          <Form
            hideRequiredMark
            {...layout}
            onFinish={handleSubmit}
            style={{ marginTop: "50%" }}
          >
            <Form.Item {...tailLayout}>
              <Typography className="text-center">
                <span className="f1 i georgia" style={{ color: "orange" }}>
                  Buy it
                </span>
                <Button
                  style={{ background: "transparent", border: "transparent" }}
                  icon={<QuestionCircleOutlined />}
                  onClick={() => history.replace("/app/register")}
                />
              </Typography>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  message: "Enter your Email",
                  type: "email",
                  required: "true",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ message: "Enter your Password", required: "true" }]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button block type="primary" htmlType="submit ">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default withRouter(Login);
