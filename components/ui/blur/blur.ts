import { css } from "styled-components"

/*
 * This effect needs the parent have a position:relative; is mandatory
 */
type Props = {
  zIndex?: number
  pixelsBackdropFilter?: number
}

export const blurEffect = ({
  zIndex = 1,
  pixelsBackdropFilter = 1.5,
}: Props) => css`
  &:after {
    content: "";
    position: absolute;
    inset: 0;

    box-shadow: 1px 1px 13px hsla(0, 0%, 0%, 0.2);
    border-radius: 16px;
    backdrop-filter: blur(${pixelsBackdropFilter}px);
    -webkit-backdrop-filter: blur(${pixelsBackdropFilter}px);
    background-color: hsl(0, 0%, 100%, 0.4);

    z-index: ${zIndex};
  }
`
