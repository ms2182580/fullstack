import styled from "styled-components"

export const TherapistInfoSecondPageWrapper = styled.div`
  display: flex;
  align-items: center;
  /* align-items: ${(x) => (x.isMobile ? "flex-start" : "center")}; */
  /* flex-direction: ${(x) => (x.isMobile ? "column" : "row")}; */
  flex-wrap: wrap;
  /* white-space: pre; */
  white-space: ${x => x.isMobile ? "none":"pre"};
  /* flex-direction: column; */

  /* border: 7px solid green; */

  /* width: ${(x) => (x.isMobile ? "100%" : "auto")}; */
  margin: ${(x) => (x.isMobile ? "auto" : "")};

  & > :nth-child(1) {
    /* display: flex; */
    width: ${(x) => (x.isMobile ? "100%" : "auto")};
    /* width:calc(100% - 32px); */
    /* width:${x => x.isMobile ? "calc(100% - 32px)" : auto}; */
    /* margin:auto; */

    /* border: 2px solid crimson; */
    /* display: none; */
    /* white-space: pre-line; */

    /* flex-direction: column; */
    /* display: block; */

    & > * > span{
      /* display: flex; */
      /* flex-wrap: nowrap; */
      /* word-break: break-word; */
      /* border: 2px solid crimson; */
    }
  }
`

/* 
!FH0
Finisht styles of second card
Actual problems:
°) The data of ages served gets overflowed on the box
*/