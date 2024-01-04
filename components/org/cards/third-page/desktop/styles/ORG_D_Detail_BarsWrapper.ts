import styled, { css } from "styled-components"
import { shouldDisplayTooltip } from "../ORG_D_Detail_Bars"

type Props = {} & shouldDisplayTooltip

export const ORG_D_Detail_BarsWrapper = styled.section<Props>`
  & > :nth-child(1) {
    h4 {
      text-transform: capitalize;
    }

    h3 {
      font-weight: 400;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    margin-bottom: 8px;

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
