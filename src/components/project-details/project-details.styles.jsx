// Modules
import styled, { css } from "styled-components";

// Components
import { Link } from "react-router-dom";

// Shared
import { COLORS } from "../../assets/styles";

export const ProjectDetailBaseWrapper = styled.section`
  margin-top: 9.1rem;
`;

export const ProjectDetailBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

export const ProjectDetailHeading = styled.h4`
  font-family: "Vollkorn", serif;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 41px;
  color: ${COLORS["text-color"]};
  margin-bottom: 0.4rem;
`;

export const ProjectDetailSubHeading = styled(ProjectDetailHeading)`
  font-weight: 500;
  font-size: 2rem;
  font-style: italic;
  line-height: 34px;
  margin-bottom: 0px;
`;

export const ProjectDetailContent = styled.p`
  line-height: 30.6px;

  ${({ color }) => {
    switch (color) {
      case "secondary":
        return `color: ${COLORS["text-color"]}`;
    }
  }};

  ${({ mt, mb }) => {
    switch (mt || mb) {
      case "sm":
        return (mt && "margin-top: 1.7rem") || (mb && "margin-bottom: 1.7rem");
      case "md":
        return (mt && "margin-top: 2.3rem") || (mb && "margin-bottom: 2.3rem");
      case "lg":
        return (mt && "margin-top: 2.4rem") || (mb && "margin-bottom: 2.4rem");
      case "xl":
        return (mt && "margin-top: 6.7rem") || (mb && "margin-bottom: 6.7rem");
    }
  }};

  ${({ textAlign }) => `text-align: ${textAlign}`}
`;

export const ProjectDetailQuote = styled.blockquote`
  padding: 1.5rem 0 1.5rem 2.8rem;
  margin-top: 2.4rem;
  margin-bottom: 0.8rem;
  border-left: 2px solid ${COLORS["secondary-color"]};
`;

export const ProjectDetailList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 2rem;
`;

export const ProjectDetailButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 9.6rem 0;
`;

export const ProjectDetailButton = styled(Link)`
  text-decoration: none;
  border: none;
  padding: 1.7rem 3.5rem 1.5rem 3.6rem;
  border-radius: 12px;
  font-size: inherit;
  font-weight: inherit;
  line-height: 23px;
  cursor: pointer;
  background: transparent;
  backface-visibility: hidden;
  transition: transform 0.3s linear, background 0.3s linear,
    border-color 0.3s linear;

  &:disabled {
    cursor: not-allowed;
  }

  &:active {
    transform: scale(1.1);
  }

  &:not(:last-child) {
    margin-right: 4rem;
  }

  ${({ btnColor }) => {
    switch (btnColor) {
      case "secondary":
        return css`
          border: 2px solid ${COLORS["primary-color"]};
          color: ${COLORS["primary-color"]};
          background: ${COLORS["white-color"]};
          padding: 1.7rem 1.8rem 1.5rem 1.9rem;

          &:hover {
            border-color: rgba(190, 88, 52, 0.8);
          }
        `;
      default:
        return css`
          background: ${COLORS["primary-color"]};
          color: ${COLORS["white-color"]};

          &:hover {
            background: rgba(190, 88, 52, 0.8);
          }
        `;
    }
  }}
`;

export const ProjectDetailSmallHeading = styled.small`
  display: block;
  font-weight: 400;

  ${({ mb }) => mb && "margin-bottom: 1rem"};

  ${({ styleType }) => {
    switch (styleType) {
      case "secondary":
        return css`
          font-weight: 600;
          font-size: 20px;
          line-height: 34px;
          color: ${COLORS["text-color-7"]};
        `;
      default:
        return css`
          line-height: 27px;
          font-size: 1.9rem;
          letter-spacing: 0.224px;
          color: ${COLORS["text-color-6"]};
        `;
    }
  }}
`;
