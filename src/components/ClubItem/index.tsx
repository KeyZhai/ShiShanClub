import { memo } from "react";
import {
  ItemCard,
  LogoContainer,
  LogoBall,
  LogoRing,
  ClubName,
} from "./styled";

interface ClubItemProps {
  name?: string;
  onClick?: () => void;
}

const ClubItem = memo(({ name = "北斗计划", onClick }: ClubItemProps) => {
  return (
    <ItemCard onClick={onClick}>
      <LogoContainer>
        <LogoBall />
        <LogoRing />
      </LogoContainer>
      <ClubName>{name}</ClubName>
    </ItemCard>
  );
});

export default ClubItem;
