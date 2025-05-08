import { memo, useState } from "react";
import type { FC } from "react";
import { Tabs, List, Tag, Button, message } from "antd";
import {
  TeamOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
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
];

const UserPage: FC = () => {
  const [activeTab, setActiveTab] = useState("activities");

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
    message.info("跳转到社团管理页面");
    // 实际应用中这里会跳转到社团管理页面
  };

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
                  {MOCK_USER_ACTIVITIES.length > 0 ? (
                    <List
                      grid={{ gutter: 16, column: 1 }}
                      dataSource={MOCK_USER_ACTIVITIES}
                      renderItem={(activity) => (
                        <ActivityCard>
                          <CardHeader>
                            <CardTitle>{activity.title}</CardTitle>
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
                          </CardHeader>
                          <CardInfo>
                            <InfoItem>
                              <CalendarOutlined /> 日期：{activity.date}
                            </InfoItem>
                            <InfoItem>
                              <ClockCircleOutlined /> 时间：{activity.time}
                            </InfoItem>
                            <InfoItem>
                              <EnvironmentOutlined /> 地点：{activity.location}
                            </InfoItem>
                            <InfoItem>
                              <TeamOutlined /> 主办方：{activity.club}
                            </InfoItem>
                          </CardInfo>
                          <CardActions>
                            <Button
                              type="primary"
                              danger
                              onClick={() => handleCancelSignup(activity.id)}
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
              key: "clubs",
              label: "我的社团",
              children: (
                <TabContent>
                  {MOCK_USER_CLUBS.length > 0 ? (
                    <List
                      grid={{ gutter: 16, column: 1 }}
                      dataSource={MOCK_USER_CLUBS}
                      renderItem={(club) => (
                        <ClubCard>
                          <CardHeader>
                            <CardTitle>{club.name}</CardTitle>
                            <Tag
                              color={club.role === "admin" ? "blue" : "green"}
                            >
                              {club.role === "admin" ? "管理员" : "成员"}
                            </Tag>
                          </CardHeader>
                          <CardInfo>
                            <InfoItem>
                              <UserOutlined /> 加入时间：{club.joinTime}
                            </InfoItem>
                            <InfoItem>
                              <CalendarOutlined /> 参与活动：{club.activities}个
                            </InfoItem>
                          </CardInfo>
                          <CardActions>
                            {club.role === "admin" ? (
                              <Button
                                type="primary"
                                onClick={() => handleManageClub(club.id)}
                              >
                                管理社团
                              </Button>
                            ) : (
                              <Button
                                type="primary"
                                danger
                                onClick={() => handleLeaveClub(club.id)}
                              >
                                退出社团
                              </Button>
                            )}
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
          ]}
        />
      </UserContent>
    </UserContainer>
  );
};

export default memo(UserPage);
