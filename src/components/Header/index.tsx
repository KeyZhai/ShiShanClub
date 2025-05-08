import { memo } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import UserInfo from "@/components/UserInfo";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store";
import {
  HeaderWrapper,
  Logo,
  NavItems,
  NavItem,
  LoginArea,
  LoginButton,
} from "./styled";
import itemList from "@/assets/data/titile-list.json";

const Header = memo(() => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state: RootState) => state.user);

  function showItem(item: any) {
    if (item.type === "path") {
      return <NavLink to={item.link}>{item.title}</NavLink>;
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  }

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <Logo onClick={handleLogoClick}>狮山有我</Logo>
      <NavItems>
        {itemList.map((item) => {
          return <NavItem key={item.title}>{showItem(item)}</NavItem>;
        })}
      </NavItems>
      <LoginArea>
        {isLoggedIn ? (
          <UserInfo />
        ) : (
          <LoginButton onClick={handleLogin}>登录</LoginButton>
        )}
      </LoginArea>
    </HeaderWrapper>
  );
});

export default Header;
