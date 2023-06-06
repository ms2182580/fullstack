import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const STDetail_Review_Modal_DetailRatingWrapper = styled.div`
  /* border: 2px solid crimson; */

  & > * {
    display: grid;
    grid-template-columns: minmax(270px , 483px) 200px 40px;
    /* display: flex; */
    /* justify-content: space-between; */
    /* flex-direction: column; */
    /* align-items: center; */
    
    
    gap: 8px;

    & > *{
      /* border: 2px solid black !important; */
      margin-bottom: 11px;
    }
    & > :nth-child(1){
      /* border: 2px solid crimson; */
      /* flex-basis: 270px; */
      /* flex-basis: clamp( 270px, 10vw, 483px); */
      /* flex-basis: clamp(483px, 20vw, 270px); */
      /* flex-basis: min(483px); */
      /* flex-grow: 1; */
      
    }
    
    

    & > :nth-child(2) {
      /* border: 2px solid crimson; */
      /* background-color: ; */
      display: flex;
      /* flex-shrink: 99; */
      /* flex-basis: 150px; */
      /* align-items: stretch; */
      /* align-items: center; */
      /* justify-content: center; */
      margin-top: auto;
      margin-bottom: auto;
      
      
      border: 2px solid ${PRIMARY.PRIMARY_HOVER};
      width:100%;
      /* width:200px; */
      /* width:10vw; */
      /* width:250px; */
      height: 11px;
      border-radius: 8px;
      
      & > *{
        /* border: 2px solid orange !important; */
        
      }
      
      

      .STDetail_Review_Modal_DetailRating_Full {
        background-color: ${PRIMARY.PRIMARY_HOVER};
        
        
        /* border: 2px solid crimson; */
        height: 8px;
        width:100%;
        /* border-radius: 8px; */
        
      }
      .STDetail_Review_Modal_DetailRating_Empty {
        /* border: 2px solid green; */
        
        /* background-color: ${NEUTRALS.OFF_WHITE}; */
        height: 8px;
        width:100%;
        
        
        /* border-radius: 8px; */
      }
    }
    
    & > :nth-child(3){
      display: flex;
      align-items: center;
      justify-content: flex-end;
      
      /* border: 2px solid crimson; */
      
      /* flex-basis: 40px;       */
    }
    
  }
`
