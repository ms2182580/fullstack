import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const Home_NewPath_DWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "bar bar"
    "left right";

  row-gap: 56px;
  column-gap: 131px;

  & > :nth-child(1) {
    grid-area: bar;
  }

  & > :nth-child(2) {
    grid-area: left;

    display: grid;
    justify-items: center;
    gap: 32px;

    & > :nth-child(2) {
      display: grid;
      grid-auto-flow: column;

      p {
        font-size: 18px;
      }

      & > :nth-child(3) {
        margin-top: auto;
        transform: rotate(-180deg);
      }
    }
  }

  & > :nth-child(3) {
    grid-area: right;

    h2 {
      font-size: 20px;
      line-height: normal;
      letter-spacing: 2px;
      text-transform: uppercase;

      color: ${PRIMARY.PRIMARY_CTA};

      margin-bottom: 12px;
    }

    h3 {
      font-size: 40px;
      line-height: normal;
      margin-bottom: 4px;
    }

    p {
      display: grid;
      gap: 32px;
    }
  }
`
