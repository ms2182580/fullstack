import styled from "styled-components"

export const TherapistInfoSecondPageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  white-space: ${x => x.isMobile ? "none":"pre"};
  margin: ${(x) => (x.isMobile ? "auto" : "")};

  & > :nth-child(1) {
    width: ${(x) => (x.isMobile ? "100%" : "auto")};
  }
  
  & > :nth-child(2){
    & > *{
      display: ${(x) => x.isThirdPage ? `inline` : ``};
    }
  }
  
  /* border: 2px solid crimson; */
  
`