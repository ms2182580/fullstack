import styled from "styled-components"

export const STDetail_MainWrapper = styled.div`
  & > * {
    padding-inline: ${(x) => x.isMobile ? `none` : `96px`};
    
  }
  
  & > :nth-child(2){
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  
  & > :nth-child(2) {
    position:relative;
  }

  

  & > :nth-child(2),
  & > :nth-child(3) {
    padding-bottom: 32px;
  }
  
  
  & > :nth-child(2)> :nth-child(6) > :nth-child(5){
    scroll-margin-top:74px;
  }
  
  
`
