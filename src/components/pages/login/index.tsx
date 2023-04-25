import React from "react";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import {
  LockOutlined,
  UnlockOutlined,
  UserOutlined,
  SlackOutlined,
  GoogleOutlined,
  SkypeOutlined,
} from "@ant-design/icons";
import "./login.less";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

function Login() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0bb197",
        },
      }}
    >
      <div className="main bg-login bg-repeat-round h-screen w-screen">
        <section className="login p-6">
          <div className="title-login text-center mb-10">
            <div className="row flex justify-center">
              <SlackOutlined
                className="mr-1 text-antd-primary-color"
                style={{
                  fontSize: 35,
                }}
              />
              <h1
                className="font-bold text-antd-primary-color"
                style={{ textShadow: "1px 1px #0bb197", fontSize: 25 }}
              >
                hieuhaimi
              </h1>
            </div>
            <h2 className=" font-bold text-lg text-foreign-color">
              Welcome Back !
            </h2>
            <p className="text-foreign-color">
              Sign in to continue to hieuhaimi.
            </p>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="User Name"
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={
                  <UserOutlined className="site-form-item-icon text-antd-primary-color" />
                }
                placeholder="hieuhaimi"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={
                  <LockOutlined className="site-form-item-icon text-antd-primary-color" />
                }
                type="password"
                placeholder="******"
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox className="text-foreign-color">Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button w-full bg-antd-primary-color text-white"
              >
                Log in
              </Button>
            </Form.Item>
            <div className="options flex justify-around">
              <a
                className="text-foreign-color hover:text-antd-primary-color"
                href=""
              >
                <UnlockOutlined className="site-form-item-icon text-antd-primary-color mr-1" />
                Register now!
              </a>
              <a
                className="text-foreign-color hover:text-antd-primary-color"
                href=""
              >
                <UnlockOutlined className="site-form-item-icon text-antd-primary-color mr-1" />
                Forgot password?
              </a>
            </div>
            <div className="sign-with text-center pt-4">
              <h2 className="font-bold text-foreign-color mb-2">
                Sign in with
              </h2>
              <div className="social">
                <GoogleOutlined className="bg-cyan-500 text-white rounded-full p-[10px] mr-2" />
                <SkypeOutlined className=" bg-cyan-500 text-white rounded-full p-[10px]" />
              </div>
            </div>
          </Form>
        </section>
      </div>
    </ConfigProvider>
  );
}

export default Login;
