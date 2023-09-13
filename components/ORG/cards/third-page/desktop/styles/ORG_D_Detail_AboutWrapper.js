import styled from "styled-components"

export const ORG_D_Detail_AboutWrapper = styled.div`
  margin-bottom:40px;
  scroll-margin-top: 50px;

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
