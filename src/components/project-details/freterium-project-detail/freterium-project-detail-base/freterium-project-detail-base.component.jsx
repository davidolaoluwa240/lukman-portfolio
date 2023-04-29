// Modules
import React from "react";

// Components
import { Link } from "react-router-dom";
import { ReactComponent as FreteriumScheduling } from "../../../../assets/images/freterium-scheduling.svg";
import { ReactComponent as FreteriumTracking } from "../../../../assets/images/freterium-tracking.svg";
import { ReactComponent as FreteriumDriver } from "../../../../assets/images/freterium-driver.svg";

// Style
import { Container } from "../../../../assets/styles";
import {
  ProjectDetailBaseWrapper,
  ProjectDetailBlock,
  ProjectDetailHeading,
  ProjectDetailContent,
  ProjectDetailList,
  ProjectDetailSubHeading,
  ProjectDetailButtonGroup,
  ProjectDetailButton,
} from "../../project-details.styles";
import {
  FreteriumProjectDetailCardList,
  FreteriumProjectDetailCard,
} from "./freterium-project-detail-base.styles";

export const FreteriumProjectDetailBase = () => {
  return (
    <ProjectDetailBaseWrapper>
      <Container>
        <ProjectDetailBlock>
          <ProjectDetailHeading>Introduction</ProjectDetailHeading>
          <ProjectDetailContent>
            Logistics is the key driver of a nation's economy. Freterium - a
            startup with solid leadership, has their own vision and offering to
            redefine the current transportation with the help of technology,
            where one can get real time information of movement of goods and on
            demand sourcing of fleets. Freterium was in need of a senior UX
            design partner who can understand the logistics space and improve
            upon the product's overall user experience for web and mobile apps.
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>
            Understanding the basis of the problem
          </ProjectDetailHeading>
          <ProjectDetailContent>
            App flow and data presentation can make or break the deal for users.
            The challenge was to create a journey that surfaces the key data
            points and facilitates user & stake holders right from onboarding
            process in an intuitive way.
          </ProjectDetailContent>

          <FreteriumProjectDetailCardList>
            <FreteriumProjectDetailCard>
              <FreteriumScheduling aria-label="scheduling" />
              <ProjectDetailContent color="secondary">
                Scheduling
              </ProjectDetailContent>
            </FreteriumProjectDetailCard>

            <FreteriumProjectDetailCard>
              <FreteriumTracking aria-label="tracking" />
              <ProjectDetailContent color="secondary">
                Tracking
              </ProjectDetailContent>
            </FreteriumProjectDetailCard>

            <FreteriumProjectDetailCard>
              <FreteriumDriver aria-label="driver" />
              <ProjectDetailContent color="secondary">
                Driver
              </ProjectDetailContent>
            </FreteriumProjectDetailCard>
          </FreteriumProjectDetailCardList>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>Project goals</ProjectDetailHeading>
          <ProjectDetailSubHeading>
            we want the users to
          </ProjectDetailSubHeading>

          <ProjectDetailList as="ol">
            <ProjectDetailContent as="li">
              Understand what the product does
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              See the added value
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Want to use it more
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              In less than 5 minutes get to the AHA moment
            </ProjectDetailContent>
          </ProjectDetailList>

          <ProjectDetailContent mt="sm">
            We all agreed that I need to speak and understand the operations of
            the current users on the platform in order to help improve the UX.
            They arranged that i work closely with the customer care and
            business analyst that will visit them and book a time for
            conversation while i joined in Virtually.
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>Research phase</ProjectDetailHeading>
          <ProjectDetailContent>
            The goal was to observe their operations, understand their workflows
            better, and get insights from real users. We chose 5 key people from
            each user group for the User Interview. We created a plan, created
            questionnaires, and scheduled meetings.
          </ProjectDetailContent>
          <ProjectDetailContent>Users in the Ecosystem -</ProjectDetailContent>
          <ProjectDetailList as="ol">
            <ProjectDetailContent as="li">
              GSP (Ground Staff Personnel)
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Operations Staff
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Warehouse and Regional Managers
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Billing & Management team
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Customer Support Team
            </ProjectDetailContent>

            <ProjectDetailContent as="li">Customers</ProjectDetailContent>
          </ProjectDetailList>
          <ProjectDetailContent mt="sm">
            We conducted user interviews with a twist. Since GSPs and operations
            staff tend to be busy in the morning and evening, we decided to
            interview the customer support, billing, and management teams
            instead. We had candid conversations and learned about the pain
            points of both user groups. They all expressed a strong need for a
            transparent and user-friendly system. In the evenings, we compiled
            all the recordings, took notes, and discussed our findings.
          </ProjectDetailContent>
          <ProjectDetailContent>
            However, things took a turn when we started interviewing the GSPs
            and operations staff. They didn't answer our questions accurately
            and claimed that the software as not been of any help, as they would
            still have to do everything manually. We later discovered that they
            were uncooperative for various reasons.
          </ProjectDetailContent>
          <ProjectDetailContent mt="sm">
            After finding user interviews with GSPs and operations staff
            unhelpful, we decided to conduct a contextual inquiry by shadowing
            them for a whole week. On the first day, there was awkward silence
            and uncomfortable stares. However, things slowly started to change
            as I began to appreciate their hard work in difficult work
            conditions. I assured them that our work wouldn't affect their jobs
            but instead would reduce their workload.
          </ProjectDetailContent>

          <ProjectDetailContent mt="md">Questions asked</ProjectDetailContent>

          <ProjectDetailList as="ol">
            <ProjectDetailContent as="li">
              How would you best describe your company ? (one choice)
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              3PL, Industrial, Retailer, Distributor, Transporter, Other: Please
              fill up
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Do you import and store cargo on behalf of your customers? Yes |
              No
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Do you locally distribute the goods for your customers? Yes | No
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Do you own trucks or do you outsource via contracted carriers?
              (one choice) Owned fleet only | Contracted carrier only | Both
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              How many trucks do you load per day on average? (one choice) 1-10
              | 10-50 | 50-100 | more than 100 What kind of loads do you
              perform? (multiple choice)
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Full-Truck-Load (FTL) | Less-than-Truck-Load (LTL) | Last-Mile |
              B2B | E-Commerce | FMCG
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Do you have Transport Management software? Yes | No
            </ProjectDetailContent>

            <ProjectDetailContent as="li">
              Is your data ready or you need help from us? Yes | No
            </ProjectDetailContent>
          </ProjectDetailList>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>Insight</ProjectDetailHeading>

          <ProjectDetailContent>
            We came back after 2 weeks with a huge pile of data. We started
            analyzing all the recordings, observations, and photographs as per
            ‘User Groups.
          </ProjectDetailContent>
          <ProjectDetailContent>
            We used a variety of different tools to achieve that. Creating Mind
            maps and Affinity mapping really helped us get to the core.
          </ProjectDetailContent>
          <ProjectDetailContent>
            Using insights we redefined the problems to be solved.
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>Small pause</ProjectDetailHeading>
          <ProjectDetailContent>
            Stakeholders found all the research work and observations really
            fascinating. However, few insights completely show alot need to be
            improved on both on the web and the Driver application. but we
            decided to take it one Problem at a time with selecting the best
            pressing issues for users and also will help new users get hold of
            the business value of the platform.
          </ProjectDetailContent>
          <ProjectDetailContent>
            so we decided to improve the Onboarding and creation of transport
            order experience.
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailButtonGroup>
          <ProjectDetailButton as={Link} to="/projects/bongalo">
            Next project
          </ProjectDetailButton>
        </ProjectDetailButtonGroup>
      </Container>
    </ProjectDetailBaseWrapper>
  );
};
