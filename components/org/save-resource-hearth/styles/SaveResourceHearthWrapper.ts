import styled, { css, keyframes } from "styled-components"

type Props = {
  clickOnSVG?: boolean
  checkModalIsOpen: boolean
}

const keyFrames_modalIsOpen = keyframes`
  0% {
    transform: scale(0.9) translateX(0) translateY(0);
  }
  50% {
    transform: scale(1.1) translateX(-1px) translateY(-1px);
  }
  100% {
    transform: scale(0.9) translateX(0) translateY(0);
  }
`

export const SaveResourceHearthWrapper = styled.div<Props>`
  & > * {
    ${({ checkModalIsOpen }) =>
      checkModalIsOpen &&
      css`
        filter: drop-shadow(3px 3px 8px hsl(3.5, 74.9%, 64.1%));

        animation: 2s ease-in-out infinite alternate ${keyFrames_modalIsOpen};
      `}

    & > * {
      fill: ${({ clickOnSVG }) => (clickOnSVG ? `hsl(3.5, 74.9%, 54.1%)` : ``)};
    }
  }

  & > * > *:hover,
  &:focus-visible > * > * {
    fill: ${({ clickOnSVG }) => (clickOnSVG ? `` : `hsl(3.5, 74.9%, 64.1%)`)};
  }
`
