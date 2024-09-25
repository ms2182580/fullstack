import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Organization_D_Feature_NWrapper = styled.section`
  background-image: url("/background/background10.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: 80px;
  display: grid;
  padding-top: 53px;
  // padding-bottom: 54px;
  padding-inline: 72px;

  & > :nth-child(1) {
    display: grid;
    gap: 92px;

    & > :nth-child(1) {
      display: grid;
      gap: 20px;
      & > :nth-child(1) {
        font-size: 20px;
      }
      & > :nth-child(2) {
        font-size: 40px;
        font-weight: 600;
      }
    }

    & > :nth-child(2) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-left: 47px;
      padding-right: 40px;
      gap: 19px;

      & > :nth-child(1) {
        display: grid;
        gap: 48px;
        margin-bottom: auto;
        & > :nth-child(1) {
          display: grid;
          gap: 16px;

          & > :nth-child(1) {
            font-size: 18px;
          }
          & > :nth-child(2) {
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 0.48px;
          }
        }

        & > :nth-child(2) {
          display: grid;
          gap: 20px;
          & > :nth-child(1) {
            color: #6e6e6e;
          }
          & > :nth-child(2) {
            display: flex;
            justify-content: space-between;
            & > :nth-child(1),
            & > :nth-child(2) {
              display: grid;
              gap: 16px;
              & > :nth-child(1),
              & > :nth-child(2),
              & > :nth-child(3) {
                display: flex;
                gap: 16px;
                align-items: center;
                & > :nth-child(2) {
                  color: ${NEUTRALS.DARK_GREY_2};
                }
              }
            }
          }
        }
      }
    }
  }
`
