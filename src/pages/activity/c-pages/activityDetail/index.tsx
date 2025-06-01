import { memo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Tag, message } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  ActivityContainer,
  ActivityContent,
  DetailContainer,
  DetailHeader,
  DetailTitle,
  DetailInfoBar,
  DetailInfoItem,
  DetailContent,
  SignupButton,
} from "../../styled";
import SignModal from "@/components/SignModal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchActivityDetail } from "../../store/activity";
// 活动详情组件
const ActivityDetail = () => {
  const { name } = useParams();
  const [signupVisible, setSignupVisible] = useState(false);
  const dispatch = useAppDispatch();
  const { activityDetail, token } = useAppSelector((state) => ({
    activityDetail: state.activity.activityDetail,
    token: state.user.token,
  }));

  useEffect(() => {
    dispatch(fetchActivityDetail(name as string));
  }, []);
  console.log(activityDetail);

  const navigate = useNavigate();
  // 处理报名
  const handleSignup = () => {
    if (token) {
      setSignupVisible(true);
    } else {
      // 如果用户未登录，提示登录
      message.error("请先登录");
    }
  };

  const handleCloseModal = () => {
    setSignupVisible(false);
  };

  // 返回列表
  const handleBack = () => {
    navigate("/activity");
  };

  // 添加加载检查
  if (!activityDetail) {
    return <ActivityContainer>''</ActivityContainer>;
  }

  return (
    <ActivityContainer>
      <ActivityContent>
        <Button
          type="link"
          onClick={handleBack}
          style={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          ← 返回活动列表
        </Button>

        <DetailContainer>
          <DetailHeader>
            <DetailTitle>{activityDetail.activityname}</DetailTitle>
            <Tag
              color={
                activityDetail.activitytimetype === "进行中"
                  ? "green"
                  : activityDetail.activitytimetype === "即将开始"
                  ? "orange"
                  : "default"
              }
            >
              {activityDetail.activitytimetype === "进行中"
                ? "进行中"
                : activityDetail.activitytimetype === "即将开始"
                ? "即将开始"
                : "已结束"}
            </Tag>
          </DetailHeader>
          <DetailInfoBar>
            <DetailInfoItem>
              <CalendarOutlined /> 日期：{activityDetail.activitystartdate}
            </DetailInfoItem>
            <DetailInfoItem>
              <ClockCircleOutlined /> 时间：
              {activityDetail.activitystartdate} -
              {activityDetail.activityenddate}
            </DetailInfoItem>
            <DetailInfoItem>
              <EnvironmentOutlined /> 地点：{activityDetail.activityplace}
            </DetailInfoItem>
            <DetailInfoItem>
              <TeamOutlined /> 主办方：{activityDetail.clubname}
            </DetailInfoItem>
            <DetailInfoItem>
              <UserOutlined /> 已报名：{activityDetail.activitynumber}
            </DetailInfoItem>
          </DetailInfoBar>

          <DetailContent>{activityDetail.activitydescription}</DetailContent>

          <SignupButton
            onClick={handleSignup}
            disabled={
              activityDetail.activitytimetype === "已结束" ||
              activityDetail.currentParticipants >=
                activityDetail.maxParticipants
            }
          >
            {activityDetail.activitytimetype === "已结束"
              ? "活动已结束"
              : activityDetail.currentParticipants >=
                activityDetail.maxParticipants
              ? "名额已满"
              : "立即报名"}
          </SignupButton>
        </DetailContainer>
      </ActivityContent>
      {signupVisible && (
        <SignModal
          visible={signupVisible}
          onClose={handleCloseModal}
          name={activityDetail.activityname + "活动"}
        />
      )}
    </ActivityContainer>
  );
};

export default memo(ActivityDetail);
