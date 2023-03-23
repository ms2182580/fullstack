import styled from 'styled-components'

export const ShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > :nth-child(1){
    margin-bottom: ${(x) => x.isThirdPage === false ? `11.5px;` : `10px`};
    
  }
  
`