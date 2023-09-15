import styled from "styled-components"
import { PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_AboutWrapper = styled.div`
  margin-bottom:40px;
  scroll-margin-top: 50px;
  
  & > :nth-child(1){
    color:${PRIMARY.PRIMARY_HOVER};
    font-weight: 700;
  }

  & > :nth-child(2) {
    & > :nth-child(1) > :nth-child(1) {
      margin-left: 4px;
      cursor: pointer;
      text-decoration: underline;
      color: #3366cc;
      font-weight: 600;

      &:hover {
        filter: brightness(80%);
      }
    }
  }
`
