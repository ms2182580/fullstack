import styled from 'styled-components'

export const ChatTextWrapper = styled.p`
  
  &.leftChat{
    border: 2px solid green ;
    
    & > span{
      display: block;
    }
    
  }
  
  &.rightChat{
    border: 2px solid crimson ;
    
  }
  
`