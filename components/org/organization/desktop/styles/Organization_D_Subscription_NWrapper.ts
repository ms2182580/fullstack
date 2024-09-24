import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Organization_D_Subscription_NWrapper = styled.section`
  background-image: url("/background/background11.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: 110px;
  padding-top: 56px;
  padding-bottom: 56px;
  padding-inline: 98px;

  & > :nth-child(1) {
    display: grid;
    gap: 24px;

    & > :nth-child(1) {
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      text-transform: uppercase;
    }

    & > :nth-child(2) {
      font-size: 32px;
      font-weight: 600;
      line-height: 48px;
    }

    & > :nth-child(3) {
      display: flex;
      gap: 15px;
      justify-content: center;
      padding: 16px 0px;

      & > :nth-child(1),
      & > :nth-child(2) {
        background-color: white;
        padding: 48px;
        border: 1px solid ${NEUTRALS.OFF_WHITE_2};
        border-radius: 11px;
        display: grid;
        gap: 32px;
        max-width: 352px;
        justify-content: center;

        & > :nth-child(1) {
          display: grid;
          gap: 32px;
          & > :nth-child(1) {
            width: fit-content;
            position: relative;
            & > :nth-child(1) {
              font-size: 32px;
              font-weight: 600;
              letter-spacing: -0.8px;
              line-height: 44px;
              min-height: 96px;
            }
            & > :nth-child(2) {
              position: absolute;
              right: -40px;
              top: -16px;
              color: ${PRIMARY.PRIMARY_CTA};
              font-weight: 600;
              letter-spacing: -0.8px;
            }
          }
          & > :nth-child(2) {
            color: ${NEUTRALS.DARK_GREY_2};
          }
        }

        & > :nth-child(2) {
          & > :nth-child(1) {
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
            text-align: center;
            & > span {
              color: #908395;
              font-weight: 500;
              line-height: 110%; /* 17.6px */
              letter-spacing: -0.2px;
              font-size: 16px;
            }
          }
          & > :nth-child(2) {
            padding-left: 20px;
            padding-top: 24px;
            text-decoration: line-through;
            color: rgba(108, 108, 108, 0.42);
            font-weight: 600;
          }
        }

        & > :nth-child(3) {
          display: grid;
          gap: 8px;
          margin-bottom: auto;
          & > :nth-child(2) {
            display: grid;
            gap: 15px;
            & > * {
              display: flex;
              align-items: center;
              gap: 8px;
              & > :nth-child(1) {
                width: 24px;
                margin-top: auto;
              }
              & > :nth-child(2) {
                color: ${NEUTRALS.DARK_GREY_2};
              }
            }
          }
        }

        & > :nth-child(4) {
          margin-top: auto;
          max-width: fit-content;
        }
      }

      & > :nth-child(3) {
        opacity: 0.9;
        background-color: white;
        padding: 48px;
        border: 1px solid ${NEUTRALS.OFF_WHITE_2};
        border-radius: 11px;
        display: grid;
        gap: 32px;
        max-width: 352px;
        justify-content: center;

        & > :nth-child(1) {
          display: grid;
          gap: 32px;
          & > :nth-child(1) {
            width: fit-content;
            position: relative;
            & > :nth-child(1) {
              font-size: 32px;
              font-weight: 600;
              letter-spacing: -0.8px;
              line-height: 44px;
              color: ${NEUTRALS.LIGHT_GREY3};
              min-height: 96px;
            }
          }
          & > :nth-child(2) {
            color: ${NEUTRALS.LIGHT_GREY3};
          }
        }

        & > :nth-child(2) {
          & > :nth-child(1) {
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
            text-align: center;
            color: ${NEUTRALS.LIGHT_GREY3};
            & > span {
              color: #908395;
              font-weight: 500;
              line-height: 110%; /* 17.6px */
              letter-spacing: -0.2px;
              font-size: 16px;
            }
          }
          & > :nth-child(2) {
            padding-left: 20px;
            padding-top: 24px;
            text-decoration: line-through;
            color: rgba(108, 108, 108, 0.42);
            font-weight: 600;
          }
        }

        & > :nth-child(3) {
          display: grid;
          gap: 8px;
          margin-bottom: auto;
          & > :nth-child(1) {
            color: ${NEUTRALS.LIGHT_GREY3};
          }
          & > :nth-child(2) {
            display: grid;
            gap: 15px;
            & > * {
              display: flex;
              align-items: center;
              gap: 8px;
              & > :nth-child(1) {
                width: 24px;
                margin-top: auto;
              }
              & > * {
                & > * {
                  fill: ${NEUTRALS.LIGHT_GREY3};
                }
              }
              & > :nth-child(2) {
                color: ${NEUTRALS.LIGHT_GREY3};
              }
            }
          }
        }
        & > :nth-child(4) {
          margin-top: auto;
          max-width: fit-content;
          background-color: ${NEUTRALS.LIGHT_GREY3};
        }
      }
    }
    & > :nth-child(4) {
      color: ${NEUTRALS.DARK_GREY_2};
    }
  }
`
