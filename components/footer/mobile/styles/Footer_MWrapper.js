import styled from 'styled-components'
import { PRIMARY } from '../../../../assets/Colors'

export const Footer_MWrapper = styled.div`
  border-top:4px solid ${PRIMARY.PRIMARY_HOVER};
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  
  padding: clamp(16px, calc(10vw - 80px), 96px);
  
  
  & > :nth-child(1){
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap:16px;
    flex-wrap: wrap;
    text-wrap: balance;
    margin-bottom: 16px;
  }
  
  & > :nth-child(2){
    display: flex;
    align-items: center;
    gap:16px;
    
    flex-wrap: wrap;
    
    & > :nth-child(2){
      width:100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap:24px;
      
      flex-wrap: wrap;
      
      & > :nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        
      }
      
      & > :nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        gap:24px;
        
        cursor: pointer;
        
        & > *{
          & > *{
            fill:black;
          }
          
        }
        
        
      }
      
      
      
      
      
    }
    
    

  }
  
  
  /* & > *:not(:last-child) {
    padding-inline: clamp(16px, calc(10vw - 80px), 96px);
  } */
  
`