import styled from "styled-components";

export const STDetail_STDetails_ThirdPageWrapper = styled.div`
  margin: 16px;
  
  & > :nth-child(1), 
  & > :nth-child(2),
  & > :nth-child(2) > :nth-child(1),
  & > :nth-child(3){
    margin-bottom: 24px;
  }
  
  & > :nth-child(2) > :nth-child(2)> :nth-child(2) > *{
    /* border: 2px solid crimson; */
    
  }
  
  & > :nth-child(2) > :nth-child(1) > :nth-child(2) > *,
  & > :nth-child(2) > :nth-child(2)> :nth-child(2) > *{
    display: block;
  }
  
  
`
