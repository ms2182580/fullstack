import { NEUTRALS } from "@/assets/Colors"
import { device } from "@/assets/screen-sizes/ScreenSizes"
import styled from "styled-components"

export const ST_M_Search_InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100vw - 32px);
  position: relative;

  & > :nth-child(1) {
    margin-right: auto;
  }

  & > :nth-child(2) {
    width: 100%;

    & > :nth-child(1) {
      width: 100%;
      padding: 24px;
      border-radius: 4px;
      border: 1px solid ${NEUTRALS.DARK_GREY};

      @media ${device.tablet} {
        padding: 16px;
      }

      @media ${device.mobileM} {
        padding: 8px;
      }
    }
  }
`
