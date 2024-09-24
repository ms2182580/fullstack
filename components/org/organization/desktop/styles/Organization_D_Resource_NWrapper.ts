import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Organization_D_Resource_NWrapper = styled.div`
  background-image: url("/background/background9.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding-bottom: 20px;
  margin-top: 62px;
  padding-inline: 72px;
  display: grid;

  & > :nth-child(1) {
    padding-top: 70px;
    display: grid;
    gap: 80px;

    p {
      font-size: 20px;
      text-transform: uppercase;
    }
    & > :nth-child(1) {
      display: grid;
      gap: 20px;
      & > :nth-child(2) {
        width: 100%;
        font-size: 40px;
        line-height: normal;
        font-weight: 600;
      }
    }

    & > :nth-child(2) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 48px;
      margin-inline: auto;

      & > :nth-child(1),
      & > :nth-child(2),
      & > :nth-child(3) {
        background-color: white;
        padding: 32px;
        border-radius: 10px;
        max-width: 342px;
        display: grid;
        // gap: 24px;
        border: 1.6px solid ${NEUTRALS.OFF_WHITE_2};
        min-height: 299px;

        & > :nth-child(2) {
          display: grid;
          gap: 8px;
          & > :nth-child(2) {
            font-size: 16px;
            color: ${NEUTRALS.DARK_GREY_2};
          }
        }
      }
    }

    & > :nth-child(3) {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1.3fr 0.7fr;

      & > :nth-child(1) {
        padding: 48px;
        background-color: white;
        & > :nth-child(1) {
          padding-top: 32px;
        }
        & > :nth-child(2) {
          padding-top: 20px;
          font-size: 32px;
          font-weight: 600;
        }

        & > :nth-child(3) {
          padding-top: 16px;
          & > :nth-child(1) {
            color: ${NEUTRALS.DARK_GREY_2};
          }
          & > :nth-child(2) {
            display: flex;
            gap: 24px;

            & > :nth-child(1) {
              width: 100%;
              align-self: stretch;
              padding: 12px 16px;
              border-radius: 8px;
              border: 1px solid ${PRIMARY.LIGHT_MAROON};
              ::placeholder {
                font-size: 16px;
                color: ${NEUTRALS.DARK_GREY_3};
              }
            }
            & > :nth-child(2) {
              width: 130px;
              ${reusableButton({})};
            }
          }
        }
      }
    }
  }
`
