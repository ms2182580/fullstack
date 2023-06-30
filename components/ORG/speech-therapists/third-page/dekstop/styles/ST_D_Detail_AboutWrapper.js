import styled from "styled-components"

export const ST_D_Detail_AboutWrapper = styled.div`
  /* box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2); */
  /* border-radius: ${(x) => (x.isMobile ? `0px` : `8px`)}; */
  padding: ${(x) => (x.isMobile ? `16px` : ``)};
  margin-bottom: ${(x) => (x.isMobile ? `0px` : `40px`)};

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
