import styled from "styled-components"
import { NEUTRALS, PRIMARY, SEMANTICS } from "../../../../../../assets/Colors"

export const ORG_M_Detail_FAQSWrapper = styled.section`
  width: 100%;
  margin-top: 20px;
  & > :nth-child(2) {
    margin-bottom: 40px;
    color: ${PRIMARY.PRIMARY_CTA};
  }

  & > :nth-child(1) {
    display: flex;
    position: relative;
    margin-bottom: 24px;
    gap: 25%;

    & > :nth-child(1) {
      position: absolute;
      left: 15px;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    & > :nth-child(2) {
      width: 100%;
      padding: 10px 10px 10px 60px;

      background: ${NEUTRALS.OFF_WHITE};
      border: 1px solid ${NEUTRALS.BLACK};
      border-radius: 16px;

      &[type="text"]:focus {
        border: 1px solid transparent;
      }
    }
  }

  & > :nth-child(3) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  & > div:not(:nth-child(2)):not(:nth-child(3)) {
    margin-bottom: 40px;
  }

  & > :last-child {
    width: fit-content;
    margin-left: auto;

    font-weight: 600;
    color: ${SEMANTICS.HYPERLINK_NORMAL};
    text-decoration: underline;

    cursor: default;

    &:hover,
    &:focus-visible {
      filter: brightness(70%);
    }
  }
  button {
    width: 100%;
  }
`
