import { memo, useState, useMemo, useEffect } from "react";
import type { FC } from "react";
import { Tabs, List, Tag, Button, message } from "antd";
import {
  TeamOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  UserOutlined,
  CrownOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import ManageClub from "./c-pages/manageClub";
import {
  UserContainer,
  UserContent,
  PageTitle,
  TabContent,
  ActivityCard,
  ClubCard,
  CardHeader,
  CardTitle,
  CardInfo,
  InfoItem,
  CardActions,
  EmptyText,
} from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { getUserAll } from "./service/user";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setClubList } from "./store/user";
// 模拟数据
const MOCK_USER_ACTIVITIES = [
  {
    id: 1,
    title: "编程竞赛培训",
    date: "2024-03-20",
    time: "14:00-16:00",
    location: "信息学院 B栋 201室",
    club: "计算机协会",
    status: "ongoing",
  },
  {
    id: 2,
    title: "校园歌手大赛",
    date: "2024-03-25",
    time: "19:00-21:00",
    location: "大学生活动中心",
    club: "音乐社",
    status: "upcoming",
  },
];

const MOCK_USER_CLUBS = [
  {
    id: 1,
    name: "计算机协会",
    role: "member",
    joinTime: "2023-09-01",
    activities: 5,
  },
  {
    id: 2,
    name: "音乐社",
    role: "admin",
    joinTime: "2023-10-15",
    activities: 3,
  },
  {
    id: 3,
    name: "篮球社",
    role: "admin",
    joinTime: "2023-11-05",
    activities: 7,
  },
  {
    id: 4,
    name: "摄影协会",
    role: "member",
    joinTime: "2024-01-10",
    activities: 2,
  },
];

const UserPage: FC = () => {
  const [activeTab, setActiveTab] = useState("activities");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { username, myClub, myJoinedActivity } = useAppSelector((state) => ({
    username: state.user.username,
    myClub: state.user.myClub,
    myJoinedActivity: state.user.myJoinedActivity,
  }));
  useEffect(() => {
    getUserAll(username).then((res) => {
      dispatch(setClubList(res.data));
    });
  }, [dispatch]);
  // 处理取消报名
  const handleCancelSignup = (activityId: number) => {
    message.success("已成功取消报名！");
    // 实际应用中这里会发送API请求
  };

  // 处理退出社团
  const handleLeaveClub = (clubId: number) => {
    message.success("已成功退出社团！");
    // 实际应用中这里会发送API请求
  };

  // 处理管理社团
  const handleManageClub = (clubId: number) => {
    navigate("/user/manageClub");
    // 实际应用中这里会跳转到社团管理页面
  };

  // 将社团分为"我加入的"和"我管理的"
  const memberClubs = useMemo(() => {
    return myClub!.filter((club) => club.role === "student");
  }, [myClub]);

  const adminClubs = useMemo(() => {
    return myClub!.filter((club) => club.role === "leader");
  }, [myClub]);

  console.log("memberClubs", memberClubs);
  console.log("adminClubs", adminClubs);

  if (location.pathname === "/user/manageClub") {
    return <ManageClub />;
  }
  return (
    <UserContainer>
      <UserContent>
        <PageTitle>管理页面</PageTitle>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            {
              key: "activities",
              label: "我的活动",
              children: (
                <TabContent>
                  {myJoinedActivity.length > 0 ? (
                    <List
                      grid={{ gutter: 16, column: 1 }}
                      dataSource={myJoinedActivity}
                      renderItem={(activity) => (
                        <ActivityCard>
                          <CardHeader>
                            <CardTitle>{activity.activityname}</CardTitle>
                            <Tag
                              color={
                                activity.activitytimetype === "进行中"
                                  ? "green"
                                  : activity.activitytimetype === "即将开始"
                                  ? "orange"
                                  : "default"
                              }
                            >
                              {activity.activitytimetype === "进行中"
                                ? "进行中"
                                : activity.activitytimetype === "即将开始"
                                ? "即将开始"
                                : "已结束"}
                            </Tag>
                          </CardHeader>
                          <CardInfo>
                            <InfoItem>
                              <CalendarOutlined /> 日期：
                              {activity.activitystartdate.split(" ")[0]}
                            </InfoItem>
                            <InfoItem>
                              <ClockCircleOutlined /> 时间：
                              {activity.activitystartdate.split(" ")[1]}
                            </InfoItem>
                            <InfoItem>
                              <EnvironmentOutlined /> 地点：
                              {activity.activityplace}
                            </InfoItem>
                            <InfoItem>
                              <TeamOutlined /> 主办方：{activity.clubname}
                            </InfoItem>
                          </CardInfo>
                          <CardActions>
                            <Button
                              type="primary"
                              danger
                              onClick={() =>
                                handleCancelSignup(activity.activityname)
                              }
                            >
                              取消报名
                            </Button>
                          </CardActions>
                        </ActivityCard>
                      )}
                    />
                  ) : (
                    <EmptyText>暂无报名的活动</EmptyText>
                  )}
                </TabContent>
              ),
            },
            {
              key: "joinedClubs",
              label: (
                <>
                  <UserSwitchOutlined /> 我加入的社团
                </>
              ),
              children: (
                <TabContent>
                  {memberClubs.length > 0 ? (
                    <List
                      grid={{ gutter: 16, column: 1 }}
                      dataSource={memberClubs}
                      renderItem={(club) => (
                        <ClubCard>
                          <CardHeader>
                            <CardTitle>{club.clubname}</CardTitle>
                            <Tag color="green">成员</Tag>
                          </CardHeader>
                          <InfoItem>
                            <UserOutlined /> 创立时间：{club.foundingdate}
                          </InfoItem>
                          <CardInfo></CardInfo>
                          <CardActions>
                            <Button
                              type="primary"
                              danger
                              onClick={() => handleLeaveClub(club.id)}
                            >
                              退出社团
                            </Button>
                          </CardActions>
                        </ClubCard>
                      )}
                    />
                  ) : (
                    <EmptyText>暂无加入的社团</EmptyText>
                  )}
                </TabContent>
              ),
            },
            {
              key: "managedClubs",
              label: (
                <>
                  <CrownOutlined /> 我管理的社团
                </>
              ),
              children: (
                <TabContent>
                  {adminClubs.length > 0 ? (
                    <List
                      grid={{ gutter: 16, column: 1 }}
                      dataSource={adminClubs}
                      renderItem={(club) => (
                        <ClubCard>
                          <CardHeader>
                            <CardTitle>{club.clubname}</CardTitle>
                            <Tag color="blue">管理员</Tag>
                          </CardHeader>
                          <CardInfo>
                            <InfoItem>
                              <UserOutlined /> 创立时间：{club.foundingdate}
                            </InfoItem>
                          </CardInfo>
                          <CardActions>
                            <Button
                              type="primary"
                              onClick={() => handleManageClub(club.id)}
                            >
                              管理社团
                            </Button>
                          </CardActions>
                        </ClubCard>
                      )}
                    />
                  ) : (
                    <EmptyText>暂无管理的社团</EmptyText>
                  )}
                </TabContent>
              ),
            },
          ]}
        />
      </UserContent>
    </UserContainer>
  );
};

export default memo(UserPage);
