import styled from "styled-components"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"

export const Splash_Development_DWrapper = styled.div`
  display: grid;
  padding-top: 77px;


  & > :nth-child(1) {
    position: relative;

    & > :nth-child(1) {
      display: grid;
      gap: 16px;
      padding-inline: 160px;
 
      & > :nth-child(1) {
        padding-inline: 45px;

        & > :nth-child(1) {
          font-size: 56px;
          font-weight: 700;
          line-height: 84px;
        }
        & > p {
          ${Paragraph({ color: "dark_gray_2" })};
        } 
      }
      
      & > :nth-child(2) {
        border-radius: 8px;
        border: 1px solid ${NEUTRALS.BORDER};
        padding: 16px 56px;
        margin-top: 32px;

        & > :nth-child(1) {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 0.8fr auto;
          gap: 16px;

          & > :nth-child(1) {
            display: grid;
            gap: 4px;
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
            display: grid;
            gap: 4px;
            & > :nth-child(2) {
              position: relative;
              & > :nth-child(1) {
                position: absolute;
                top: 50%;
                left: 20px;
                transform: translate(-50%, -50%);
                & > * {
                  fill: black;
                }
              }

              & > :nth-child(2) {
                width: 100%;
                align-self: stretch;
                padding: 12px 34px;
                border-radius: 8px;
                border: 1px solid ${NEUTRALS.DARK_GREY_3};
                ::placeholder {
                  color: ${NEUTRALS.DARK_GREY_3};
                }
              }
            }
          }

          & > :nth-child(3) {
            display: grid;
            gap: 4px;
            & > :nth-child(2) {
              position: relative;
              & > :nth-child(1) {
                position: absolute;
                top: 50%;
                left: 20px;
                transform: translate(-50%, -50%);
                & > * {
                  fill: black;
                }
              }
              
              & > :nth-child(2) {
                width: 100%;
                align-self: stretch;
                padding: 12px 34px;
                border-radius: 8px;
                border: 1px solid ${NEUTRALS.DARK_GREY_3};
                ::placeholder {
                  color: ${NEUTRALS.DARK_GREY_2};
                }
              }      
            }
          }

          & > :nth-child(4) {
            width: 60px;
            margin-top: auto;
            ${reusableButton()};
            padding-top: 12px;
            padding-bottom: 12px;
            padding-inline: 0px;
            background-color: ${NEUTRALS.BORDER};
            & > :nth-child(1) {
              & > * {
                fill: white;
              }
            }
          }
        }
      }
    }  
    & > :nth-child(2) {
      margin-top: -270px;
    }  
  }
`
