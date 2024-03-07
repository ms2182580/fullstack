import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const Signup_D_Steps_DemographyWrapper = styled.div`
  padding: 0px 80px;
  margin-bottom: 190px;

  & > :nth-child(1) {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  & > :nth-child(2) {
    margin-bottom: 24px;
  }

  form {
    display: grid;
    gap: 16px;

    max-width: 550px;

    & > * {
      input {
        height: 48px;
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid #908395;
        background: white;
      }
    }

    & > *:not(:last-child) {
      display: flex;
      flex-direction: column;
    }

    & > label:nth-of-type(2) {
      position: relative;

      & > :nth-child(2) {
        position: absolute;
        right: 0;
        top: 0;

        & > :nth-child(2) {
          position: absolute;
          bottom: 132%;
          right: -94%;

          width: 280px;
          padding: 12px;
          border-radius: 4px;

          background-color: ${NEUTRALS.DARK_GREY_2};

          & > * {
            color: ${NEUTRALS.OFF_WHITE_2};
            font-size: 12px;
          }

          & > p:nth-of-type(1) {
            font-weight: 600;
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

    & > :last-child {
      display: flex;
      gap: 16px;

      & > * {
        input,
        & > div {
          /* border: 2px solid crimson; */
          /* height: 48px; */
        }
      }

      & > :nth-child(1) {
        width: 100%;

        /* border: 2px solid crimson; */
      }

      & > :nth-child(2) {
        /* border: 2px solid green; */
        /* align-items: flex-end; */

        margin: auto;
        input {
          /* border: 2px solid crimson; */

          /* height: 60px; */
          /* height: 100%; */
        }
      }
    }
  }
`
