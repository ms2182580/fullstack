import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const enum PCMPS_General_D_Booking_CLASS {
  IS_DISABLED = "IS_DISABLED",
}

export const PCMPS_General_D_BookingWrapper = styled.aside`
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

  padding-bottom: 24px;

  display: grid;

  & > :nth-child(1) {
    padding: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    border-radius: 8px 8px 0 0;
    margin-bottom: 32px;
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: clamp(32px, 8vw, 106px);
    margin-bottom: 38px;

    & > * {
      display: flex;
      align-items: center;
      gap: 8px;

      & > :nth-child(2) {
        display: flex;
        align-items: inherit;
        gap: 12px;

        padding: 8px 24px;
        background-color: ${NEUTRALS.OFF_WHITE};
        border-radius: 8px;
        border: 2px solid ${NEUTRALS.BLACK};

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.28px;

        cursor: pointer;

        & > :nth-child(1) {
          & > * {
            fill: ${NEUTRALS.BLACK};
          }
        }
      }
    }
  }

  & > :nth-child(3) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-inline: 24px;
    margin-bottom: 6px;

    & > :nth-child(1),
    & > :nth-child(3) {
      padding: 4px;
      display: flex;
      align-items: center;

      cursor: pointer;
    }
  }

  & > :nth-child(4) {
    display: grid;

    margin-inline: clamp(32px, 8vw, 106px);

    margin-bottom: 48px;

    & > * {
      list-style: none;

      display: grid;
      grid-template-columns: repeat(7, 1fr);
      justify-items: center;
      gap: 24px;
    }

    & > :nth-child(1) {
      text-transform: capitalize;
      margin-bottom: 19px;
    }

    & > :nth-child(2) {
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.32px;

      & > * {
        width: 100%;
        text-align: center;

        padding: 8px 16px;
        border-radius: 8px;

        background-color: ${PRIMARY.PRIMARY_CTA};
        color: ${NEUTRALS.OFF_WHITE};

        cursor: pointer;

        &:hover,
        &:focus-visible {
          background-color: ${PRIMARY.PRIMARY_HOVER};
        }
      }

      .${PCMPS_General_D_Booking_CLASS.IS_DISABLED} {
        background-color: ${NEUTRALS.LIGHT_GREY};
        color: ${NEUTRALS.DARK_GREY};

        cursor: default;
      }
    }
  }

  & > :nth-child(5) {
    justify-self: flex-end;

    margin-right: clamp(32px, 8vw, 106px);
    padding: 16px 64px;

    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.3px;

    color: ${NEUTRALS.DARK_GREY};

    border-radius: 8px;

    background-color: ${NEUTRALS.LIGHT_GREY};
    border: none;

    /* margin-left: auto; */
    /* width: 100%; */
  }
`
