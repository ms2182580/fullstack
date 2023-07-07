import styled from "styled-components"

export const INDEX_D_STDetailWrapper = styled.div`
  margin-top:27px;
  margin-inline: 40px;
  margin-bottom: 84px;
  
  & > :nth-child(1){
    margin-bottom: 8px;
  }
  & > :nth-child(2){
    margin-bottom: 40px;
  }
  & > :nth-child(3){
    margin-bottom: 35px;
  }
  &> :nth-child(4){
    margin-bottom: 32px;
  }
  & > :nth-child(5){
    margin-bottom: 48px;
  }
  
  
  /* & > :not(:first-child) > :not(:first-child):not(:last-child):not(.InFront) {
    margin-bottom: 48px;
  } */

  /* & > :not(:first-child) > span.toDisappear {
    display: none;
  } */

  & > :nth-child(2) {
    /* border-radius: 8px; */
    /* position: relative; */
    /* border: 2px solid crimson; */
    
  }

  /* & > :nth-child(2),
  & > :nth-child(3) {
    padding-bottom: ${({ modalShowedCtx }) => (modalShowedCtx ? `0` : `32px`)};
  } */

  /* & > :nth-child(2) > :nth-child(6) > :nth-child(5) {
    border: 20px solid crimson;
    
    scroll-margin-top: 74px;
  } */

`
