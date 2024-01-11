import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_M_Detail_Review_Modal_WriteAReviewWrapper = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  padding-top: 42px;

  border-radius: 8px;

  & > :nth-child(1) {
    position: absolute;
    right: 29px;
    top: 26px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;

    & > :nth-child(1) > path {
      fill: ${NEUTRALS.BLACK};
    }
  }

  & > :nth-child(2) {
    color: ${PRIMARY.PRIMARY_HOVER};
  }

  & > :nth-child(3) {
    font-weight: 400;

    strong {
      font-weight: 700;
    }
  }

  & > :nth-child(4) {
    .RIGHT {
      width: 100%;

      display: grid;
      gap: 48px;

      fieldset {
        border: none;

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

          & > * {
            display: flex;

            gap: 8px;
          }
        }
      }
    }
  }
`
