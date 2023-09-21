import styled from "styled-components"

export const Home_GetServicePlan_DWrapper = styled.div`
  margin-inline: clamp(16px, 20vw - 170px, 196px);
  & > :nth-child(1) {
    font-size: 64px;
    margin-bottom: 62px;
    text-align: center;
    
    letter-spacing: -1.782px; 
  }
  
  & > :nth-child(2){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    gap:44px;
    
  }
  
  
`
