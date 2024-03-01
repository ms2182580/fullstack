import styled from "styled-components"

export type Props = {
  logoColor: string
}

export const Logo_HeaderWrapper = styled.header<Props>`
  width: 100%;
  width: fit-content;
  a {
    display: flex;
    justify-content: stretch;
    gap: 8px;

    text-decoration: none;

    user-select: none;

    width: 100%;
    width: fit-content;

    & > :nth-child(1) {
      color: ${({ logoColor }) => logoColor};

      font-size: clamp(30px, 9vw - 96px, 56px);

      font-weight: 800;
      font-style: normal;
      font-weight: 800;
      line-height: 51px;
      letter-spacing: 1.44px;

      text-transform: lowercase;
      &::first-letter {
        text-transform: capitalize;
      }
    }

    & > :nth-child(2) {
      /* font-weight: 900; */

      margin-bottom: auto;

      /* max-width: 100%; */
      height: auto;

      color: ${({ logoColor }) => logoColor};
      & > * {
        fill: currentColor;
      }
    }
  }
`
