import styled from "styled-components"
import { PRIMARY, SEMANTICS } from "../../../../../../assets/Colors"

export const STDetail_Reviews_HeaderDesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ modal }) => (modal ? `` : `8px`)};

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
