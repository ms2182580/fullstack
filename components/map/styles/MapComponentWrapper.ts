import { NEUTRALS, PRIMARY } from "@/assets/Colors";
import styled from "styled-components";

type Props = {
  widthFull?: boolean;
  isFullMap?: boolean;
};
export const MapComponentWrapper = styled.div<Props>`
  height: ${({ widthFull, isFullMap }) =>
    widthFull && isFullMap ? "80vh" : widthFull ? "25vh" : "100vh"};
  width: ${({ widthFull }) => (widthFull ? "91vw" : "")};
  position: sticky;
  top: 0;

  & > :last-child {
    position: absolute;
    top: 16px;
    left: 16px;

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
`;
