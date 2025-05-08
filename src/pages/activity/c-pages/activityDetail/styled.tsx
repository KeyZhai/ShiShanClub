import styled from "styled-components";

// 重用主活动页面的部分样式
export const ActivityContainer = styled.div`
  width: 100%;
  padding: 0 0 40px;
`;

export const ActivityContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const DetailContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

export const DetailHeader = styled.div`
  margin-bottom: 30px;
`;

export const DetailTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

export const DetailBanner = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 25px;
`;

export const DetailInfoBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

export const DetailInfoItem = styled.div`
  display: flex;
  align-items: center;
  color: #555;
  font-size: 15px;

  svg {
    color: #1fd6a0;
    margin-right: 8px;
  }
`;

export const DetailContent = styled.div`
  line-height: 1.8;
  font-size: 16px;
  color: #444;

  h2 {
    font-size: 22px;
    color: #333;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
`;

export const SignupButton = styled.button`
  background-color: #1fd6a0;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #16b386;
  }

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;

// 活动类型标签
export const TypeTag = styled.div<{ type: string }>`
  display: inline-block;
  margin-right: 10px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  background-color: ${(props) =>
    props.type === "lecture"
      ? "#e6f7ff"
      : props.type === "workshop"
      ? "#f6ffed"
      : props.type === "competition"
      ? "#fff2e8"
      : props.type === "social"
      ? "#f9f0ff"
      : props.type === "volunteer"
      ? "#f0f5ff"
      : "#f5f5f5"};
  color: ${(props) =>
    props.type === "lecture"
      ? "#1890ff"
      : props.type === "workshop"
      ? "#52c41a"
      : props.type === "competition"
      ? "#fa8c16"
      : props.type === "social"
      ? "#722ed1"
      : props.type === "volunteer"
      ? "#1890ff"
      : "#666"};
  border: 1px solid
    ${(props) =>
      props.type === "lecture"
        ? "#91caff"
        : props.type === "workshop"
        ? "#b7eb8f"
        : props.type === "competition"
        ? "#ffbb96"
        : props.type === "social"
        ? "#d3adf7"
        : props.type === "volunteer"
        ? "#adc6ff"
        : "#d9d9d9"};
`;

// 新增样式组件
export const OrganizerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 25px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;

  h3 {
    font-size: 18px;
    color: #333;
    margin: 0 0 5px 0;
  }

  p {
    color: #666;
    margin: 5px 0;
  }
`;

export const ActivityActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  padding: 15px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const ActionButton = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  padding: 8px 15px;
  font-size: 15px;
  color: ${(props) => (props.$active ? "#1fd6a0" : "#666")};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;

  &:hover {
    color: #1fd6a0;
  }

  svg {
    font-size: 18px;
  }
`;

export const CommentSection = styled.div`
  margin: 30px 0;
`;

export const CommentItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 15px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const ParticipantsList = styled.div`
  margin: 30px 0;
`;

export const ParticipantItem = styled.div`
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const RelatedActivitiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
`;

export const RelatedActivityCard = styled.div`
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  position: relative;
  padding-left: 12px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 5px;
    height: 18px;
    width: 4px;
    background-color: #1fd6a0;
    border-radius: 2px;
  }
`;

export const SignupSuccessModal = styled.div`
  text-align: center;
  padding: 20px 0;

  h2 {
    margin: 15px 0 5px;
    color: #333;
  }

  p {
    color: #666;
  }

  div {
    text-align: left;

    p {
      margin: 10px 0;
    }
  }
`;
