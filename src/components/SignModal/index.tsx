import { memo } from "react";
import type { FC, ReactNode } from "react";
import { Modal, Form, Input, Button, Select, message } from "antd";
import { joinClub, joinActivity } from "./service/signmodal";

interface IProps {
  children?: ReactNode;
  visible: boolean;
  name: string;
  onClose: () => void;
}

const SignModal: FC<IProps> = ({ visible, onClose, name }) => {
  const [form] = Form.useForm();

  // 提交报名表单
  const handleSubmit = (values: any) => {
    if (name.includes("活动")) {
      // 实际应用中这里会发送API请求
      joinActivity({ activityname: name, username: values.name })
        .then((response) => {
          console.log("报名结果:", response);
          message.success("报名成功！");
        })
        .catch((error) => {
          console.error("报名失败:", error);
          message.error("报名失败，请稍后再试！");
        });
    } else {
      // 实际应用中这里会发送API请求
      joinClub({ clubname: name, username: values.name })
        .then((response) => {
          console.log("报名结果:", response);
          message.success("报名成功！");
        })
        .catch((error) => {
          console.error("报名失败:", error);
          message.error("报名失败，请稍后再试！");
        });
    }
    onClose();
  };

  return (
    <div>
      {/* 报名表单模态框 */}
      <Modal title="报名" open={visible} onCancel={onClose} footer={null}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: "请输入姓名" }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>

          <Form.Item
            name="studentId"
            label="学号"
            rules={[{ required: true, message: "请输入学号" }]}
          >
            <Input placeholder="请输入学号" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="手机号码"
            rules={[{ required: true, message: "请输入手机号码" }]}
          >
            <Input placeholder="请输入手机号码" />
          </Form.Item>

          <Form.Item name="college" label="学院">
            <Select placeholder="请选择学院">
              <Select.Option value="信息学院">信息学院</Select.Option>
              <Select.Option value="工学院">工学院</Select.Option>
              <Select.Option value="文法学院">文法学院</Select.Option>
              <Select.Option value="经济管理学院">经济管理学院</Select.Option>
              <Select.Option value="公共管理学院">公共管理学院</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              提交报名
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default memo(SignModal);
