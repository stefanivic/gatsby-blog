import React from "react";
import IntroSection from "../../blocks/Intro";
import Link from "../../blocks/Link";
import { Text } from "../../blocks/Common";

const Intro = () => (
  <IntroSection>
    <IntroSection.Wrapper>
      <IntroSection.Heading>WEB DEVELOPER.</IntroSection.Heading>
      <IntroSection.SubHeading>
        TECH AND SCIENCE ENTHUSIAST.
      </IntroSection.SubHeading>
      <Text>
        I am a Web Developer with a strong focus on performance and
        scale-ability of web applications. I love utilizing User Experience
        research to craft good designs and apply them with code. I take part in
        the open source community where I can use the latest technologies and
        best practices. I write blog posts and my latest interest is in helping
        beginners learn more about the web.
      </Text>
      <Link to="/about">Read the full bio</Link>
    </IntroSection.Wrapper>
  </IntroSection>
);

export default Intro;
