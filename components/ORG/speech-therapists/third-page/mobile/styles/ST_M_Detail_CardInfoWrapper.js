import styled from "styled-components"

export const ST_M_Detail_CardInfoWrapper = styled.div`
/* border: 2px solid crimson; */
  /* display: flex; */
  /* align-items: center; */
  /* flex-wrap: wrap; */
  /* white-space: ${(x) => (x.isMobile ? "none" : "pre")};
  margin: ${(x) => (x.isMobile ? "auto" : "")}; */
  /* margin:auto; */
  /* white-space: pre; */
  /* margin: ""; */
  
  

  & > :nth-child(1) {
    /* width:100%; */
    /* width: ${(x) => (x.isMobile ? "100%" : "auto")}; */
    /* width: auto; */
  }

  & > :nth-child(2) {
    & > * {
      /* display: ${(x) => (x.isThirdPage ? `inline` : ``)}; */
      display:inline;
    }
  }
`
