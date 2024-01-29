import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const AIChat_Plan_ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(43, 30, 48, 0.4);

  & > :nth-child(1) {
    width: 707px;
    height: 291px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #343330;
    background: #fff;
    padding: 32px 40px;
    & > :nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > :nth-child(1) {
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 34px;
      }
    }

    & > :nth-child(2) {
      & > :nth-child(1),
      & > :nth-child(2) {
        margin-top: 28px;
        margin-bottom: 28px;
        display: flex;
        gap: 10px;
        & > :nth-child(1) {
          width: 24px;
          height: 24px;
        }
        & > :nth-child(2) {
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }

      & > :nth-child(3) {
        display: flex;
        gap: 8px;
        & > :nth-child(2) {
          border-radius: 8px;
          background: #d3d6d7;
          color: ${NEUTRALS.DARK_GREY};
        }
      }
    }
  }
`
