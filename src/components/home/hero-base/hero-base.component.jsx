// Modules
import React from "react";

// Components
import { Animated } from "react-animated-css";

// Style
import {
  Container,
  PrimaryHeading,
  PrimaryHeadingBold,
  HorizontalLine,
} from "../../../assets/styles";
import { HeroBaseDescription } from "./hero-base.styles";

export const HeroBase = () => {
  return (
    <div className="hero">
      <Container>
        <PrimaryHeading>
          <Animated animationIn="bounceInLeft" animationInDuration={1500}>
            <PrimaryHeadingBold as="strong">
              Hey. I'm Lukman 👋🏾
            </PrimaryHeadingBold>
          </Animated>

          <Animated animationIn="bounceInRight" animationInDuration={1500}>
            a senior designer, designing Products <br />
            that {""}
            <PrimaryHeadingBold as="strong">
              Simplify & Enhance Everyday Life
            </PrimaryHeadingBold>
          </Animated>
        </PrimaryHeading>

        <Animated
          animationIn="bounceIn"
          animationInDuration={1500}
          animationInDelay={510}
        >
          <HeroBaseDescription>
            In my 7years experience i have developed a passion for creating
            innovative products that solve real-world problems. My design
            philosophy is centered around simplicity and functionality. I
            believe that the best products are those that seamlessly integrate
            into people's lives and make everyday tasks easier and create value
            for business. I enjoy the pursuit of craft, solving complex
            problems, spending time with my family,{" "}
            <a
              href="https://medium.com/@lukmann.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Writing
            </a>{" "}
            and{" "}
            <a
              href="https://adplist.org/mentors/lukman-suleiman"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mentoring.
            </a>
          </HeroBaseDescription>
        </Animated>

        <HorizontalLine />
      </Container>
    </div>
  );
};
