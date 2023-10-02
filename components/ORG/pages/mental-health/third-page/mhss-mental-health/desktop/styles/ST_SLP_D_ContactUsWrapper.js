import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../../../assets/Colors"

export const ST_SLP_D_ContactUsWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

  padding-bottom: 52px;

  & > *:not(:first-child) {
    margin-inline: 24px;
  }

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  & > :nth-child(1) {
    padding-inline: 24px;
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  & > :nth-child(3),
  & > :nth-child(4) {
    display: flex;
    justify-content: space-between;

    column-gap: 32px;

    & > * {
      width: 100%;

      & > :nth-child(1) {
        font-size: 20px;
        font-weight: 600;

        span {
          font-size: 16px;
        }
      }

      & > :nth-child(2) {
        width: 100%;

        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 24px;
        padding-right: 24px;

        border-radius: 8px;
        border: 1px solid ${NEUTRALS.BLACK};
      }
    }
  }

  & > :nth-child(5),
  & > :nth-child(6) {
    & > :nth-child(1) {
      font-size: 20px;
      font-weight: 600;
    }
  }

  & > :nth-child(5) {
    & > :nth-child(2) {
      border-radius: 8px;
      border: 1px solid ${NEUTRALS.BLACK};
      padding-top: 19px;
      padding-bottom: 33px;
      padding-left: 17px;

      margin-right: 22%;

      display: flex;
      flex-wrap: wrap;
      row-gap: 16px;
      column-gap: 18px;

      & > * {
        border-radius: 8px;
        background-color: ${NEUTRALS.LIGHT_GREY};
        padding: 5px 10px;
        color: ${NEUTRALS.DARK_GREY};

        cursor: not-allowed;
      }
    }
  }

  & > :nth-child(6) {
    & > :nth-child(2) {
      resize: none;

      width: 100%;

      border-radius: 8px;
      border: 1px solid ${NEUTRALS.BLACK};

      padding-top: 17px;
      padding-bottom: 25px;
      padding-left: 20px;
      padding-right: 20px;
    }
    & > :nth-child(3) {
      display: flex;
      justify-content: flex-end;
      margin-right: 8px;
      margin-top: 8px;

      color: ${NEUTRALS.DARK_GREY};
    }
  }

  & > :last-child {
    display: flex;
    gap: 46px;

    & > :nth-child(1) {
      border: 2px solid ${NEUTRALS.LIGHT_GREY};
      
      padding-top: 8px;
      padding-bottom: 8px;
      padding-inline: 48px;
      border-radius: 8px;
      
      display: flex;
      align-items: center;
      justify-content: center;
      
      gap: 8px;
      
      color: ${NEUTRALS.LIGHT_GREY};
      
      background-color: ${NEUTRALS.OFF_WHITE};
      
      cursor: not-allowed;
      
      

      
    }
  }
`
