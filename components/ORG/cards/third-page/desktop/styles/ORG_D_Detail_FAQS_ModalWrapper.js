import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const ORG_D_Detail_FAQS_ModalWrapper = styled.div`
  visibility: ${({ showModal }) => (showModal ? `visible` : `hidden`)};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(932px, 91%, 1310px);
  background-color: ${NEUTRALS.OFF_WHITE};
  z-index: 5;
  cursor: default;
  padding-top: 43px;
  padding-inline: 76px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

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
      border: 2px solid crimson;
    }
  }

  & > :nth-child(2) {
    margin-bottom: 11px;
  }
  & > :nth-child(3) {
    display: flex;
    flex-direction: column;

    & > :nth-child(1) {
      margin-bottom: 53px;
    }

    & > :nth-child(2) {
      padding: 19px 21px;
      border-radius: 8px;
      border: 1px solid ${NEUTRALS.BLACK};
      resize: vertical;
      min-height: 193px;
      max-height: 430px;

      margin-bottom: 43px;

      &:focus {
        border: 1px solid transparent;
      }
    }
  }

  & > :nth-child(4) {
    margin-bottom: 95px;
  }
`
