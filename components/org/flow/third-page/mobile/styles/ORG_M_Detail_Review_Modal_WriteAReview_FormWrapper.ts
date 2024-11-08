import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const enum ORG_M_Detail_Review_Modal_WriteAReview_FormWrapper_CLASSES {
  CAN_SUBMIT = "CAN_SUBMIT",
}

export const ORG_M_Detail_Review_Modal_WriteAReview_FormWrapper = styled.form`
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  & > :nth-child(1) {
    border-radius: 3.213px 3.213px 0px 0px;
    background: ${PRIMARY.PRIMARY_BACKGROUND};
    & > :nth-child(1) {
      color: ${PRIMARY.PRIMARY_CTA};
      font-size: 14px;
      font-weight: 600;
      padding: 10px;
    }
  }

  fieldset {
    border: none;
    padding: 10px 17px;
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
    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      span {
        color: ${SEMANTICS.ERROR_STATE};
        display: block;
      }
    }
    & > :nth-child(3) {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      span {
        color: ${SEMANTICS.ERROR_STATE};
        display: block;
      }
    }

    input,
    textarea {
      border: 1px solid ${NEUTRALS.BLACK};
      border-radius: 8px;
      padding: 10px 16px;
    }

    strong {
      font-weight: 700;
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

  .${ORG_M_Detail_Review_Modal_WriteAReview_FormWrapper_CLASSES.CAN_SUBMIT} {
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
  // ul
  & > :nth-child(3) {
    & > :nth-child(1) {
      margin-bottom: 20px;
      display: flex;
    }
    ul {
      list-style: none;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  & > :nth-child(5) {
    border-radius: 10px;
    background: ${PRIMARY.PRIMARY_CTA};
    width: 91.8%;
    color: white;
    margin: 0px 16px;
    margin-bottom: 10px;
  }
`
