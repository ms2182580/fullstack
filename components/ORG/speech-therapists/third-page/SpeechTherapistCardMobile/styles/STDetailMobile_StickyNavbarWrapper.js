import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const STDetailMobile_StickyNavbarWrapper = styled.nav`
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: ${NEUTRALS.OFF_WHITE};
  position: sticky;
  width: 100%;
  top: 0;

  & > :nth-child(1) {
    margin-inline: 29px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    height: 48px;

    & > li {
      list-style: none;
      display: flex;
      text-align: center;
      position: relative;
    }

    & > .highlight {
      /* border: 2px solid crimson; */
    }

    & > li > span,
    & > .highlight {
      text-decoration: none;

      & > a::before,
      &.highlight::before {
        content: "";
        position: absolute;
        bottom: -10px;
        left: -10px;
        right: -10px;
        height: 4px;
        background-color: ${PRIMARY.PRIMARY_CTA};
        visibility: hidden;
        opacity: 0;
        transition: all 0s linear 0.3s, opacity 0.3s linear;
      }
      
      & > a:hover::before,
      &.highlight::before {
        visibility: visible;
        opacity: 1;
        transition: all 0s linear 0s, opacity 0.3s linear;
      }
    }
  }
`
