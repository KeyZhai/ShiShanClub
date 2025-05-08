import { useState, useEffect } from "react";
import { Form, Input, Tabs, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  LoginContainer,
  BackgroundImg,
  LoginCard,
  Logo,
  TabsContainer,
  FormItem,
  ErrorMessage,
  StyledButton,
} from "./styled";

import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginUser, registerUser } from "@/store/features/userSlice";
import { RootState } from "@/store";

const { TabPane } = Tabs;

function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoggedIn, loading, error } = useAppSelector(
    (state: RootState) => state.user
  );

  // 如果用户已登录，重定向到首页
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const onFinishLogin = async (values: any) => {
    console.log(values);
    try {
      await dispatch(
        loginUser({
          username: values.username,
          password: values.password,
        })
      ).unwrap();

      message.success("登录成功！");
      navigate("/");
    } catch (err) {
      // 错误处理由Redux state处理
    }
  };

  const onFinishRegister = async (values: any) => {
    console.log(values);
    await dispatch(
      registerUser({
        username: values.username,
        password: values.password,
      })
    ).unwrap();
    message.success("注册成功！请登录");
    setActiveTab("login");
  };

  return (
    <LoginContainer>
      <BackgroundImg />
      <LoginCard>
        <Logo>狮山有我</Logo>
        <TabsContainer activeKey={activeTab} onChange={setActiveTab} centered>
          <TabPane tab="登录" key="login">
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinishLogin}
            >
              {error && <ErrorMessage>{error}</ErrorMessage>}

              <FormItem
                name="username"
                rules={[{ required: true, message: "请输入用户名!" }]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: "#bfbfbf" }} />}
                  placeholder="用户名"
                  size="large"
                />
              </FormItem>

              <FormItem
                name="password"
                rules={[{ required: true, message: "请输入密码!" }]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: "#bfbfbf" }} />}
                  placeholder="密码"
                  size="large"
                />
              </FormItem>

              <FormItem>
                <StyledButton
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading === "pending"}
                >
                  登录
                </StyledButton>
              </FormItem>
            </Form>
          </TabPane>

          <TabPane tab="注册" key="register">
            <Form name="register" onFinish={onFinishRegister}>
              <FormItem
                name="username"
                rules={[{ required: true, message: "请输入用户名!" }]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: "#bfbfbf" }} />}
                  placeholder="用户名"
                  size="large"
                />
              </FormItem>

              <FormItem
                name="password"
                rules={[
                  { required: true, message: "请输入密码!" },
                  { min: 6, message: "密码至少6位字符!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: "#bfbfbf" }} />}
                  placeholder="密码"
                  size="large"
                />
              </FormItem>

              <FormItem
                name="confirm"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "请确认密码!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("两次输入的密码不一致!"));
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: "#bfbfbf" }} />}
                  placeholder="确认密码"
                  size="large"
                />
              </FormItem>

              <FormItem>
                <StyledButton type="primary" htmlType="submit" size="large">
                  注册
                </StyledButton>
              </FormItem>
            </Form>
          </TabPane>
        </TabsContainer>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;
