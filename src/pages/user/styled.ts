import styled from "styled-components";
import { Card } from "antd";

export const UserContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px 0;
`;

export const UserContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 24px;
`;

export const TabContent = styled.div`
  margin-top: 20px;
`;

export const ActivityCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  .ant-card-body {
    padding: 20px;
  }
`;

export const ClubCard = styled(ActivityCard)``;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 14px;

  svg {
    color: #1fd6a0;
    margin-right: 8px;
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const EmptyText = styled.div`
  text-align: center;
  color: #999;
  padding: 40px 0;
  font-size: 16px;
`;
