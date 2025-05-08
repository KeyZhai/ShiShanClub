import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1fd6a0;
  margin-right: 60px;
  cursor: pointer;
`;

export const NavItems = styled.div`
  display: flex;
  flex: 1;
  .a {
    padding: 0 20px;
    font-size: 16px;
    cursor: pointer;
    color: #333;
    &:hover {
      color: #1fd6a0;
    }
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;

  a {
    padding: 0 20px;
    font-size: 16px;
    cursor: pointer;
    color: #333;
    text-decoration: none;
    &:hover {
      color: #1fd6a0;
    }
  }
`;

export const LoginArea = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.div`
  padding: 0 20px;
  cursor: pointer;
  &:hover {
    color: #1fd6a0;
  }
`;
