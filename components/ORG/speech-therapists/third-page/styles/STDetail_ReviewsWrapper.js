import styled from "styled-components"
import { NEUTRALS, PRIMARY, SEMANTICS } from "../../../../../assets/Colors"
import { device } from "../../../../../assets/screenSizes/ScreenSizes"

export const STDetail_ReviewsWrapper = styled.div`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 32px 32px 40px 32px;
  display: grid;
  scroll-margin-top: 50px;

  /* .STDetail_ReviewsHeaderDesktop {
    & > :nth-child(2) {
      & > :nth-child(1) {
        font-weight: 600;
        color: ${SEMANTICS.HYPERLINK_NORMAL};
        text-decoration: underline;
        cursor: pointer;
      }
    }

    & > :nth-child(3) {
      margin-top: 8px;
    }
  } */

  /* .STDetail_ReviewsHeaderDesktop_PeopleOftenMention {
    & > :nth-child(1) {
      margin-bottom: 11px;
    }

    & > :nth-child(2) {
      display: flex;
      justify-content: space-between;

      & > :nth-child(1) {
        display: flex;
        gap: 16px;

        & > * {
          border: 1px solid #686868;
          padding: 4px 11px;
          border-radius: 8px;
          cursor: pointer;
          background-color: ${NEUTRALS.OFF_WHITE};
          display: flex;
          align-items: center;

          &:hover {
            filter: brightness(98%);
          }
        }
      }
      & > :nth-child(2) {
        border: solid 2px ${PRIMARY.PRIMARY_CTA};
        padding: 4px 20px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        cursor: pointer;
      }
    }

    & > :last-child {
      margin-top: 32px;
      border: 1px solid hsl(0, 0%, 88.8%);
    }
  } */

  & > :nth-child(2){
    margin-top: 32px;
    border: 1px solid hsl(0, 0%, 88.6%);
    
  }
  
  & > :nth-child(4) {
    margin-left: auto;
    margin-top: 24px;
    margin-right: 16px;
    text-decoration: underline;
    cursor: pointer;
    
    &:hover{
      filter: brightness(120%);
    }
    
  }

  @media (${device.laptop}) {
    padding: 16px;
    border-radius: 0px;

    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
    }

    & > :last-child {
      margin-top: 16px;
    }
  }
`
