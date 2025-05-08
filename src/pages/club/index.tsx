// 静态导入图片
import bgImage from "@/assets/img/HomeBackground.png";
import ClubItem from "@/components/ClubItem";
import {
  ClubContainer,
  HeroSection,
  BackgroundImg,
  HeroContent,
  Title,
  Subtitle,
  ClubsSection,
  SectionTitle,
  ClubsContainer,
} from "./styled";
import { useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchClubList } from "./store/club";
import { shallowEqual } from "react-redux";
function Club() {
  const navigate = useNavigate();
  const location = useLocation();
  const showDetail = location.pathname.includes("/detail");
  const dispatch = useAppDispatch();
  const { clubList } = useAppSelector(
    (state) => ({
      clubList: state.club.clubList,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(fetchClubList());
  }, []);
  const goDetailItem = (name: string) => {
    navigate(`/club/detail/${name}`);
  };

  // 如果是详情页，则只渲染Outlet
  if (showDetail) {
    return <Outlet />;
  }

  // 否则渲染主页内容
  return (
    <ClubContainer>
      <HeroSection>
        <BackgroundImg src={bgImage} alt="背景图片" />
        <HeroContent>
          <Title>欢迎来到狮山有我</Title>
          <Subtitle>
            这里是校园活动的中心，发现你的兴趣，结交志同道合的朋友
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <ClubsSection>
        <SectionTitle>热门社团</SectionTitle>
        <ClubsContainer>
          {clubList.map((item: any) => (
            <ClubItem
              key={item}
              name={item}
              onClick={() => {
                goDetailItem(item);
              }}
            />
          ))}
        </ClubsContainer>
      </ClubsSection>
    </ClubContainer>
  );
}

export default Club;
