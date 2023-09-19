import styled from "styled-components"
import { NEUTRALS, PRIMARY, SEMANTICS } from "../../../../../../../assets/Colors"

export const ST_D_Detail_AppointmentModalWrapper = styled.div`
  visibility: ${({ showModal }) => (showModal ? `visible` : `hidden`)};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 612px;
  background-color: ${NEUTRALS.OFF_WHITE};
  z-index: 5;
  cursor: default;
  padding-top: 48px;
  padding-bottom: 48px;
  border-radius: 8px;
  display: flex;
  gap: 32px;
  align-items: center;
  flex-direction: column;

  & > :nth-child(1) {
    position: absolute;
    right: 29px;
    top: 26px;
    cursor: pointer;

    & > :nth-child(1) > path {
      fill: ${NEUTRALS.BLACK};
    }
  }

  & > :nth-child(2) {
    text-align: center;
    margin-inline: 64px;
  }

  & > :nth-child(3) {
    display: flex;
    align-items: center;
    gap: 24px;

    & > :nth-child(1) {
      overflow: hidden;
      border-radius: 10px;
    }
  }

  & > :nth-child(4) {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 20px;
    padding: 24px 37px 24px 12px;

    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    border-radius: 10px;

    & > :nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  & > :last-child {
    font-size: 20px;
    font-weight: 600;

    & > span {
      color: ${SEMANTICS.HYPERLINK_NORMAL};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
