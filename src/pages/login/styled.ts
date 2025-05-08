import styled from "styled-components";
import { Button, Form, Tabs } from "antd";
import bgImage from "@/assets/img/Loginimage.jpg";
export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  filter: brightness(0.9);
  z-index: -1;
  opacity: 0.8; /* 调整背景透明度 */
`;

export const LoginCard = styled.div`
  width: 420px;
  padding: 45px 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
  z-index: 1;
`;

export const Logo = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-size: 34px;
  font-weight: bold;
  color: #1fd6a0;
`;

export const TabsContainer = styled(Tabs)`
  .ant-tabs-nav-list {
    width: 100%;
    display: flex;

    .ant-tabs-tab {
      flex: 1;
      display: flex;
      justify-content: center;
      font-size: 16px;
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 46px;
  border-radius: 8px;
  margin-top: 12px;
  background-color: #1fd6a0;
  border-color: #1fd6a0;
  font-size: 16px;

  &:hover,
  &:focus {
    background-color: #0ebe89;
    border-color: #0ebe89;
  }
`;

export const FormItem = styled(Form.Item)`
  margin-bottom: 24px;
`;

export const ErrorMessage = styled.div`
  color: #ff4d4f;
  margin-bottom: 16px;
`;
