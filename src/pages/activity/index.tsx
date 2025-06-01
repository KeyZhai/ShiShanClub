import { useState, useEffect } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Select, Spin } from "antd";
import {
  ActivityContainer,
  ActivityHeader,
  HeaderContent,
  PageTitle,
  PageSubtitle,
  ActivityContent,
  FilterContainer,
  SectionTitle,
  ActivityList,
  ActivityCard,
  CardContent,
  CardTitle,
  CardInfo,
  InfoItem,
  CardDescription,
  ActivityClub,
  NoActivities,
} from "./styled";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchActivityList } from "./store/activity";
import { shallowEqual } from "react-redux";
// 模拟活动数据
export const MOCK_ACTIVITIES = [
  {
    id: 1,
    title: "计算机科学前沿讲座",
    type: "lecture",
    club: "计算机协会",
    date: "2023-11-15",
    time: "14:00-16:00",
    location: "科学馆报告厅",
    maxParticipants: 100,
    currentParticipants: 65,
    status: "upcoming",
    description: "邀请知名教授分享计算机科学最新研究成果和发展趋势。",
    details:
      "本次讲座将邀请华为首席科学家王教授，分享人工智能在计算机视觉领域的最新突破和应用场景。讲座内容涵盖深度学习模型的优化、大规模数据集的处理方法以及实际工程中的落地案例。讲座结束后有互动问答环节，欢迎对人工智能和计算机视觉感兴趣的同学参加。",
    image: "https://img.zcool.cn/community/01e45b5c7b3f7aa801213867f8ff2f.jpg",
  },
  {
    id: 2,
    title: "音乐社秋季演奏会",
    type: "social",
    club: "音乐社",
    date: "2023-11-20",
    time: "19:00-21:00",
    location: "大学生活动中心",
    maxParticipants: 200,
    currentParticipants: 150,
    status: "upcoming",
    description: "一年一度的音乐盛宴，展示社员的音乐才华，共度美好夜晚。",
    details:
      "本次演奏会将由我校音乐社成员带来精彩的器乐和声乐表演，曲目涵盖古典音乐、流行音乐、民族音乐等多种风格。特别邀请了校外专业音乐团体参与合作表演。演出结束后还将举办小型交流会，欢迎所有热爱音乐的师生参加。",
    image: "https://img.zcool.cn/community/01ac665d3022e4a8012187f418d574.jpg",
  },
  {
    id: 3,
    title: "网络安全CTF竞赛",
    type: "competition",
    club: "网络安全协会",
    date: "2023-12-05",
    time: "09:00-18:00",
    location: "信息楼机房",
    maxParticipants: 50,
    currentParticipants: 32,
    status: "upcoming",
    description: "测试和提升参与者的网络安全技能，解决各种安全挑战。",
    details:
      "本次CTF（Capture The Flag）竞赛将设置Web安全、密码学、逆向工程、二进制漏洞利用等多个方向的题目，难度分为入门级、中级和高级。参赛选手可以个人或组队参加。竞赛期间将有多位专业教师和行业专家进行指导。优胜者将有机会参加全国性的网络安全竞赛。",
    image: "https://img.zcool.cn/community/0135875afe3a8fa801219c7729a29e.jpg",
  },
  {
    id: 4,
    title: "志愿者环保行动",
    type: "social",
    club: "志愿者服务队",
    date: "2023-11-12",
    time: "08:30-12:00",
    location: "校园周边",
    maxParticipants: 80,
    currentParticipants: 45,
    status: "ongoing",
    description: "组织校园及周边环境清洁，提升环保意识。",
    details:
      "本次环保行动将组织志愿者对校园周边的河道、公园等区域进行垃圾清理和分类。活动开始前将进行简短的环保知识培训，讲解垃圾分类的重要性和方法。活动结束后，我们将整理收集的数据，形成环境调查报告，提交给相关部门，推动校园环境的持续改善。",
    image: "https://img.zcool.cn/community/0112275bc3e36da801213deab5a564.jpg",
  },
  {
    id: 5,
    title: "Android应用开发工作坊",
    type: "workshop",
    club: "计算机协会",
    date: "2023-12-10",
    time: "13:30-17:30",
    location: "信息楼实验室",
    maxParticipants: 30,
    currentParticipants: 28,
    status: "upcoming",
    description: "零基础学习Android应用开发，实现一个简单的校园工具App。",
    details:
      "本次工作坊面向所有对移动应用开发感兴趣的同学，无需编程基础。我们将从Android开发环境搭建开始，带领大家一步步实现一个校园信息查询App。内容包括UI设计、数据存储、网络请求等基本功能的实现。全程采用实践教学模式，确保每位参与者都能完成项目。名额有限，请提前报名。",
    image: "https://img.zcool.cn/community/01e32755476db40000019ae9f89caf.jpg",
  },
  {
    id: 6,
    title: "校园电视台新闻采访培训",
    type: "workshop",
    club: "校园电视台",
    date: "2023-11-18",
    time: "14:00-16:30",
    location: "传媒楼演播室",
    maxParticipants: 40,
    currentParticipants: 22,
    status: "ongoing",
    description: "学习新闻采访技巧，掌握镜头前的表现力。",
    details:
      "本次培训由校园电视台资深播音员和专业记者主持，将系统讲解新闻采访的基本流程、提问技巧、摄像基础知识，以及镜头前的仪态和表达方式。培训采用理论结合实践的方式，参与者将有机会进行模拟采访并获得专业点评。欢迎对新闻传媒感兴趣的同学参加。",
    image: "https://img.zcool.cn/community/01fc2b59117695a8012028a949a334.jpg",
  },
];

// 定义活动数据类型
interface Activity {
  activityname: string;
  activitytype: string;
  activitytimetype: string;
  clubname: string;
  activityshortdescription: string;
  activitystartdate: string;
  activityplace: string;
}

// 活动类型选项
const TYPE_OPTIONS = [
  { value: "all", label: "全部活动" },
  { value: "讲座", label: "讲座" },
  { value: "分享会", label: "分享会" },
  { value: "竞赛", label: "竞赛" },
  { value: "社会实践", label: "社会实践" },
];

// 活动状态选项
const STATUS_OPTIONS = [
  { value: "all", label: "全部" },
  { value: "进行中", label: "进行中" },
  { value: "即将开始", label: "即将开始" },
  { value: "已结束", label: "已结束" },
];

// 主活动页面组件
const Activity = () => {
  const [loading, setLoading] = useState(false);
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [clubFilter, setClubFilter] = useState("all");
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { activityList } = useAppSelector(
    (state) => ({
      activityList: state.activity.activityList,
    }),
    shallowEqual
  );

  // 获取活动列表数据
  useEffect(() => {
    dispatch(fetchActivityList());
  }, [dispatch]);

  // 基于筛选条件过滤活动
  useEffect(() => {
    setLoading(true);

    let filtered = [...activityList] as Activity[];

    // 应用类型筛选
    if (typeFilter !== "all") {
      filtered = filtered.filter(
        (activity) => activity.activitytype === typeFilter
      );
    }

    // 应用状态筛选
    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (activity) => activity.activitytimetype === statusFilter
      );
    }

    // 应用社团筛选
    if (clubFilter !== "all") {
      filtered = filtered.filter(
        (activity) => activity.clubname === clubFilter
      );
    }

    setFilteredActivities(filtered);
    setLoading(false);
  }, [activityList, typeFilter, statusFilter, clubFilter]);

  // 获取所有社团选项
  const clubOptions = [
    { value: "all", label: "全部社团" },
    ...Array.from(new Set(activityList.map((a: any) => a.clubname)))
      .filter(Boolean)
      .map((club) => ({
        value: club,
        label: club,
      })),
  ];

  // 处理活动点击
  const handleActivityClick = (name: string) => {
    navigate(`/activity/detail/${name}`);
  };

  const params = useParams();
  if (params.name) {
    return <Outlet />;
  }

  return (
    <ActivityContainer>
      <ActivityHeader>
        <HeaderContent>
          <PageTitle>社团活动</PageTitle>
          <PageSubtitle>
            探索丰富多彩的社团活动，找到适合你的社团和活动，展示才华，结交朋友
          </PageSubtitle>
        </HeaderContent>
      </ActivityHeader>

      <ActivityContent>
        <FilterContainer>
          <Select
            defaultValue="all"
            style={{ width: 150 }}
            onChange={(value) => setTypeFilter(value)}
            options={TYPE_OPTIONS}
          />
          <Select
            defaultValue="all"
            style={{ width: 150 }}
            onChange={(value) => setStatusFilter(value)}
            options={STATUS_OPTIONS}
          />
          <Select
            defaultValue="all"
            style={{ width: 180 }}
            onChange={(value) => setClubFilter(value)}
            options={clubOptions}
          />
        </FilterContainer>

        <SectionTitle>热门活动</SectionTitle>

        {loading ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <Spin size="large" />
          </div>
        ) : filteredActivities.length > 0 ? (
          <ActivityList>
            {filteredActivities.map((activity) => (
              <ActivityCard
                key={activity.activityname}
                onClick={() => handleActivityClick(activity.activityname)}
              >
                <CardContent>
                  <CardTitle>{activity.activityname}</CardTitle>
                  <CardInfo>
                    <InfoItem>
                      <CalendarOutlined /> {activity.activitystartdate}
                    </InfoItem>
                    <InfoItem>
                      <EnvironmentOutlined /> {activity.activityplace}
                    </InfoItem>
                  </CardInfo>
                  <CardDescription>
                    {activity.activityshortdescription}
                  </CardDescription>
                  <ActivityClub>{activity.clubname}</ActivityClub>
                </CardContent>
              </ActivityCard>
            ))}
          </ActivityList>
        ) : (
          <NoActivities>暂无符合条件的活动</NoActivities>
        )}
      </ActivityContent>
    </ActivityContainer>
  );
};

export default Activity;
