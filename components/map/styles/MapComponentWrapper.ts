import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

type Props = {
  widthFull?: boolean
  isFullMap?: boolean
  isBackend?: boolean
}
export const MapComponentWrapper = styled.div<Props>`
  height: ${({ widthFull, isFullMap }) =>
    widthFull && isFullMap ? "80vh" : widthFull ? "25vh" : "100vh"};
  overflow: hidden;
  position: sticky;
  top: 0;
  left: 0;

  & > :nth-child(1) {
    width: 100%;
    height: 100%;
    position: relative;
    & > :last-child {
      position: absolute;
      top: 10px;
      left: 50px;
      z-index: 9999;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      padding: 16px 24px;
      background-color: ${NEUTRALS.OFF_WHITE};
      border: 1px solid ${PRIMARY.PRIMARY_CTA};
      border-radius: 8px;

      font-size: 20px;
      color: ${PRIMARY.PRIMARY_CTA};
      font-weight: 500;

      & > svg {
        & > * {
          fill: currentColor;
        }
      }

      &:hover,
      &:focus-visible {
        filter: brightness(97%);
      }
    }
  }
  ${({ isBackend }) =>
    isBackend &&
    css`
      border-radius: 16px;
      & > * {
        border-radius: inherit;
      }

      & > :last-child {
        z-index: 2;
      }
    `}

  .leaflet-popup-content {
    margin: 0px;
    overflow: hidden;
    width: 280px !important;
  }
`
