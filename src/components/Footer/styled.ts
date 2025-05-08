import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  padding: 40px 0 30px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamSection = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const TeamTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
  font-weight: 500;
`;

export const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const MemberItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MemberName = styled.span`
  font-size: 15px;
  color: #555;
`;

export const Copyright = styled.div`
  font-size: 14px;
  color: #888;
  text-align: center;
`;
