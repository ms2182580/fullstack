import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const Layout_Dashboard_General_HeaderWrapper = styled.header`
  box-shadow: 0px 0px 10px 0px #7b7b7b40;

  display: flex;

  background-color: ${NEUTRALS.OFF_WHITE};

  & > :nth-child(1) {
    margin-left: auto;
    margin-right: 56px;
    margin-block: 12px;

    background-color: ${SEMANTICS.NAVIGATION_ACTIVE};

    border-radius: 50%;
    aspect-ratio: 1/1;
    width: 40px;

    font-size: 16px;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    & > span {
      position: absolute;
      right: 0px;
      bottom: 0px;
    }
  }
`
