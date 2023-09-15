import styled from "styled-components"
import { PRIMARY } from "../../../../../../../../../assets/Colors"

export const CC_D_Detail_Review_Modal_DetailRatingWrapper = styled.div`
  & > * {
    display: grid;
    grid-template-columns: minmax(270px , 483px) 200px 40px;
    gap: 8px;
    
    & > *{
      margin-bottom: 11px;
    }

    & > :nth-child(2) {
      display: flex;
      margin-top: auto;
      margin-bottom: auto;
      border: 2px solid ${PRIMARY.PRIMARY_HOVER};
      width:100%;
      height: 11px;
      border-radius: 8px;
      
      .STDetail_Review_Modal_DetailRating_Full {
        background-color: ${PRIMARY.PRIMARY_HOVER};
        height: 8px;
        width:100%;
        
      }
      .STDetail_Review_Modal_DetailRating_Empty {
        height: 8px;
        width:100%;
      }
    }
    
    & > :nth-child(3){
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    
  }
`
