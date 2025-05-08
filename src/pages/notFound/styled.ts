import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: "微软雅黑", sans-serif;
`;

export const ErrorCode = styled.h1`
  font-size: 8rem;
  color: #ff6b6b;
  margin-bottom: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ErrorMessage = styled.p`
  font-size: 1.8rem;
  color: #333;
  margin-top: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 1rem;
  text-align: center;
  max-width: 500px;
`;

export const BackButton = styled.button`
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a7bd5;
  }
`;

export const ClubIcon = styled.div`
  font-size: 5rem;
  color: #4a90e2;
  margin-bottom: 1rem;
`;
