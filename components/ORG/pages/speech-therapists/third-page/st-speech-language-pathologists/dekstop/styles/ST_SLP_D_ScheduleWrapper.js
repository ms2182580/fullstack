import styled from "styled-components"
import { NEUTRALS, SECONDARY_ORG_PLUS } from "../../../../../../../../assets/Colors"

export const ST_SLP_D_ScheduleWrapper = styled.div`
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  position: relative;

  padding-bottom: 24px;

  &:before{
    content: "";
    position: absolute;
    inset:0;
    background-color: hsla(0, 0%, 100%, 0.5);
    z-index: 1;
    border-radius: 8px;
  }

  & > :not(:first-child) {
    padding-inline: clamp(24px, 10vw - 48px, 106px);
  }

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 24px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background-color: ${NEUTRALS.LIGHT_GREY};

    margin-bottom: 24px;

    & > :nth-child(1) {
      display: flex;
      gap: 24px;

      & > :nth-child(2) {
        background-color: ${SECONDARY_ORG_PLUS.YELLOW};
        border-radius: 8px;
        padding-inline: 8px;
        padding-top: 4px;
        padding-bottom: 4px;

        position: relative;
        z-index: 2;
      }
    }
    & > :nth-child(2) {
      background-color: ${NEUTRALS.OFF_WHITE};
    }
  }

  & > :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 35px;

    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      h4 {
        color: ${NEUTRALS.DARK_GREY};
      }

      & > :nth-child(2) {
        /* padding-inline: 48px; */
        padding-inline: clamp(34px, 10vw - 80px, 48px);

        border: 2px solid ${NEUTRALS.DARK_GREY};

        & > * {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;

          color: ${NEUTRALS.DARK_GREY};
        }
      }
    }
  }

  & > :nth-child(3) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    
    column-gap: 24px;

    margin-bottom: 48px;

    & > :not(:first-child):not(:last-child) {
      display: flex;
      align-items: center;
      flex-direction: column;

      & > :nth-child(1),
      & > :nth-child(2) {
        text-align: center;
        color: ${NEUTRALS.DARK_GREY};
      }

      & > :nth-child(1) {
        margin-bottom: 4px;
      }

      & > :not(:nth-child(1)):not(:last-child) {
        margin-bottom: 24px;
      }

      & > :not(:first-child):not(:nth-child(2)) {
        width: 100%;
      }
    }

    & > :nth-child(1),
    & > :last-child {
      & > * {
        fill: ${NEUTRALS.DARK_GREY};
      }
    }

    & > :nth-child(1) {
      position: absolute;
      left: 24px;
    }

    & > :nth-child(3) {
      & > :nth-child(3) {
        height: 100%;
      }
    }

    & > :last-child {
      position: absolute;
      right: 24px;
    }
  }

  & > :last-child {
    margin-left: auto;
    margin-right: clamp(24px, 10vw - 48px, 106px);
  }
`
