import { memo, useState } from "react";
import type { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Tabs,
  Table,
  Tag,
  Button,
  Space,
  Modal,
  message,
  Form,
  Input,
  DatePicker,
  TimePicker,
  InputNumber,
  Select,
  Drawer,
  Tooltip,
} from "antd";
import {
  TeamOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  UserOutlined,
  PlusOutlined,
  RollbackOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import {
  ManageContainer,
  ManageContent,
  PageHeader,
  PageTitle,
  TabContent,
  ContentCard,
  CardTitle,
  TableActionButtons,
  SectionHeader,
  ActivityDetail,
  ActivityInfo,
  InfoItem,
  FormContainer,
} from "./styled";

const { TabPane } = Tabs;
const { confirm } = Modal;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

// 模拟数据 - 社团信息
const MOCK_CLUB = {
  id: 2,
  name: "音乐社",
  description:
    "音乐社是一个致力于培养学生音乐兴趣和才能的社团，定期组织音乐会、歌唱比赛等活动。",
  createTime: "2023-01-15",
  memberCount: 45,
};

// 模拟数据 - 社团成员
const MOCK_MEMBERS = [
  {
    id: 1,
    name: "张三",
    studentId: "2023001",
    joinTime: "2023-09-01",
    status: "member",
  },
  {
    id: 2,
    name: "李四",
    studentId: "2023002",
    joinTime: "2023-09-05",
    status: "member",
  },
  {
    id: 3,
    name: "王五",
    studentId: "2023010",
    joinTime: "2024-03-20",
    status: "pending",
  },
  {
    id: 4,
    name: "赵六",
    studentId: "2023015",
    joinTime: "2024-03-21",
    status: "pending",
  },
];

// 模拟数据 - 社团活动
const MOCK_ACTIVITIES = [
  {
    id: 1,
    name: "迎新音乐会",
    startDate: "2024-04-15",
    endDate: "2024-04-15",
    startTime: "19:00",
    endTime: "21:00",
    location: "大学生活动中心",
    maxParticipants: 150,
    currentParticipants: 85,
    description: "为新学期举办的音乐会，欢迎所有新生参与。",
    status: "upcoming",
  },
  {
    id: 2,
    name: "校园歌手大赛",
    startDate: "2024-05-20",
    endDate: "2024-05-20",
    startTime: "14:00",
    endTime: "17:00",
    location: "大学生活动中心",
    maxParticipants: 200,
    currentParticipants: 50,
    description: "年度校园歌手大赛，欢迎各位有才华的同学参加。",
    status: "upcoming",
  },
];

// 模拟数据 - 活动参与者
const MOCK_PARTICIPANTS = [
  {
    id: 1,
    activityId: 1,
    name: "张三",
    studentId: "2023001",
    signupTime: "2024-03-10",
    status: "approved",
  },
  {
    id: 2,
    activityId: 1,
    name: "李四",
    studentId: "2023002",
    signupTime: "2024-03-12",
    status: "approved",
  },
  {
    id: 3,
    activityId: 1,
    name: "周七",
    studentId: "2023020",
    signupTime: "2024-03-20",
    status: "pending",
  },
  {
    id: 4,
    activityId: 1,
    name: "吴八",
    studentId: "2023025",
    signupTime: "2024-03-21",
    status: "pending",
  },
];

const ManageClub: FC = () => {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("members");
  const [activeActivityId, setActiveActivityId] = useState<number | null>(null);
  const [showActivityForm, setShowActivityForm] = useState(false);
  const [activityForm] = Form.useForm();

  // 返回上一页
  const handleBack = () => {
    navigate("/user");
  };

  // 处理成员申请
  const handleMemberApplication = (memberId: number, approved: boolean) => {
    message.success(approved ? "已批准该成员的申请！" : "已拒绝该成员的申请！");
    // 实际应用中这里会发送API请求
  };

  // 处理删除成员
  const handleRemoveMember = (memberId: number) => {
    confirm({
      title: "确定要移除该成员吗？",
      icon: <ExclamationCircleOutlined />,
      content: "移除后该成员将不再属于本社团。",
      onOk() {
        message.success("已成功移除该成员！");
        // 实际应用中这里会发送API请求
      },
    });
  };

  // 处理活动参与者申请
  const handleParticipantApplication = (
    participantId: number,
    approved: boolean
  ) => {
    message.success(
      approved ? "已批准该学生参加活动！" : "已拒绝该学生参加活动！"
    );
    // 实际应用中这里会发送API请求
  };

  // 处理创建新活动
  const handleCreateActivity = (values: any) => {
    console.log("创建新活动:", values);
    message.success("活动创建成功！");
    setShowActivityForm(false);
    activityForm.resetFields();
    // 实际应用中这里会发送API请求
  };

  // 处理删除活动
  const handleDeleteActivity = (activityId: number) => {
    confirm({
      title: "确定要删除该活动吗？",
      icon: <ExclamationCircleOutlined />,
      content: "删除后将无法恢复，已报名的学生将收到通知。",
      onOk() {
        message.success("活动已成功删除！");
        // 实际应用中这里会发送API请求
      },
    });
  };

  // 成员表格列定义
  const memberColumns = [
    {
      title: "学生姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "学号",
      dataIndex: "studentId",
      key: "studentId",
    },
    {
      title: "申请/加入时间",
      dataIndex: "joinTime",
      key: "joinTime",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "member" ? "green" : "orange"}>
          {status === "member" ? "正式成员" : "申请中"}
        </Tag>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (_: any, record: any) => (
        <TableActionButtons>
          {record.status === "pending" ? (
            <>
              <Button
                type="primary"
                size="small"
                icon={<CheckCircleOutlined />}
                onClick={() => handleMemberApplication(record.id, true)}
              >
                通过
              </Button>
              <Button
                danger
                size="small"
                icon={<CloseCircleOutlined />}
                onClick={() => handleMemberApplication(record.id, false)}
              >
                拒绝
              </Button>
            </>
          ) : (
            <Button
              danger
              size="small"
              icon={<DeleteOutlined />}
              onClick={() => handleRemoveMember(record.id)}
            >
              移除
            </Button>
          )}
        </TableActionButtons>
      ),
    },
  ];

  // 活动表格列定义
  const activityColumns = [
    {
      title: "活动名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "活动日期",
      dataIndex: "startDate",
      key: "date",
      render: (_: any, record: any) =>
        record.startDate === record.endDate
          ? record.startDate
          : `${record.startDate} 至 ${record.endDate}`,
    },
    {
      title: "活动时间",
      key: "time",
      render: (_: any, record: any) => `${record.startTime}-${record.endTime}`,
    },
    {
      title: "地点",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "报名人数",
      key: "participants",
      render: (_: any, record: any) =>
        `${record.currentParticipants}/${record.maxParticipants}`,
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          color={
            status === "ongoing"
              ? "green"
              : status === "upcoming"
              ? "orange"
              : "default"
          }
        >
          {status === "ongoing"
            ? "进行中"
            : status === "upcoming"
            ? "即将开始"
            : "已结束"}
        </Tag>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (_: any, record: any) => (
        <TableActionButtons>
          <Button
            type="primary"
            size="small"
            icon={<TeamOutlined />}
            onClick={() => setActiveActivityId(record.id)}
          >
            查看报名
          </Button>
          <Button
            size="small"
            icon={<EditOutlined />}
            onClick={() => message.info("编辑活动功能")}
          >
            编辑
          </Button>
          <Button
            danger
            size="small"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteActivity(record.id)}
          >
            删除
          </Button>
        </TableActionButtons>
      ),
    },
  ];

  // 活动参与者表格列定义
  const participantColumns = [
    {
      title: "学生姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "学号",
      dataIndex: "studentId",
      key: "studentId",
    },
    {
      title: "报名时间",
      dataIndex: "signupTime",
      key: "signupTime",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "approved" ? "green" : "orange"}>
          {status === "approved" ? "已通过" : "申请中"}
        </Tag>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (_: any, record: any) => (
        <TableActionButtons>
          {record.status === "pending" ? (
            <>
              <Button
                type="primary"
                size="small"
                icon={<CheckCircleOutlined />}
                onClick={() => handleParticipantApplication(record.id, true)}
              >
                通过
              </Button>
              <Button
                danger
                size="small"
                icon={<CloseCircleOutlined />}
                onClick={() => handleParticipantApplication(record.id, false)}
              >
                拒绝
              </Button>
            </>
          ) : (
            <Tooltip title="已通过的报名无法撤销">
              <Button size="small" disabled>
                已通过
              </Button>
            </Tooltip>
          )}
        </TableActionButtons>
      ),
    },
  ];

  // 过滤当前活动的参与者
  const currentActivityParticipants = activeActivityId
    ? MOCK_PARTICIPANTS.filter(
        (participant) => participant.activityId === activeActivityId
      )
    : [];

  // 当前选中的活动
  const currentActivity = activeActivityId
    ? MOCK_ACTIVITIES.find((activity) => activity.id === activeActivityId)
    : null;

  // 成员管理Tab
  const renderMembersTab = () => (
    <TabContent>
      <ContentCard>
        <CardTitle>
          <TeamOutlined /> 社团成员管理
        </CardTitle>
        <Table
          dataSource={MOCK_MEMBERS}
          columns={memberColumns}
          rowKey="id"
          pagination={false}
        />
      </ContentCard>
    </TabContent>
  );

  // 活动管理Tab
  const renderActivitiesTab = () => (
    <TabContent>
      <ContentCard>
        <SectionHeader>
          <CardTitle>
            <CalendarOutlined /> 社团活动管理
          </CardTitle>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setShowActivityForm(true)}
          >
            创建新活动
          </Button>
        </SectionHeader>
        <Table
          dataSource={MOCK_ACTIVITIES}
          columns={activityColumns}
          rowKey="id"
          pagination={false}
        />
      </ContentCard>

      {activeActivityId && (
        <ContentCard>
          <SectionHeader>
            <CardTitle>
              <TeamOutlined /> 活动报名管理
            </CardTitle>
            <Button
              icon={<RollbackOutlined />}
              onClick={() => setActiveActivityId(null)}
            >
              返回活动列表
            </Button>
          </SectionHeader>

          {currentActivity && (
            <ActivityDetail>
              <h3>{currentActivity.name}</h3>
              <ActivityInfo>
                <InfoItem>
                  <CalendarOutlined /> 日期：{currentActivity.startDate}
                </InfoItem>
                <InfoItem>
                  <ClockCircleOutlined /> 时间：{currentActivity.startTime}-
                  {currentActivity.endTime}
                </InfoItem>
                <InfoItem>
                  <EnvironmentOutlined /> 地点：{currentActivity.location}
                </InfoItem>
                <InfoItem>
                  <UserOutlined /> 报名人数：
                  {currentActivity.currentParticipants}/
                  {currentActivity.maxParticipants}
                </InfoItem>
              </ActivityInfo>
            </ActivityDetail>
          )}

          <Table
            dataSource={currentActivityParticipants}
            columns={participantColumns}
            rowKey="id"
            pagination={false}
          />
        </ContentCard>
      )}
    </TabContent>
  );

  return (
    <ManageContainer>
      <ManageContent>
        <PageHeader>
          <PageTitle>{MOCK_CLUB.name} - 管理页面</PageTitle>
          <Button icon={<RollbackOutlined />} onClick={handleBack}>
            返回个人中心
          </Button>
        </PageHeader>

        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane
            tab={
              <span>
                <TeamOutlined /> 成员管理
              </span>
            }
            key="members"
          >
            {renderMembersTab()}
          </TabPane>
          <TabPane
            tab={
              <span>
                <CalendarOutlined /> 活动管理
              </span>
            }
            key="activities"
          >
            {renderActivitiesTab()}
          </TabPane>
        </Tabs>
      </ManageContent>

      {/* 创建活动表单抽屉 */}
      <Drawer
        title="创建新活动"
        width={720}
        onClose={() => setShowActivityForm(false)}
        open={showActivityForm}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={() => setShowActivityForm(false)}>取消</Button>
            <Button type="primary" onClick={() => activityForm.submit()}>
              创建
            </Button>
          </Space>
        }
      >
        <FormContainer>
          <Form
            form={activityForm}
            layout="vertical"
            onFinish={handleCreateActivity}
          >
            <Form.Item
              name="name"
              label="活动名称"
              rules={[{ required: true, message: "请输入活动名称" }]}
            >
              <Input placeholder="请输入活动名称" />
            </Form.Item>

            <Form.Item
              name="dateRange"
              label="活动日期"
              rules={[{ required: true, message: "请选择活动日期" }]}
            >
              <RangePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="timeRange"
              label="活动时间"
              rules={[{ required: true, message: "请选择活动时间" }]}
            >
              <TimePicker.RangePicker
                style={{ width: "100%" }}
                format="HH:mm"
              />
            </Form.Item>

            <Form.Item
              name="location"
              label="活动地点"
              rules={[{ required: true, message: "请输入活动地点" }]}
            >
              <Input placeholder="请输入活动地点" />
            </Form.Item>

            <Form.Item
              name="maxParticipants"
              label="最大参与人数"
              rules={[{ required: true, message: "请输入最大参与人数" }]}
            >
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="description"
              label="活动描述"
              rules={[{ required: true, message: "请输入活动描述" }]}
            >
              <TextArea rows={6} placeholder="请详细描述活动内容" />
            </Form.Item>
          </Form>
        </FormContainer>
      </Drawer>
    </ManageContainer>
  );
};

export default memo(ManageClub);
