import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const Signup_D_Steps_SituationWrapper = styled.div`
  padding: 0px 80px;

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
    label {
      display: flex;
      flex-direction: column;

      input {
        width: 100%;
      }
    }

    & > label:nth-of-type(2) {
      position: relative;

      & > :nth-child(2) {
        position: absolute;
        top: 0;
        right: 0;

        & > :nth-child(2) {
          position: absolute;
          bottom: 132%;
          right: -94%;

          width: 300px;
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

    & > :nth-child(1),
    & > :nth-child(2) {
      max-width: 534px;
    }

    & > :nth-child(1) {
      margin-bottom: 16px;
    }

    & > :nth-child(2) {
      margin-bottom: 48px;
    }

    & > :nth-child(3),
    & > :nth-child(4) {
      max-width: 634px;
    }

    & > :nth-child(3) {
      position: relative;
      display: flex;
      flex-direction: column;

      font-size: 28px;

      margin-bottom: 24px;

      & > :nth-child(2) {
        position: absolute;
        top: 0px;
        left: 510px;
        z-index: 1;
      }
    }

    & > :nth-child(4) {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      margin-bottom: 80px;
    }
  }
`
type SituationProps = {
  isSelected: boolean
}
export const SituationSpanWrapper = styled.li<SituationProps>`
  display: flex;
  height: 48px;
  min-width: 130px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  border: 1px solid ${PRIMARY.PRIMARY_CTA};
  background: ${(props) =>
    props.isSelected ? `${PRIMARY.PRIMARY_CTA}` : `${NEUTRALS.OFF_WHITE}`};
  color: ${(props) =>
    props.isSelected ? `${NEUTRALS.OFF_WHITE}` : `${PRIMARY.PRIMARY_CTA}`};

  cursor: default;

  &:hover,
  &:focus-visible {
    filter: drop-shadow(1px 2px 5px hsla(0, 0%, 0%, 0.2));
    border-radius: 100px;
  }
`
