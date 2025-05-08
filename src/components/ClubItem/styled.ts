import styled from "styled-components";
export const ItemCard = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 35px;
  background-color: #fff;
  border-radius: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 300px;
  min-height: 110px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-right: 25px;
  flex-shrink: 0;
`;

export const LogoBall = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #1fd6a0 0%, #1fd6a0 100%);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 3px 6px rgba(7, 218, 255, 0.3);
`;

export const LogoRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-20deg);
  width: 80px;
  height: 18px;
  border-radius: 50% / 50%;
  border: 4px solid rgba(7, 28, 255, 0.4);
  border-top: none;
  border-bottom: none;
`;

export const ClubName = styled.h3`
  font-size: 28px;
  font-weight: bold;
  color: #222;
  margin: 0;
`;
