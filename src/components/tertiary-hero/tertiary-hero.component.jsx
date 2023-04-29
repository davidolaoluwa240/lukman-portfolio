// Modules
import React from "react";

// Style
import { SecondaryHeadingV2 } from "../../assets/styles";
import {
  TertiaryHeroWrapper,
  TertiaryHeroContainer,
  TertiaryHeroHorizontalLine,
  TertiaryHeroItem,
  TertiaryHeroItemWrapper,
  TertiaryHeroItemHeading,
  TertiaryHeroItemContent,
  TertiaryHeroSocialLink,
  List,
} from "./tertiary-hero.styles";

export const TertiaryHero = ({ item }) => {
  const {
    jobContext,
    jobRole,
    projectYear,
    jobCollaborators,
    jobRoleSummary,
    projectWebsite,
    projectPlatform,
  } = item;

  // Job Collaborator Items
  const renderedJobCollaboratorItems = jobCollaborators.map(
    ({ id, collaboratorName, collaboratorRole, collaboratorSocialLink }) => (
      <TertiaryHeroItemContent as="li" key={id}>
        <a
          href={collaboratorSocialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {collaboratorName}
        </a>
        , {collaboratorRole}
      </TertiaryHeroItemContent>
    )
  );

  // Job Role Summary Items
  const renderedJobSummaryItems = jobRoleSummary.map(({ id, name }) => (
    <TertiaryHeroItemContent as="li" key={id}>
      {name}
    </TertiaryHeroItemContent>
  ));

  // Project Platform Items
  const renderedProjectPlatformItems = projectPlatform.map(({ id, name }) => (
    <TertiaryHeroItemContent as="li" key={id}>
      {name}
    </TertiaryHeroItemContent>
  ));

  return (
    <TertiaryHeroWrapper>
      <TertiaryHeroContainer>
        <SecondaryHeadingV2 mb="sm">{jobContext}</SecondaryHeadingV2>

        <TertiaryHeroHorizontalLine />

        <TertiaryHeroItemWrapper>
          <TertiaryHeroItem>
            <TertiaryHeroItemHeading>My Role</TertiaryHeroItemHeading>
            <TertiaryHeroItemContent>{jobRole}</TertiaryHeroItemContent>
          </TertiaryHeroItem>

          <TertiaryHeroItem>
            <TertiaryHeroItemHeading>Project year</TertiaryHeroItemHeading>
            <TertiaryHeroItemContent>{projectYear}</TertiaryHeroItemContent>
          </TertiaryHeroItem>

          <TertiaryHeroItem>
            <TertiaryHeroItemHeading>Collaborators</TertiaryHeroItemHeading>
            <List>{renderedJobCollaboratorItems}</List>
          </TertiaryHeroItem>

          <TertiaryHeroItem>
            <TertiaryHeroItemHeading>What i did</TertiaryHeroItemHeading>
            <List>{renderedJobSummaryItems}</List>
          </TertiaryHeroItem>

          <TertiaryHeroItem>
            <TertiaryHeroSocialLink
              href={projectWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Website
            </TertiaryHeroSocialLink>
          </TertiaryHeroItem>

          <TertiaryHeroItem hide={!projectPlatform.length}>
            <TertiaryHeroItemHeading>Platform</TertiaryHeroItemHeading>
            <List>{renderedProjectPlatformItems}</List>
          </TertiaryHeroItem>
        </TertiaryHeroItemWrapper>
      </TertiaryHeroContainer>
    </TertiaryHeroWrapper>
  );
};
