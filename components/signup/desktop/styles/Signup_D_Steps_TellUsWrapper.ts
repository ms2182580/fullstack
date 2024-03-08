import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const SliderDeclarationsCSS = {
  height: "15px",
  width: "25px",
  buttonSliderColor: "#ae79c3",
}

export const Signup_D_Steps_TellUsWrapper = styled.div`
  margin-inline: 69px;

  margin-bottom: 46px;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 24px;

    flex-wrap: wrap;

    margin-bottom: 24px;

    & > :nth-child(1) {
      & > :nth-child(1) {
        color: #1d1a1e;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      & > :nth-child(2) {
        color: #3a343c;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
      }
    }
    & > :nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;

      ${reusableButton({ secondary: true })};

      padding: 10px 16px;

      &:hover,
      &:focus-visible {
        & > :nth-child(1) {
          & > * {
            fill: ${NEUTRALS.OFF_WHITE};
          }
        }
      }
    }
  }

  & > :nth-child(2) {
    display: grid;
    grid-template-areas:
      "mainCard mySituation mySituation mySituation"
      "mainCard careNeeds culturalConsiderations skills"
      "mainCard likesAndDislikes healthAndMedication aspirations";

    grid-template-columns: minmax(250px, auto) repeat(3, 1fr);

    gap: 16px;

    padding: 16px;
    border-radius: 8px;
    background: #f3f1f3;

    & > :nth-child(1) {
      grid-area: mainCard;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;

      padding: 24px;

      background-color: white;

      & > :nth-child(1) {
        display: flex;
        gap: 14px;

        & > :nth-child(1) {
          position: relative;
          display: flex;
          width: 110px;
          height: 110px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-self: stretch;
          border-radius: 100px;
          background: #f3f1f3;

          & > :nth-child(2) {
            width: 24px;
            height: 24px;
            border-radius: 109px;

            background: #d3ced5;

            position: absolute;
            bottom: 5px;
            right: 5px;

            transition: background-color 0.2s ease-in-out;

            &:hover,
            &:focus-visible {
              filter: drop-shadow(1px 1px 1px hsl(0, 0%, 0%, 0.2));

              background-color: ${PRIMARY.PRIMARY_HOVER};
              & > * {
                & > * {
                  fill: ${NEUTRALS.OFF_WHITE};
                }
              }
            }
          }
        }

        & > :nth-child(2) {
          display: flex;
          flex-direction: column;

          & > :nth-child(1) {
            color: #1d1a1e;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }

          & > :nth-child(2),
          & > :nth-child(3),
          & > :nth-child(4) {
            color: #3a343c;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
            & > :nth-child(1) {
              color: #3a343c;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px;
            }
          }
        }
      }

      & > :nth-child(2) {
        color: #1d1a1e;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 27px;
      }

      & > :nth-child(3) {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        & > * {
          & > :nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: space-between;

            & > :nth-child(1),
            & > :nth-child(2) {
              color: #3a343c;
              text-align: center;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px;
            }
          }
          & > :nth-child(2) {
            width: 100%;
          }
        }
      }
    }

    & > :nth-child(2) {
      grid-area: mySituation;
    }
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: ${SliderDeclarationsCSS.height};
    background: #f3f1f3;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${SliderDeclarationsCSS.width};
    height: ${SliderDeclarationsCSS.height};
    background: ${SliderDeclarationsCSS.buttonSliderColor};
    border-radius: 4px;
  }

  .slider::-moz-range-thumb {
    width: ${SliderDeclarationsCSS.width};
    height: ${SliderDeclarationsCSS.height};
    background: ${SliderDeclarationsCSS.buttonSliderColor};
  }
`
