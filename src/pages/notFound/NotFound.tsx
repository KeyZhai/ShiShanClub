import { useNavigate } from "react-router-dom";
import { TeamOutlined } from "@ant-design/icons";
import {
  NotFoundContainer,
  ErrorCode,
  ErrorMessage,
  Subtitle,
  BackButton,
  ClubIcon,
} from "./styled";

function NotFound() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <ClubIcon>
        <TeamOutlined />
      </ClubIcon>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>页面不存在</ErrorMessage>
      <Subtitle>
        抱歉，您访问的页面可能已被移动或不存在。您可以返回首页继续浏览社团活动。
      </Subtitle>
      <BackButton onClick={goToHome}>返回首页</BackButton>
    </NotFoundContainer>
  );
}

export default NotFound;
