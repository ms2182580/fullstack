import styled from "styled-components"

export const FooterWrapper = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 
  "logo ."
  "mainContent mainContent"
  ". buttons"
  "socialMedia finalSentence"
  ;
  
  
  
  
  & > :nth-child(1){
    margin-top: 12px;
    margin-left: 60px;
    grid-area: logo;
    
  }

  & > div:nth-child(2) {
    margin-top: 17px;
    margin-inline: auto;
    grid-area: mainContent;
    
  }

  & > div:nth-child(2) > div > :not(:last-child) {
    margin-right: 20px;
  }
  
  & > div:nth-child(2) > div > * > a {
    white-space: nowrap;
  }

  & > div:nth-child(2) > :nth-child(1),
  & > div:nth-child(2) > :nth-child(2) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-inline: 27px;
    
  }
  & > div:nth-child(2) > :nth-child(1) > * > *:not(:last-child),
  & > div:nth-child(2) > :nth-child(2) > * > *:not(:last-child){
    margin-bottom: 18px;
  }
  
  & > :last-child{
    justify-self: end;
    align-self: flex-end;
    margin-bottom: 8px;
    margin-right: 10%;
    margin-left: 16px;
    grid-area: finalSentence;
  }
`
