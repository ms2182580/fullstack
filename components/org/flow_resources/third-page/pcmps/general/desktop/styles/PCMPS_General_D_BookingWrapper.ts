import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"
import { ElementActiveHeight_KEYS } from "../PCMPS_General_D_Booking"

export const enum PCMPS_General_D_Booking_CLASS {
  IS_DISABLED = "IS_DISABLED",
  IS_SELECTED = "IS_SELECTED",
  THE_MODAL = "THE_MODAL",
  IS_LEFT = "IS_LEFT",
  IS_RIGHT = "IS_RIGHT",
}

type Props = {
  distanceModal?: {}
  shouldShowMoldal?: boolean
}

const VARS = {
  padding: "32px",
}

export const PCMPS_General_D_BookingWrapper = styled.section<Props>`
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

  padding-bottom: 24px;

  display: flex;
  flex-direction: column;

  & > :nth-child(1) {
    padding: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    border-radius: 8px 8px 0 0;
    margin-bottom: 32px;
  }

  & > :nth-child(2) {
    display: grid;
    row-gap: 16px;
    padding-inline: ${VARS.padding};

    & > * {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      gap: 8px;

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        gap: 12px;

        width: fit-content;

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
    margin-top: 38px;

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

    padding-inline: ${VARS.padding};

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

      position: relative;

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

      .${PCMPS_General_D_Booking_CLASS.IS_SELECTED} {
        background-color: ${PRIMARY.PRIMARY_HOVER};
      }

      .${PCMPS_General_D_Booking_CLASS.THE_MODAL} {
        border: 2px solid ${NEUTRALS.BLACK};
        background-color: ${NEUTRALS.OFF_WHITE};
        color: ${NEUTRALS.BLACK};

        padding-top: 18px;
        padding-bottom: 18px;

        cursor: default;

        position: absolute;

        top: ${(x: any) =>
          x.distanceModal !== null &&
          `calc(${
            x.distanceModal[ElementActiveHeight_KEYS.DISTANCE_FROM_TOP]
          }px + ${
            x.distanceModal[ElementActiveHeight_KEYS.HEIGHT_OF_ELEMENT]
          }px + 24px)`};

        visibility: ${({ distanceModal, shouldShowMoldal }) =>
          distanceModal !== null && shouldShowMoldal ? "visible" : "hidden"};

        width: calc(100% + (${VARS.padding} * 2));
        left: -${VARS.padding};

        display: grid;
        gap: 18px;

        & > :nth-child(1) {
          display: flex;
          justify-content: space-between;

          & > :nth-child(1) {
            color: ${PRIMARY.PRIMARY_HOVER};
            font-weight: 700;
          }

          & > :nth-child(2) {
            display: flex;
            align-items: center;
            gap: 25px;

            & > :nth-child(1) {
              font-weight: 500;
            }

            & > :nth-child(2) {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2px;

              cursor: pointer;

              & > * {
                & > * {
                  fill: ${NEUTRALS.BLACK};
                }
              }
            }
          }
        }

        & > :nth-child(2) {
          list-style: none;

          li {
            display: grid;
            align-items: center;
            font-size: 20px;

            gap: 16px;
            grid-template-columns: auto 1fr;

            & > :nth-child(2) {
              justify-self: flex-start;
              font-weight: 500;
            }
          }
        }

        & > :nth-child(3) {
          list-style: none;

          display: grid;
          grid-template-columns: auto repeat(2, 1fr);

          column-gap: 8px;
          row-gap: 8px;

          grid-template-areas:
            "title IS_LEFT_0 IS_RIGHT_4"
            "title IS_LEFT_1 IS_RIGHT_5"
            "title IS_LEFT_2 IS_RIGHT_6"
            "title IS_LEFT_3 IS_RIGHT_7";

          & > * {
            font-size: 20px;
          }

          & > :nth-child(1) {
            grid-area: title;
          }

          & > *:not(:first-child) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-auto-flow: column;

            gap: 8px;

            & > * {
              white-space: nowrap;
            }

            & > :nth-child(2) {
              font-weight: 500;
            }
          }
        }
      }
    }
  }

  & > :last-child {
    justify-self: flex-end;

    margin-right: ${VARS.padding};
    margin-left: auto;
    padding: 16px 64px;

    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.3px;

    color: ${NEUTRALS.DARK_GREY};

    border-radius: 8px;

    background-color: ${NEUTRALS.LIGHT_GREY};
    border: none;
  }
`

export type LI_Booking_Props = {
  isIndex?: number
}

export const LI_Booking = styled.li<LI_Booking_Props>`
  &.${PCMPS_General_D_Booking_CLASS.IS_LEFT}_${({ isIndex }) => isIndex} {
    grid-area: ${({ isIndex }) =>
      `${PCMPS_General_D_Booking_CLASS.IS_LEFT}_${isIndex}`};
  }

  &.${PCMPS_General_D_Booking_CLASS.IS_RIGHT} {
  }
`
