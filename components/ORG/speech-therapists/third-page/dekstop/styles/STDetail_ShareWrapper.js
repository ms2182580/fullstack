import styled from 'styled-components'

export const STDetail_ShareWrapper = styled.div`

  & > :nth-child(3){
    visibility: ${({ showModal }) => showModal ? `visible` : `hidden`};
    
    
    &:hover{
      opacity:${({ showModal }) => showModal ? `1` : `0`};  
    }
    
  }



  &:hover{
    opacity:0.9;
  }
  
  
  
`