import styled from "styled-components"
import { NEUTRALS } from "../../../../../../../assets/Colors"

export const ST_D_Detail_FAQSWrapper = styled.div`
  background: #fcfdfe;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 55px 133px 32px 72px;

  & > :nth-child(1) {
    display: flex;
    position: relative;
    margin-bottom: 28px;
    & > :nth-child(1) {
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    & > :nth-child(2) {
      width: 100%;
      padding: 10px 10px 10px 60px;

      background: ${NEUTRALS.OFF_WHITE};
      border: 1px solid ${NEUTRALS.BLACK};
      border-radius: 8px;

      &[type="text"]:focus {
        border: 1px solid transparent;
      }
    }
  }
  
  & > :nth-child(2){
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 52px;
    
  }
  
  & > div:not(:nth-child(1)):not(:nth-child(2)){
    margin-bottom: 54px;
    
  }
  
  & > :last-child{
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    
    &:hover{
      filter: brightness(70%);
    }
    
  }
  
  
  
`
