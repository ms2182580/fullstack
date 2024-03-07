import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  inputIsFocus: boolean
}

export const Input_MultSelectListboxWrapper = styled.label<Props>`
  position: relative;

  ul {
    visibility: ${({ inputIsFocus }) => (inputIsFocus ? "visible" : "hidden")};
    position: absolute;
    z-index: 99;
    /* top: calc(100% + 8px); */
    /* bottom: calc(-100% + 8px); */
    right: 0;
    left: 0;
    /* bottom: -100%; */
    top: 300%;

    border: 2px solid crimson;

    list-style: none;

    background-color: ${NEUTRALS.OFF_WHITE};
  }
`
