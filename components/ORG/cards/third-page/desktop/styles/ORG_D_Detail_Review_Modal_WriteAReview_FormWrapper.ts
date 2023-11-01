import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const enum ORG_D_Detail_Review_Modal_WriteAReview_FormWrapper_CLASSES {
  CAN_SUBMIT = "CAN_SUBMIT",
}

export const ORG_D_Detail_Review_Modal_WriteAReview_FormWrapper = styled.form`
  width: 100%;

  display: grid;
  gap: 48px;

  fieldset {
    border: none;

    font-size: 18px;

    & > :nth-child(1) {
      span {
        color: ${SEMANTICS.ERROR_STATE};
      }

      & > :nth-child(2) {
        display: block;
        width: 100%;
      }
    }

    input,
    textarea {
      border: 1px solid ${NEUTRALS.BLACK};
      border-radius: 8px;
      padding: 10px 16px;
    }

    textarea {
      resize: vertical;
      min-height: 72px;
      max-height: 120px;
    }
  }

  & > :nth-child(2) {
    & > :nth-child(2) {
      padding-top: 10px;

      list-style: none;

      display: flex;
      gap: 16px;
    }
  }

  button {
    justify-self: flex-start;
    padding: 12px 42px;
    border: none;
    font-weight: 600;

    background-color: ${NEUTRALS.LIGHT_GREY};

    color: ${NEUTRALS.DARK_GREY};

    border: 2px solid transparent;

    border-radius: 8px;

    cursor: not-allowed;
  }

  .${ORG_D_Detail_Review_Modal_WriteAReview_FormWrapper_CLASSES.CAN_SUBMIT} {
    color: ${NEUTRALS.OFF_WHITE};

    background-color: ${PRIMARY.PRIMARY_CTA};

    cursor: pointer;

    &:hover,
    &:focus-visible {
      color: ${PRIMARY.PRIMARY_CTA};

      border: 2px solid ${PRIMARY.PRIMARY_CTA};

      background-color: ${NEUTRALS.OFF_WHITE};
    }
  }
`
