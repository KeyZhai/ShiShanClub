import styled from "styled-components";
import bgImage from "@/assets/img/activityBackground.png";
export const ActivityContainer = styled.div`
  width: 100%;
  padding: 0 0 40px;
`;

export const ActivityHeader = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 40px;
  overflow: hidden;
  background: url(${bgImage});
  border-radius: 0 0 20px 20px;
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 60px 40px;
  color: #fff;
`;

export const PageTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const PageSubtitle = styled.p`
  font-size: 18px;
  max-width: 600px;
  opacity: 0.9;
`;

export const ActivityContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FilterContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 25px;
  position: relative;
  padding-left: 15px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    height: 25px;
    width: 5px;
    background-color: #1fd6a0;
    border-radius: 3px;
  }
`;

export const ActivityList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`;

export const ActivityCard = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const ActivityStatus = styled.div<{ status: string }>`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) =>
    props.status === "ongoing"
      ? "#1fd6a0"
      : props.status === "upcoming"
      ? "#f5a623"
      : "#8e8e8e"};
  color: white;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

export const CardInfo = styled.div`
  display: flex;
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  svg {
    margin-right: 5px;
  }
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  height: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ActivityClub = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: #1fd6a0;
  font-weight: 500;
`;

export const NoActivities = styled.div`
  text-align: center;
  padding: 40px 0;
  color: #888;
  font-size: 16px;
`;

// 详情页样式
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
        : "#d9d9d9"};
`;
