import styled from "styled-components"
import { device } from "../../../../assets/screenSizes/ScreenSizes"

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-bottom: ${(x) => (x.landingHere === "true" ? "17.5rem" : "2.5rem")};

  & > * {
    margin-right: 3.625rem;
  }
  
  @media (${device.laptop}) {
    flex-direction: column;
    margin: auto;
  }
  

  //!FH FIX THIS MESS: THIS TYPE OF MEDIA QUERY (write inside a string) SHOULD BE DIFFERENT. FOUND ANOTHER WAY
  & {
    ${(x) =>
      x.landingHere === "true"
        ? `
    @media (max-width: 1149px) {
      justify-content: center;

      & > * {
        margin-bottom: 1.625rem;
      }
    }
    
    @media (max-width: 801px){
      
      & > * {
        margin-right: 0.5rem;
      }
    }
    
    @media (max-width:701px){
       & > * {
        // outline: crimson 2px solid;
        width:80%;
        
        margin-right:auto;
        margin-left:auto;
        
        text-align:center;
        display:flex;
        justify-content: center;
        align-items: center;
        
       }
       
       
       & > div {
        display:flex;
        justify-content:center;
        // outline: hsl(180, 50%, 45.1%) 2px solid;
       }
       
       & > div > div:nth-child(1)  {
        // outline: hsl(100, 50%, 45.1%) 2px solid;
        width:10%;
       }
       
       & > div > span   {
        // outline: hsl(100, 50%, 45.1%) 2px solid;
        // text-align:center;
        width:80%;
       }
       & > div > span > *  {
        // border: hsl(20, 50%, 45.1%) 2px solid;
        width:80%;
       }
       
       & > div > span > p {
        text-align: left;
        margin-left:15%;
       }
    }
    
    @media (max-width:563px){
     
       & > *{
        width:100%;
       }
    }
    
    
    
    `
        : ` @media (max-width: 1245px) {
      justify-content: center;


      & > * {
        margin-bottom: 1.625rem;
      }
    }
    
    @media (max-width: 897px){
      &> * {
        width:80%;
        
        margin-right:auto;
        margin-left:auto;
        
        text-align:center;
        display:flex;
        justify-content: center;
        align-items: center;
        
       }
       
       
       & > div {
        display:flex;
        justify-content:center;
       }
       
       & > div > div:nth-child(1)  {
        width:10%;
       }
       
       & > div > span   {
        width:80%;
       }
       & > div > span > *  {
        width:80%;
       }
       
       & > div > span > p {
        text-align: left;
        margin-left:15%;
       }
    }
    
    @media (max-width:659px){
      
      &{
        // outline:2px purple solid;  
      }
     
     & > *{
      width:100%;
     }
  }
    
    
    `}
  }
`
