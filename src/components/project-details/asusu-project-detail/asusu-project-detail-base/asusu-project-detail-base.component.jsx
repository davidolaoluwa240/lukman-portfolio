// Modules
import React from "react";

// Components
import { Paper } from "../../../";

// Style
import { Container } from "../../../../assets/styles";
import { PaperContent, PaperGroup } from "../../../paper/paper.styles";
import {
  ProjectDetailBaseWrapper,
  ProjectDetailBlock,
  ProjectDetailContent,
  ProjectDetailHeading,
  ProjectDetailSubHeading,
  ProjectDetailQuote,
  ProjectDetailList,
  ProjectDetailSmallHeading,
} from "../../project-details.styles";

export const AsusuProjectDetailBase = () => {
  return (
    <ProjectDetailBaseWrapper>
      <Container>
        <ProjectDetailBlock>
          <ProjectDetailHeading>About asusu</ProjectDetailHeading>
          <ProjectDetailContent>
            asusu is a digital banking platform for credit unions (savings and
            credit cooperatives societies, SACCOs). It advances efficiency and
            automation at the cooperative staff level by providing them with its
            proprietary backend-as-a-service (BaaS) software, and the
            neobank-style mobile banking app is available for end clients.
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>
            Understanding the basis of the problem
          </ProjectDetailHeading>
          <ProjectDetailContent>
            Tellers in SACCOs are responsible for managing the till to pay and
            receive cash from member contributions for either deposits or loan
            repayments and effectively handle customer transactions, delivering
            excellent client service and maximizing client solutions.
          </ProjectDetailContent>
          <ProjectDetailContent mt="md">
            Teller supervisors couldn't drill down deep and get some of the
            information: who initiated the transaction, basically explore any
            entry, while there was still heavy friction of approval for treasury
            requests. I led the design of a new function for the till process to
            make it more intuitive and simple.
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>Researching the problem</ProjectDetailHeading>
          <ProjectDetailSubHeading>Primary research</ProjectDetailSubHeading>

          <ProjectDetailContent>
            To fully understand the user’s approach on the challenges they face
            and how they see the platform making a difference in optimizing pain
            areas, I conducted one-on-one interviews with Tellers and Teller
            Supervisors. The interview sample took into account men and women
            aged from 25 to 40 working in SACCOs in the Enterprise plan. After
            this initial research, we had a better impression of the problem
            space and target audience.
          </ProjectDetailContent>

          <ProjectDetailQuote>
            “For one task, you have to have several sub-screens to just perform
            one task which took us back to amount take to handle the customer.
            Customer satisfaction index went below our expectations.” ~
          </ProjectDetailQuote>

          <ProjectDetailContent textAlign="right">
            Customer Service Supervisor
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>Personas</ProjectDetailHeading>

          <PaperGroup>
            <Paper
              heading="👤Mr Alfred"
              subheading="44 yrs, Customer Care at NewKosol Cooperative"
            >
              <PaperContent>Devices:</PaperContent>
              <ProjectDetailList>
                <PaperContent as="li">
                  Desktop: during work hours because the system is on the
                  desktop
                </PaperContent>
                <PaperContent as="li">
                  Smart Phone: for social media and emails
                </PaperContent>
              </ProjectDetailList>

              <PaperContent>Key Tasks:</PaperContent>
              <ProjectDetailList>
                <PaperContent as="li">
                  Capture new membership when potential member wants to register
                  in the SACCO.
                </PaperContent>
                <PaperContent as="li">
                  Funds transfer from one account to the next.
                </PaperContent>
                <PaperContent as="li">
                  Authorize the refunds on payments (over), payoffs for loans
                  cleared and account opening.
                </PaperContent>
                <PaperContent as="li">
                  Give balances of accounts (statements) the customer holds via
                  email.
                </PaperContent>
                <PaperContent as="li">
                  Update member records: addresses, names of customers and
                  marriage status.
                </PaperContent>
              </ProjectDetailList>
            </Paper>

            <Paper
              heading="👤Kabir Akintayo"
              subheading="32 yrs, Front Office at Kay Mobile Cooperative"
            >
              <ProjectDetailList>
                <PaperContent as="li">
                  Laptop and Desktop to check on the mobile banking platform.
                </PaperContent>
                <PaperContent as="li">Smart Phone.</PaperContent>
                <PaperContent as="li">
                  Scanner and Camera to capture photos.
                </PaperContent>
              </ProjectDetailList>

              <PaperContent>Key Tasks:</PaperContent>
              <ProjectDetailList>
                <PaperContent as="li">Authorize teller work.</PaperContent>
                <PaperContent as="li">
                  In-charge of cash treasury (repatriate money to and from the
                  bank).
                </PaperContent>
                <PaperContent as="li">
                  Assist the customer service section with authorization of
                  account opening.
                </PaperContent>
                <PaperContent as="li">
                  Supervise the mobile service through making sure the funds are
                  available by providing float.
                </PaperContent>
                <PaperContent as="li">Facilitate the cash How.</PaperContent>
              </ProjectDetailList>
            </Paper>
          </PaperGroup>

          <ProjectDetailContent mt="lg">
            The research made it evident how different users (teller and
            supervisor) would use the app differently. To cater to this, I
            categorized them into two user profiles based on their goals and
            tasks.
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailSmallHeading mb>
            Customer Insights
          </ProjectDetailSmallHeading>
          <ProjectDetailContent mb="xl">
            From the user interviews, contextual analysis and stakeholder
            interviews I gained qualitative insights. It also helped in
            understanding user expectations, behaviors, needs, and motivations.
            We then used these Insights to ensure that all product design
            decisions do benefit the user.
          </ProjectDetailContent>
        </ProjectDetailBlock>

        <ProjectDetailBlock>
          <ProjectDetailHeading>Secondary research</ProjectDetailHeading>
          <ProjectDetailContent>
            We also used the existing research provided by the Enterprise client
            which consisted of the current Payment Process Workflow and the
            visualized interactions of the teller with SACCO customers. It
            supported our primary research to understand the existing flows.
          </ProjectDetailContent>
        </ProjectDetailBlock>
      </Container>
    </ProjectDetailBaseWrapper>
  );
};
