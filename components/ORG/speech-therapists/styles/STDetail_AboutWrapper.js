import styled from "styled-components"

export const STDetail_AboutWrapper = styled.div`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 32px;
  margin-bottom: 32px;
  
  margin-top: ${(x) => x.sticky ? `48px` : `none`};
  ;
  
  & > :nth-child(1){
    margin-bottom: 8px;
  }
  
  
`
