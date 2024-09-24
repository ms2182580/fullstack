import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Organization_D_Dive_Right_NWrapper = styled.section`
  padding: 80px 0px 80px 96px;
  background-color: rgba(230, 230, 128, 0.2);
  & > :nth-child(1) {
    display: grid;
    gap: 44px;
    position: relative;

    & > :nth-child(1) {
      display: grid;
      gap: 20px;
      & > :nth-child(1) {
        font-size: 20px;
      }
      & > :nth-child(2) {
        font-size: 32px;
        font-weight: 600;
        padding-right: 300px;
      }
    }

    & > :nth-child(2) {
      display: grid;
      grid-template-columns: 1.5fr 0.6fr 0.6fr 0.6fr;
      gap: 16px;
      padding-right: 96px;

      & > :nth-child(1) {
        & > :nth-child(2) {
          position: relative;
          & > :nth-child(1) {
            position: absolute;
            top: 50%;
            left: 16px;
            transform: translate(-50%, -50%);
            & > * {
              fill: black;
            }
          }
          & > :nth-child(2) {
            width: 100%;
            align-self: stretch;
            padding: 12px 30px;
            border-radius: 8px;
            border: 1px solid ${NEUTRALS.DARK_GREY_3};
            ::placeholder {
              color: ${NEUTRALS.DARK_GREY_2};
            }
          }
        }
      }

      & > :nth-child(2) {
        & > :nth-child(2) {
          position: relative;
          & > :nth-child(1) {
            position: absolute;
            top: 50%;
            left: 16px;
            transform: translate(-50%, -50%);
            & > * {
              fill: black;
            }
          }
          & > :nth-child(2) {
            width: 100%;
            align-self: stretch;
            padding: 12px 30px;
            border-radius: 8px;
            border: 1px solid ${NEUTRALS.DARK_GREY_3};
            ::placeholder {
              color: ${NEUTRALS.DARK_GREY_3};
            }
          }
        }
      }

      & > :nth-child(3) {
        & > :nth-child(2) {
          position: relative;
          & > :nth-child(1) {
            position: absolute;
            top: 50%;
            left: 16px;
            transform: translate(-50%, -50%);
            & > * {
              fill: black;
            }
          }
          & > :nth-child(2) {
            width: 100%;
            align-self: stretch;
            padding: 12px 30px;
            border-radius: 8px;
            border: 1px solid ${NEUTRALS.DARK_GREY_3};
            ::placeholder {
              color: ${NEUTRALS.DARK_GREY_2};
            }
          }
        }
      }
      & > :nth-child(4) {
        width: 130px;
        margin-top: auto;
        ${reusableButton({})};
        & > :nth-child(1) {
          & > * {
            fill: white;
          }
        }
      }
    }

    & > :nth-child(3) {
      position: absolute;
      right: 0;
    }
  }
`
