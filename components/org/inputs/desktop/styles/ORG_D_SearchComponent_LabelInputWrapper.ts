import styled, { css } from "styled-components"

type Props = {
  shouldDisplayDropdown: boolean
}

export const ORG_D_SearchComponent_LabelInputWrapper = styled.label<Props>`
  display: flex;
  flex-direction: column;

  gap: 4px;

  width: 250px;

  & > :nth-child(1) {
    color: #3a343c;

    text-transform: lowercase;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  & > :nth-child(2) {
    position: relative;

    & > :nth-child(1) {
      position: absolute;
      top: 50%;
      left: 4%;

      transform: translate(-50%, -50%);

      & > * {
        fill: black;
      }
    }

    & > :nth-child(2) {
      border-radius: 8px;

      border: 1px solid #908395;
      padding: 10px 16px 10px 48px;

      &::placeholder {
        color: #908395;
      }
    }

    ${({ shouldDisplayDropdown }) =>
      shouldDisplayDropdown &&
      css`
        & > :nth-child(3) {
          position: absolute;
          z-index: 2;
          width: max-content;
          max-width: 450px;
          top: 100%;
          left: 0%;
        }
      `}
  }
`
