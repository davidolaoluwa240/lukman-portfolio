// Modules
import styled from "styled-components";

// Shared
import { COLORS } from "../../../../assets/styles";

// Components
import { Link } from "react-router-dom";

export const ProjectPreviewItemWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 7.9rem;
  }
`;

export const CompanyName = styled.p`
  font-weight: 600;
  font-size: 2rem;
  line-height: 40px;
  letter-spacing: 0.04em;
  color: rgba(33, 33, 33, 0.5);
  margin-bottom: 1.1rem;
`;

export const JobContext = styled.h6`
  font-family: "Vollkorn", serif;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 28px;
  letter-spacing: -0.02em;
  margin-bottom: 1.1rem;
  color: rgba(33, 33, 33, 0.9);
`;

export const JobContextDescription = styled.p`
  line-height: 30px;
  color: rgba(33, 33, 33, 0.7);
  margin-bottom: 1.25rem;
`;

export const ProjectLink = styled(Link)`
  font-weight: 600;
  font-size: 2rem;
  line-height: 56px;
  text-decoration-line: underline;
  color: ${COLORS["text-color-3"]};
  margin-bottom: 1.25rem;
`;

export const ProjectImageContainer = styled.div`
  overflow: hidden;
`;

export const ProjectImage = styled.img`
  vertical-align: middle;
  object-fit: cover;
  transition: transform 0.7s linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
