import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ST_M_Detail_CardWrapper = styled.div`
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};

  position: relative;

  & > :nth-child(1) {
    position: absolute;
    z-index: 2;
    right: 4%;
    top: 10px;
    cursor: pointer;
  }

  & > :nth-child(2) {
    padding: 24px 16px 16px 16px;

    & > :nth-child(1) {
      margin-bottom: 8px;
      position: relative;
      border-radius: 8px;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
      border: 2px solid ${NEUTRALS.LIGHT_GREY};

      & > :nth-child(1) {
        & > :nth-child(1) {
          border-radius: 8px;
        }
      }

      & > :nth-child(2) {
        position: absolute;
        right: 8px;
        bottom: 14px;
      }
    }

    & > :nth-child(2) {
      display: flex;
      white-space: nowrap;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;

      & > :nth-child(2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    & > :nth-child(3) {
      margin-bottom: 8px;

      display: flex;
      gap: 8px;
    }

    & > :nth-child(4) {
      margin-bottom: 16px;
    }

  }

  
`
