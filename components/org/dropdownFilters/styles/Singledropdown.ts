import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export type Props = {
  showDropdown: boolean
}

export const SingleDropdownWrapper = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  z-index: 2;

  & > :nth-child(1) {
    width: 191px;
    height: 48px;
    border: 2px solid ${PRIMARY.PRIMARY_CTA};
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: default;
    z-index: 3;
    background-color: white;

    position: relative;

    & > p:nth-child(1) {
      ${Paragraph()};

      margin-left: auto;
      user-select: none;

      color: ${PRIMARY.PRIMARY_CTA};
      font-weight: 600;
    }

    & > :nth-child(2) {
      margin-right: 12px;
      margin-left: auto;

      & > * {
        & > * {
          fill: ${PRIMARY.PRIMARY_CTA};
        }
      }
    }

    & > :nth-child(3) {
      position: absolute;
      top: calc(100% + 5px);
      z-index: 2;

      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
      background-color: ${NEUTRALS.OFF_WHITE};

      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;

      width: 191px;

      /* display: flex; */
      display: ${({ showDropdown }) => (showDropdown ? "flex" : "none")};
      flex-direction: column;

      cursor: default;

      & > div:nth-child(1) {
        height: 1.67px;
        width: 174px;
        margin-bottom: 8px;
      }

      & > span,
      & > a > span {
        padding: 12px 24px;
      }

      & > span:hover,
      & > a > span:hover {
        background-color: ${PRIMARY.PRIMARY_HOVER};
        color: ${NEUTRALS.OFF_WHITE};
      }

      & > div:nth-last-child(1) {
        height: 18px;
      }
    }
  }

  /* & > :nth-child(2) {
    position: absolute;
    top: calc(100% - 5px);
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
    background-color: ${NEUTRALS.OFF_WHITE};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 2;
    width: 191px;
    display: flex;
    flex-direction: column;
    cursor: default;

    & > div:nth-child(1) {
      height: 1.67px;
      width: 174px;
      margin-bottom: 8px;
    }

    & > span,
    & > a > span {
      padding: 12px 24px;
      cursor: pointer;
    }

    & > span:hover,
    & > a > span:hover {
      background-color: ${PRIMARY.PRIMARY_HOVER};
      color: ${NEUTRALS.OFF_WHITE};
    }

    & > div:nth-last-child(1) {
      height: 18px;
    }
  } */
`

export const CustomC = styled.span``
