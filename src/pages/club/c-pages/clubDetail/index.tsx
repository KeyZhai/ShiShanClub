import { memo, useEffect, useState } from "react";
import type { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CalendarOutlined,
  UserOutlined,
  TeamOutlined,
  QqOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import {
  ClubDetailContainer,
  ClubDetailContent,
  ClubHeader,
  ClubInfo,
  ClubName,
  ClubBasicInfo,
  InfoItem,
  ClubDescription,
  SectionTitle,
  DescriptionContent,
  ContactInfo,
  ContactContent,
  ContactItem,
  BackButton,
  JoinButton,
} from "./styled";
import SignModal from "@/components/SignModal/index";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchClubDetail } from "../../store/club";

const ClubDetail: FC = () => {
  const dispatch = useAppDispatch();
  const { name } = useParams();
  const navigate = useNavigate();
  const [signupVisible, setSignupVisible] = useState(false);
  useEffect(() => {
    dispatch(fetchClubDetail(name as string));
  }, []);

  const { clubDetail } = useAppSelector((state) => ({
    clubDetail: state.club.clubDetail,
  }));

  const handleCloseModal = () => {
    setSignupVisible(false);
  };

  // 处理申请加入
  const handleJoin = () => {
    setSignupVisible(true);
  };

  // 返回社团列表
  const handleBack = () => {
    navigate("/club");
  };

  return (
    <ClubDetailContainer>
      <ClubDetailContent>
        <BackButton onClick={handleBack}>
          <LeftOutlined /> 返回社团列表
        </BackButton>

        <ClubHeader>
          <ClubInfo>
            <ClubName>{clubDetail.clubname}</ClubName>
            <ClubBasicInfo>
              <InfoItem>
                <CalendarOutlined /> 成立时间：{clubDetail.foundingdate}
              </InfoItem>
              <InfoItem>
                <UserOutlined /> 创始人：{clubDetail.leadername}
              </InfoItem>
              <InfoItem>
                <TeamOutlined /> 现有成员：0人
              </InfoItem>
            </ClubBasicInfo>
          </ClubInfo>
        </ClubHeader>

        <ClubDescription>
          <SectionTitle>社团介绍</SectionTitle>
          <DescriptionContent>{clubDetail.description}</DescriptionContent>
        </ClubDescription>

        <ContactInfo>
          <SectionTitle>联系方式</SectionTitle>
          <ContactContent>
            <ContactItem>
              <QqOutlined /> QQ群：{clubDetail.groupnumber}
            </ContactItem>
          </ContactContent>
        </ContactInfo>

        <JoinButton onClick={handleJoin}>
          申请加入{clubDetail.clubname}
        </JoinButton>
        {signupVisible && (
          <SignModal visible={signupVisible} onClose={handleCloseModal} />
        )}
      </ClubDetailContent>
    </ClubDetailContainer>
  );
};

export default memo(ClubDetail);
