import styled from "styled-components"

export const ST_D_Results_CardInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* white-space: ${(x) => (x.isMobile ? "none" : "pre")};
  margin: ${(x) => (x.isMobile ? "auto" : "")}; */
  white-space: pre;
  /* margin: ""; */
  

  & > :nth-child(1) {
    /* width: ${(x) => (x.isMobile ? "100%" : "auto")}; */
    width:auto;
  }

  & > :nth-child(2) {
    & > * {
      display: ${(x) => (x.isThirdPage ? `inline` : ``)};
    }
  }
`
