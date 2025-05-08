import { memo } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/features/userSlice";
import { UserInfoContainer, UserName, LogoutButton } from "./styled";
import { useNavigate } from "react-router-dom";
const UserInfo = memo(() => {
  const { username, isLoggedIn } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function toUserDetail() {
    navigate("/user");
  }
  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <UserInfoContainer>
      <UserName onClick={() => toUserDetail()}>欢迎，{username}</UserName>
      <LogoutButton type="link" onClick={handleLogout}>
        退出登录
      </LogoutButton>
    </UserInfoContainer>
  );
});

export default UserInfo;
