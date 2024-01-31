import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const Home_HowItWorks_DWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "header header"
    "left right";

  column-gap: 56px;

  margin-bottom: 120px;

  & > header {
    grid-area: header;

    margin-bottom: 76px;

    h2 {
      font-size: 20px;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 2px;
      text-transform: uppercase;

      color: ${PRIMARY.PRIMARY_CTA};

      margin-bottom: 4px;
    }

    h3 {
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }

  & > :nth-child(2) {
    grid-area: left;
    margin-bottom: 200px;
  }

  & > :nth-child(3) {
    grid-area: right;
  }

  & > :nth-child(5) {
  }
`
