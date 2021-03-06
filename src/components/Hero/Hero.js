import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> my Personal Portfolio
      </SectionTitle>
      <SectionText>Junior Full Stack Developer</SectionText>
     
      <Button
        onClick={() => {
          window.location = 'mailto:jse.94@me.com';
        }}
      >
        Get in touch!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
