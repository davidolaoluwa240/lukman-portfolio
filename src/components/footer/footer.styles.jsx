// Modules
import styled from "styled-components";

// Variables
import { COLORS } from "../../assets/styles/variables.styles";

// Components
import { ReactComponent as NigeriaSvg } from "../../assets/images/nigeria-icon.svg";

export const FooterWrapper = styled.div`
  padding: 4.1rem 0;
  background: ${COLORS["text-color"]};
`;

export const FooterCopyrightText = styled.p`
  font-size: 1.8rem;
  line-height: 18px;
  color: ${COLORS["text-color-2"]};
  display: flex;
  align-items: center;
`;

export const NigeriaIcon = styled(NigeriaSvg)`
  vertical-align: middle;
  margin-left: 1rem;
`;
