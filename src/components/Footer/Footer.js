import React from 'react';
import {
  AiFillGithub,
  AiFillMediumSquare,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jse.94@me.com">jse.94@me.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>created by jasneastwd</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/jasneastwd">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/jasneastwd?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuB7Kyf9JTY%2BnkCUjYFPGhA%3D%3D">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/JasnEastwd">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://jasneastwd.medium.com">
            <AiFillMediumSquare size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
