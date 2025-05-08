import { memo } from "react";
import type { FC } from "react";
import {
  FooterWrapper,
  FooterContent,
  TeamSection,
  TeamTitle,
  TeamMembers,
  MemberItem,
  MemberName,
  Copyright,
} from "./styled";
import { TeamOutlined } from "@ant-design/icons";

const Footer: FC = () => {
  // 团队成员信息
  const teamMembers = [
    { name: "翟常昊" },
    { name: "叶国强" },
    { name: "吴东奇" },
    { name: "秦海扬" },
  ];

  // 当前年份
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <TeamSection>
          <TeamTitle>开发团队</TeamTitle>
          <TeamMembers>
            {teamMembers.map((member) => (
              <MemberItem key={member.name}>
                <TeamOutlined style={{ color: "#1fd6a0" }} />
                <MemberName>{member.name}</MemberName>
              </MemberItem>
            ))}
          </TeamMembers>
        </TeamSection>
        <Copyright>© {currentYear} 狮山有我 | 华中农业大学</Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

export default memo(Footer);
