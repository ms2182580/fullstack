import styled, { css } from "styled-components"

type Props = {
  checkModalIsOpen?: boolean
}

const hoverFocusAndActiveCSS = () => css`
  background: linear-gradient(
    0deg,
    hsl(190.1, 100%, 50%) 0%,
    hsl(125.9, 86.2%, 25.5%) 45%,
    black 100%
  );
`

export const ButtonDisplayFeaturesExpectedWrapper = styled.button<Props>`
  position: absolute;
  bottom: -45px;
  left: 0px;
  width: 45px;
  aspect-ratio: 1 /1;
  border-radius: 0% 0% 50% 50%;
  border: none;
  color: white;
  font-size: 16px;

  background: linear-gradient(
    180deg,
    transparent 0%,
    hsl(125.9, 86.2%, 25.5%) 45%,
    hsl(190.1, 100%, 50%) 100%
  );

  :is(:hover, :focus-visible) {
    ${hoverFocusAndActiveCSS()};
  }

  ${({ checkModalIsOpen }) => checkModalIsOpen && hoverFocusAndActiveCSS()};
`
