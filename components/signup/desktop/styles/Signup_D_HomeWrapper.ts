import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"
import { passwordStrength_Keys } from "../INDEX_D_Signup_Home"

type Props = {
  passwordStrength: string
}
export const Signup_D_HomeWrapper = styled.div<Props>`
  margin-top: 40px;
  margin-bottom: 54px;

  display: grid;
  justify-content: center;

  label {
    input {
      height: 48px;
      padding: 12px 36px 12px 16px;

      border-radius: 8px;
      border: 1px solid #908395;

      width: 100%;

      font-size: 16px;
    }
  }

  a {
    color: ${SEMANTICS.HYPERLINK_NORMAL};

    &:visited {
      color: ${SEMANTICS.HYPERLINK_VISITED};
    }
  }

  form {
    margin-top: 20px;

    width: 535px;

    display: grid;

    & > *:not(:last-child):not(:nth-last-child(2)):not(:nth-last-child(3)) {
      margin-bottom: 16px;
    }

    & > :nth-child(4) {
      & > :nth-child(3) {
        position: relative;

        & > :nth-child(2) {
          position: absolute;
          right: -400%;
          bottom: 140%;

          width: 310px;
          border-radius: 4px;

          background-color: ${NEUTRALS.DARK_GREY_2};

          padding: 12px;

          filter: drop-shadow(1px 3px 8px rgba(0, 0, 0, 0.2));

          & > * {
            color: ${NEUTRALS.OFF_WHITE_2};
            font-size: 12px;
          }

          p {
            font-weight: 600;
          }

          ul {
            padding-left: 24px;

            display: grid;
            gap: 4px;
          }

          &:after {
            content: "";
            position: absolute;
            top: 100%;
            right: 33.4%;

            border: 8px solid ${NEUTRALS.DARK_GREY_2};
            border-color: ${NEUTRALS.DARK_GREY_2} transparent transparent
              transparent;
          }
        }
      }
    }

    & > :nth-child(4),
    & > :nth-child(5) {
      position: relative;

      & > :nth-child(2) {
        position: absolute;
        top: 38px;
        right: 10px;
        & > :nth-child(1) {
          cursor: pointer;
        }
      }
      & > :nth-child(3) {
        position: absolute;
        top: 0px;
        right: 0px;
      }
      & > :nth-child(4) {
        margin-top: 10px;
        display: flex;
        background-color: ${({ passwordStrength }) =>
          passwordStrength === passwordStrength_Keys["Very Weak"]
            ? "#B13A3A"
            : passwordStrength === passwordStrength_Keys["Weak"]
            ? "#E3ABAB"
            : passwordStrength === passwordStrength_Keys["Strong"]
            ? "#C2FFBD"
            : "#0EB100"};

        height: 8px;
        width: ${({ passwordStrength }) =>
          passwordStrength === passwordStrength_Keys["Very Weak"]
            ? "25%"
            : passwordStrength === passwordStrength_Keys["Weak"]
            ? "50%"
            : passwordStrength === passwordStrength_Keys["Strong"]
            ? "75%"
            : "100%"};
      }
      & > :nth-child(5) {
        color: #3a343c;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 27px;
      }
    }

    & > :nth-child(5) {
      margin-bottom: 24px;
    }

    & > :nth-child(6) {
      margin-bottom: 40px;
      display: flex;
      gap: 10px;

      & > :nth-child(1) {
        width: 24px;
        height: 24px;
      }
    }

    & > :nth-child(7) {
      width: 100%;
      margin-bottom: 8px;

      cursor: pointer;

      ${reusableButton({})};
    }
  }

  & > :nth-child(3) {
    & > :nth-child(1) {
      display: flex;
      justify-content: center;
      & > :nth-child(1) {
        margin-left: 5px;
      }
    }
    & > :nth-child(2) {
      margin-top: 32px;
      margin-bottom: 32px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 15px;

      & > :nth-child(1) {
        height: 2px;
        width: 100%;
        background: #f5f5f5;
      }
      & > :nth-child(3) {
        height: 2px;
        width: 100%;
        background: #f5f5f5;
      }
    }
  }

  & > :nth-child(4) {
    margin-bottom: 12px;
  }

  & > :nth-child(4),
  & > :nth-child(5) {
    & > :nth-child(1) {
      display: flex;
      gap: 8px;
    }
  }
`

export const Input = styled.input`
  position: relative;
  display: flex;
  height: 48px;
  padding: 12px 36px 12px 16px;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #908395;
  background: white;

  width: 535px;
`
