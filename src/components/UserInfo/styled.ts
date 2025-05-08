import styled from "styled-components";
import { Button } from "antd";

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  margin-right: 15px;
  font-size: 14px;
  cursor: pointer;
`;

export const LogoutButton = styled(Button)`
  &:hover {
    color: #1fd6a0;
    border-color: #1fd6a0;
  }
`;
