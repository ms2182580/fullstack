import styled from "styled-components"

export type Props = {
  logoColor: string
  isSignFlow: boolean
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

      font-size: ${({ isSignFlow }) => (isSignFlow ? "38px" : "56px")};

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
      margin-bottom: auto;

      height: auto;

      color: ${({ logoColor }) => logoColor};
      & > * {
        fill: currentColor;
      }
    }
  }
`
