import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../../../assets/Colors"

export const AT_D_Results_CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "leftPart rightPart"
  "bottomButtons bottomButtons"
  ;
  grid-template-rows: auto;
  align-items: stretch;
  border-radius: 8px;
  /* border: 1px solid ${NEUTRALS.LIGHT_GREY}; */
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.20);


  
  & > .LEFT-PART {
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    grid-area: leftPart;

    display: flex;
    flex-direction: column;

    padding: 24px;

    border-top-left-radius: inherit;

    & > :nth-child(1) {
      /* border: 2px solid crimson; */

      position: relative;
      /* border-top-left-radius: 8px; */
      background-color: white;

      padding-inline: 20%;
      overflow: hidden;

      border-radius: 16px;

      /* height: 20%; */

      margin-bottom: 28px;

      & > :nth-child(1) {
        /* height: 100%; */
      }

      & > :nth-child(2) {
        position: absolute;
        top: 1rem;
        left: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 24px;

      & > * {
        display: grid;
        grid-template-columns: 33px 1fr;
        gap: 8px;

        & > :nth-child(1) {
          justify-self: center;
        }

        & > :nth-child(2) {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  & > .RIGHT-PART {
    grid-area: rightPart;
    border-top-right-radius: inherit;
    
    

    padding: 24px;

    & > :nth-child(1),
    & > :nth-child(2) {
      margin-bottom: 8px;
    }

    & > :nth-child(3) {
      margin-bottom: 29px;
    }

    & > *:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(:last-child) {
      margin-bottom: 16px;
      
    }

    & > p {
      & > * {
        color: ${NEUTRALS.BLACK};
        font-weight: 400;
      }
    }
  }
  
  & > .BOTTOM-BUTTONS{
    grid-area: bottomButtons;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    
    background-color: ${PRIMARY.PRIMARY_CTA};
    color: ${NEUTRALS.OFF_WHITE};
    
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    
    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap:8px;
      
      cursor: pointer;
      
    }
    
  }
`
