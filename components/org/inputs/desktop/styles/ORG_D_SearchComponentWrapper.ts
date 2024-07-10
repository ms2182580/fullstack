import { PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

export type Props = {
  isPointerButton?: boolean
}

export const ORG_D_SearchComponentWrapper = styled.div<Props>`
  display: grid;
  grid-template-columns: 7fr 1fr 1fr 56px;
  gap: 16px;

  margin-bottom: 75px;

  & > :nth-child(1) {
    width: 100%;

    & > :nth-child(2) {
      & > :nth-child(2) {
        width: 100%;
      }
    }
  }

  & > *:not(:first-child):not(:last-child) {
    width: 100%;

    & > :nth-child(2) {
      & > :nth-child(1) {
        left: 12%;
      }

      & > :nth-child(2) {
        max-width: 200px;
      }
    }
  }

  & > :last-child {
    height: 41px;

    margin-top: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${PRIMARY.PRIMARY_CTA};
    border-radius: 8px;

    border: 1px solid ${PRIMARY.PRIMARY_CTA};

    color: white;

    & > * {
      fill: currentColor;
    }

    ${({ isPointerButton }) =>
      isPointerButton &&
      css`
        cursor: pointer;
      `}
  }
`
