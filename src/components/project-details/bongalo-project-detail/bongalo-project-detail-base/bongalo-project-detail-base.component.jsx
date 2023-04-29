// Modules
import React from "react";

// Components
import { Link } from "react-router-dom";

// Style
import { Container } from "../../../../assets/styles";
import {
  ProjectDetailBaseWrapper,
  ProjectDetailContent,
  ProjectDetailHeading,
  ProjectDetailList,
  ProjectDetailBlock,
  ProjectDetailButtonGroup,
  ProjectDetailButton,
} from "../../project-details.styles";

export const BongaloProjectDetailBase = () => {
  return (
    <ProjectDetailBaseWrapper>
      <Container>
        <ProjectDetailBlock>
          <ProjectDetailHeading>Introduction</ProjectDetailHeading>
          <ProjectDetailContent>
            As Africa's tourism climate improves, the number of visitors
            traveling in and out of the continent will increase. Bongalo was
            founded in response to an increase in the number of reservations
            made in African hospitality institutions, with the goal of assisting
            travellers in finding comfortable places to stay while in Africa.
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>
            Understanding the basis of the problem
          </ProjectDetailHeading>
          <ProjectDetailContent>
            Early research began with me reviewing the old Bongalo website to
            see how travellers were experiencing the product and to discover
            patterns and insights that were causing common problems. Some of the
            most common problems encountered were as follows:
          </ProjectDetailContent>

          <ProjectDetailList>
            <ProjectDetailContent as="li">
              Lack of consistency across the product
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Long process to book a space
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Poor display of user’s information
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Lack of clarity in the process of listing a space
            </ProjectDetailContent>
          </ProjectDetailList>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>Project goals</ProjectDetailHeading>
          <ProjectDetailList>
            <ProjectDetailContent as="li">
              To streamline the sign up process by the designing a solution that
              increases the Sign up completion rate.
            </ProjectDetailContent>
            <ProjectDetailContent as="li">
              To automate the compliance process by using technology in the
              accommodation reservation process.
            </ProjectDetailContent>
            <ProjectDetailContent as="li">
              Reduce the amount of time and pain it would take for visitor to
              find and book for a space.
            </ProjectDetailContent>
          </ProjectDetailList>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>
            Traveling with the legs of travellers
          </ProjectDetailHeading>
          <ProjectDetailContent>
            We rolled up our sleeves and dug into the heart of the problem to
            gain more insight. We began by talking to people and asking them the
            following questions:
          </ProjectDetailContent>

          <ProjectDetailList as="ol">
            <ProjectDetailContent as="li">
              How often do you visit or travel within Africa?
            </ProjectDetailContent>
            <ProjectDetailContent as="li">
              What are your major reasons for travelling within Africa?
            </ProjectDetailContent>
            <ProjectDetailContent as="li">
              How do you reserve a space prior to your trip?
            </ProjectDetailContent>
            <ProjectDetailContent as="li">
              How easy is it to find an accommodation?
            </ProjectDetailContent>
            <ProjectDetailContent as="li">
              What accommodation services do you commonly use?
            </ProjectDetailContent>
            <ProjectDetailContent as="li">
              Based on your alternatives, can you share / rate your experience?
            </ProjectDetailContent>
          </ProjectDetailList>
          <ProjectDetailContent>
            The purpose of these questions was to assess respondents' comfort
            level in finding accommodations as well as to identify potential
            problems and how best to tackle them.
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>Target audience</ProjectDetailHeading>
          <ProjectDetailContent>
            At this point we had enough data to help us understand what these
            users where facing, but analysing all of these data requires some
            form of guidance for a start, and narrowing all of these into a user
            target group was the best thing for the team to make sense of
            everything:
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>
            Discussing and structuring the product
          </ProjectDetailHeading>
          <ProjectDetailContent>
            We (myself and stakeholders) held a series of meetings in which we
            used the research findings to craft our MVP, which resulted in the
            creation of a well-structured PRD outlining features and what needed
            to be built. With this, it was clear what needed to be built, and
            breaking the PRD down into bit sized steps was the ideal next step
            to help my fellow designers understand the app's intricacies, user
            personas, and user flows. The following were the core
            functionalities that my team and I were required to build:
          </ProjectDetailContent>

          <ProjectDetailList>
            <ProjectDetailContent as="li">
              Revamp the web product to a posses a much better visual design
            </ProjectDetailContent>
            <ProjectDetailContent as="li">
              Increase completion rate in sign up experience by 40%
            </ProjectDetailContent>
            <ProjectDetailContent as="li">
              Provide a better checkout experience by introducing a nicer
              structured form and layout
            </ProjectDetailContent>
          </ProjectDetailList>
        </ProjectDetailBlock>

        <ProjectDetailButtonGroup>
          <ProjectDetailButton
            as={Link}
            to="/projects/freterium"
            btnColor="secondary"
          >
            Previous project
          </ProjectDetailButton>

          <ProjectDetailButton as={Link} to="/projects/asusu">
            Next project
          </ProjectDetailButton>
        </ProjectDetailButtonGroup>
      </Container>
    </ProjectDetailBaseWrapper>
  );
};
