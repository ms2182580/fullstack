import styled from "styled-components"
import { PRIMARY, SEMANTICS } from "../../../../../../../../../assets/Colors"

export const CC_D_Detail_Reviews_HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ modal }) => (modal ? `` : `8px`)};

  &.showLine {
    &::after {
      content: "";
      width: calc(100% - calc(32px * 2));
      border: 1px solid hsl(0, 0%, 88.6%);
      margin-top: 32px;
      margin-left:32px;
    }
  }
  
  & > *:not(:first-child){
    padding-inline:${({ modal }) => modal ? "" : `32px`};
    
  }

  & > :nth-child(1) {
    font-size: ${({ modal }) => (modal ? `36px` : `24px`)};
    color: ${PRIMARY.PRIMARY_HOVER};
    font-weight: 600;
    margin-bottom: ${({ modal }) => (modal ? `36px` : `24px`)};
    
    background-color:${({ modal }) => modal ? "" : `${PRIMARY.PRIMARY_BACKGROUND}`};
    
    padding:${({ modal }) => modal ? "" : `24px`};
  }

  & > :nth-child(2) {
    margin-bottom: ${({ modal }) => (modal ? `` : `24px`)};
    
    & > :nth-child(1) {
      font-weight: 600;
      color: ${SEMANTICS.HYPERLINK_NORMAL};
      text-decoration: underline;
      cursor: pointer;
    }
  }
  
  & > :nth-child(3){
    margin-bottom: ${({ modal }) => (modal ? `` : `16px`)};
  }
`
