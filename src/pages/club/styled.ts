import styled from "styled-components";
export const ClubContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 20px 20px;
  z-index: -1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  color: #666;
  max-width: 600px;
  margin-bottom: 40px;
`;

export const ClubsSection = styled.div`
  padding: 50px 0 40px 60px;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
`;

export const ClubsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
`;
