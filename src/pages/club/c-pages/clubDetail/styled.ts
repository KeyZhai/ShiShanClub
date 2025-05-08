import styled from "styled-components";

export const ClubDetailContainer = styled.div`
  width: 100%;
  padding: 20px 0 40px;
`;

export const ClubDetailContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ClubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ClubInfo = styled.div`
  flex: 1;
`;

export const ClubName = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

export const ClubBasicInfo = styled.div`
  margin-bottom: 20px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
  color: #555;

  svg {
    color: #1fd6a0;
    margin-right: 10px;
    font-size: 16px;
  }
`;

export const ClubLogo = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-left: 30px;

  @media (max-width: 768px) {
    margin: 20px 0 0 0;
    align-self: center;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ClubDescription = styled.div`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  padding-left: 15px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    height: 20px;
    width: 5px;
    background-color: #1fd6a0;
    border-radius: 3px;
  }
`;

export const DescriptionContent = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  white-space: pre-line;
`;

export const ClubGallery = styled.div`
  margin-bottom: 30px;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const GalleryItem = styled.div`
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContactInfo = styled.div`
  background-color: #f8f8f8;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 30px;
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 15px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  color: #444;

  svg {
    color: #1fd6a0;
    font-size: 20px;
    margin-right: 10px;
  }
`;

export const QRCodeContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-left: 20px;
  border: 1px solid #eee;
  padding: 5px;
  border-radius: 4px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: #1fd6a0;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 5px;
  }
`;

export const JoinButton = styled.button`
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
`;
