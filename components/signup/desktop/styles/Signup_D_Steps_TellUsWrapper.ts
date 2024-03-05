import { NEUTRALS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

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
      gap: 8px;

      /* font-size: 18px; */

      ${reusableButton({ secondary: true })}
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
    height: 15px;
    background: #f3f1f3;
    outline: none;
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
    width: 25px;
    height: 15px;
    background: #ae79c3;
    cursor: pointer;
    border-radius: 4px;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04aa6d;
    cursor: pointer;
  }
`
export const TellUs_CardsWrapper = styled.article`
  background-color: ${NEUTRALS.OFF_WHITE};
  padding-inline: 16px;
  padding-top: 16px;

  display: flex;
  flex-direction: column;
  padding-bottom: 16px;

  & > :nth-child(1) {
    color: #1d1a1e;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    margin-bottom: 8px;
  }

  & > :nth-child(2) {
    position: relative;

    flex: 1;

    padding-bottom: 38px;

    textarea {
      height: 100%;

      width: 100%;
      border: none;

      resize: none;
    }

    ul {
      position: absolute;
      bottom: 0;
      right: 0;

      display: flex;
      justify-content: flex-end;
      gap: 10px;

      list-style: none;

      li {
        width: 34px;
        height: 34px;
        padding: 5px;
        background-color: #f3f1f3;
        border-radius: 50%;
      }
    }
  }
`
