import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const Logo_HeaderWrapper = styled.header`
  & > :nth-child(1) {
    display: flex;
    justify-content: center;

    gap: 8px;

    text-decoration: none;

    user-select: none;

    & > :nth-child(1) {
      color: ${PRIMARY.PRIMARY_LOGO};
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
      font-size: 56px;
      font-weight: 900;

      margin-bottom: auto;

      & > * {
        fill: ${PRIMARY.PRIMARY_LOGO};
      }
    }
  }
`
