import styled, { css } from "styled-components"
import { shouldDisplayTooltip } from "../ORG_D_Detail_Bars"

type Props = {} & shouldDisplayTooltip

export const ORG_D_Detail_BarsWrapper = styled.section<Props>`
  display: grid;
  gap: 24px;
  header {
    margin-bottom: 8px;

    h4 {
      font-weight: 400;
      text-transform: lowercase;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    & > * {
      font-size: 18px;
    }

    ${({ shouldDisplayTooltip }) =>
      shouldDisplayTooltip &&
      css`
        span {
          display: flex;
          align-items: center;
          gap: 24px;
        }
      `}
  }

  & > :nth-child(2) {
    & > * {
      display: flex;
      justify-content: space-between;

      & > * {
        font-size: 18px;
      }
    }
  }
`
