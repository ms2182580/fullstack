import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const Signup_D_Steps_TellUs_CardsWrapper = styled.article`
  background-color: ${NEUTRALS.OFF_WHITE};
  padding-inline: 16px;
  padding-top: 16px;

  display: flex;
  flex-direction: column;
  padding-bottom: 16px;

  & > p {
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

        position: relative;
        & > :nth-child(1) {
          & > :nth-child(2) {
            position: absolute;
            bottom: 132%;
            right: -15%;

            width: max-content;
            padding: 12px;
            border-radius: 4px;

            background-color: ${NEUTRALS.DARK_GREY_2};

            color: ${NEUTRALS.OFF_WHITE};

            & > * {
              color: ${NEUTRALS.OFF_WHITE_2};
              font-size: 12px;
            }

            & > p:nth-of-type(1) {
              font-weight: 600;
            }

            & > p:nth-of-type(2) {
              line-height: 20px;
            }

            &:after {
              content: "";
              position: absolute;
              top: 100%;
              right: 10%;

              border: 8px solid ${NEUTRALS.DARK_GREY_2};
              border-color: ${NEUTRALS.DARK_GREY_2} transparent transparent
                transparent;
            }
          }
        }
      }
    }
  }
`
