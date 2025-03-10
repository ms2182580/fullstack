import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const SupportusWrapper = styled.div`
  position: fixed;
  top: 360px;
  right: calc(
    0px - 48px
  ); /*  0px to be at right and 53px because the height of the element */
  transform: rotate(-90deg);

  padding: 12px 33px;

  background-color: #ae79c3;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  z-index: 99;

  font-size: 20px;
  font-weight: 600;
  color: ${NEUTRALS.OFF_WHITE};

  cursor: default;
`
