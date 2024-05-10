import styled from "styled-components"

export const ORG_D_Detail_AboutWrapper = styled.div`
  scroll-margin-top: 50px;

  & > :nth-child(1) {
    /* line-height: 27px; */

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
