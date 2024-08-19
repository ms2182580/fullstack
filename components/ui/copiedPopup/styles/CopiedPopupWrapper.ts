import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { UseCopyText_State_Props } from "@/utils/useCopiedpopupHooks"
import styled, { css, keyframes } from "styled-components"

type Props = {
  textToShow?: UseCopyText_State_Props
  shouldShowComponent?: boolean
  showDialog?: boolean
}

const appear = keyframes`
from{
  visibility: hidden;
  opacity:0;
  right: -20px;
}
to{ 
  visibility: visible;
  opacity: 1;
  /* right:0; */
  
  
}

`

const vanish = keyframes`

from{
  visibility: visible;
  display: block;
  opacity:1;
  
}

to{ 
  
  visibility: hidden;
  display:none;
  opacity: 0;
  right: -200px;
  

}
`

const TIME_TO_ANIMATE = {
  APPEAR: 200,
  VANISH: 1500,
}

export const timeToAnimate = {
  appear: TIME_TO_ANIMATE.APPEAR,
  vanish: TIME_TO_ANIMATE.VANISH,
  vanishOnJS: TIME_TO_ANIMATE.VANISH - 200,
}

export const CopiedPopupWrapper = styled.dialog<Props>`
  display: none;
  visibility: hidden;

  /* position: fixed;
  z-index: 999;
  bottom: calc(8px * 2);
  right: calc(8px * 2);
  margin-left: auto; */

  position: absolute;
  z-index: 999;
  bottom: 140%;
  left: 0;
  right: 0;

  width: max-content;

  background: linear-gradient(
    20deg,
    ${PRIMARY.PRIMARY_HOVER} 44%,
    ${PRIMARY.PRIMARY_CTA}
  );
  padding: calc(8px * 2);

  border-radius: calc(8px * 1);
  border-top-right-radius: calc(8px * 5);
  border-bottom-left-radius: calc(8px * 3);

  border: none;

  color: ${NEUTRALS.OFF_WHITE_2};
  font-size: calc(8px * 2);

  cursor: default;

  & > :nth-child(1) {
    display: grid;
    gap: 8px;

    & > p:nth-of-type(2) {
      text-decoration: underline;
      font-weight: 600;
    }
  }

  &[open] {
    /* animation: ${appear} ${timeToAnimate}ms; */

    scale: 1;
    transition: scale 0.3s ease;

    @starting-style {
      scale: 0;
    }

    animation: ${({ showDialog }) =>
      showDialog
        ? css`
            ${appear} ${timeToAnimate.appear}ms
          `
        : css`
            ${vanish} ${timeToAnimate.vanish}ms
          `};

    display: block;
    visibility: visible;
  }

  & {
    transition: scale 0.3s ease, display 0.3s ease allow-discrete;
    scale: 0;
  }
`

/*

*/
