import styled from "styled-components"

export const STDetail_MainWrapper = styled.div`
  margin-inline: 40px;
  /* position: relative; */
  /* overflow: hidden; */

  & > * {
    /* padding-inline: ${(x) => (x.isMobile ? `none` : `40px`)}; */
  }
  
  & > :nth-child(1){
    
  }
  

  & > :nth-child(2) {
    /* box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25); */
    border-radius:8px;
    position: relative;
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    padding-bottom: 32px;
    padding-bottom: ${({ modalShowedCtx }) => modalShowedCtx ? `0` : `32px`};
    
  }

  & > :nth-child(2) > :nth-child(6) > :nth-child(5) {
    scroll-margin-top: 74px;
  }
  
  .InFront {
    width: calc(100% + 40px);
    height: 1000%;
    left:-40px;
    top:0;
    z-index: 2;
    position: absolute;
    background: rgba(44, 42, 42, 0.61) ;
    
    
  }
  
  
`
