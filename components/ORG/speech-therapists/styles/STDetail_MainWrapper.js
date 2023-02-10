import styled from "styled-components"

export const STDetail_MainWrapper = styled.div`
  & > * {
    padding-inline: ${(x) => x.isMobile ? `none` : `96px`};
    
  }
  
  & > :nth-child(2){
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    padding-bottom: 32px;
  }
  
  & > :nth-child(2) > :nth-child(3){
    /* border: 2px solid crimson; */
    /* padding-top:24px; */
    
  }
  
  
`
