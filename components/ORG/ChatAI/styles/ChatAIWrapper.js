import styled from 'styled-components'
import { PRIMARY } from '../../../../assets/Colors'

export const ChatAIWrapper = styled.div`
  position: fixed;
  bottom:0;
  right:-14px;
  
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: flex-end; */
  
  margin-inline: clamp(16px, calc(10vw - 80px), 96px);
  
  z-index:4;
  
  /* background-color: white; */
  
  & > :nth-child(1){
    cursor: pointer;
    z-index: inherit;
    &>*{
      & > *{
        fill:${PRIMARY.PRIMARY_HOVER}
      }
    }
  }
`