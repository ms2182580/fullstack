import styled from "styled-components"

export const UnderConstructionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  & > :nth-child(1),
  & > :nth-child(2){
    margin-bottom: 32px;
  }
  
  & > :nth-child(3){
    margin-bottom: 40px;
    
  }
  
  
`
