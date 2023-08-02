import styled from "styled-components"
import { PRIMARY, SEMANTICS } from "../../../../../../assets/Colors"

export const ST_D_Detail_Reviews_HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ modal }) => (modal ? `` : `8px`)};

  &.showLine {
    &::after {
      content: "";
      width: 100%;
      border: 1px solid hsl(0, 0%, 88.6%);
      margin-top: 32px;
    }
  }

  & > :nth-child(1) {
    font-size: ${({ modal }) => (modal ? `36px` : ``)};
    color: ${PRIMARY.PRIMARY_HOVER};
    font-weight: 600;
    margin-bottom: ${({ modal }) => (modal ? `36px` : ``)};
  }

  & > :nth-child(2) {
    & > :nth-child(1) {
      font-weight: 600;
      color: ${SEMANTICS.HYPERLINK_NORMAL};
      text-decoration: underline;
      cursor: pointer;
    }
  }

  & > :nth-child(3) {
    /* margin-top: 8px; */
  }
`
