import { memo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Spin, Tag } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MOCK_ACTIVITIES } from "../../index";
import {
  ActivityContainer,
  ActivityContent,
  DetailContainer,
  DetailHeader,
  DetailTitle,
  DetailBanner,
  DetailInfoBar,
  DetailInfoItem,
  DetailContent,
  SignupButton,
} from "../../styled";
import SignModal from "@/components/SignModal";
// 活动详情组件
const ActivityDetail = () => {
  const { id } = useParams();
  const [signupVisible, setSignupVisible] = useState(false);
  const [activity, setActivity] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  // 处理报名
  const handleSignup = () => {
    console.log("点击报名按钮");
    setSignupVisible(true);
  };

  const handleCloseModal = () => {
    setSignupVisible(false);
  };

  // 获取活动详情
  useEffect(() => {
    setLoading(true);
    // 模拟API请求
    setTimeout(() => {
      const foundActivity = MOCK_ACTIVITIES.find((a) => a.id === parseInt(id!));

      if (foundActivity) {
        setActivity(foundActivity);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  // 返回列表
  const handleBack = () => {
    navigate("/activity");
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "100px 0" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!activity) {
    return (
      <div style={{ textAlign: "center", padding: "100px 0" }}>
        <h2>活动不存在</h2>
        <Button type="primary" onClick={handleBack}>
          返回活动列表
        </Button>
      </div>
    );
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
            <DetailTitle>{activity.title}</DetailTitle>
            <Tag
              color={
                activity.status === "ongoing"
                  ? "green"
                  : activity.status === "upcoming"
                  ? "orange"
                  : "default"
              }
            >
              {activity.status === "ongoing"
                ? "进行中"
                : activity.status === "upcoming"
                ? "即将开始"
                : "已结束"}
            </Tag>
          </DetailHeader>

          <DetailBanner src={activity.image} alt={activity.title} />

          <DetailInfoBar>
            <DetailInfoItem>
              <CalendarOutlined /> 日期：{activity.date}
            </DetailInfoItem>
            <DetailInfoItem>
              <ClockCircleOutlined /> 时间：{activity.time}
            </DetailInfoItem>
            <DetailInfoItem>
              <EnvironmentOutlined /> 地点：{activity.location}
            </DetailInfoItem>
            <DetailInfoItem>
              <TeamOutlined /> 主办方：{activity.club}
            </DetailInfoItem>
            <DetailInfoItem>
              <UserOutlined /> 已报名：{activity.currentParticipants}/
              {activity.maxParticipants}
            </DetailInfoItem>
          </DetailInfoBar>

          <DetailContent>{activity.details}</DetailContent>

          <SignupButton
            onClick={handleSignup}
            disabled={
              activity.status === "past" ||
              activity.currentParticipants >= activity.maxParticipants
            }
          >
            {activity.status === "past"
              ? "活动已结束"
              : activity.currentParticipants >= activity.maxParticipants
              ? "名额已满"
              : "立即报名"}
          </SignupButton>
        </DetailContainer>
      </ActivityContent>
      {signupVisible && (
        <SignModal visible={signupVisible} onClose={handleCloseModal} />
      )}
    </ActivityContainer>
  );
};

export default memo(ActivityDetail);
