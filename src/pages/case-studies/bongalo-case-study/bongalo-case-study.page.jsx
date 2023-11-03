// Modules
import React from "react";

// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { Fragment } from "react";
import { CaseStudyHero } from "../../../components";

export const BongaloCaseStudy = () => {
  const { CASE_STUDIES_HERO_ITEMS: caseStudiesHeroItems } = useStaticData();

  return (
    <Fragment>
      <CaseStudyHero {...caseStudiesHeroItems.bongalo} />
    </Fragment>
  );
};