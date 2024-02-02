import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const Home_OurFeaturesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-template-areas: "header header";

  background-image: url("/background/background5.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;

  background-position-y: bottom;

  padding-bottom: 56px;
  padding-inline: 56px;

  & > :nth-child(1) {
    grid-area: header;

    margin-bottom: 112px;

    & > :nth-child(1) {
      font-size: 20px;
      line-height: normal;
      letter-spacing: 2px;
      text-transform: uppercase;

      color: ${PRIMARY.PRIMARY_CTA};
    }

    & > :nth-child(2) {
      font-size: 40px;
      line-height: 68px;
    }
  }

  & > :nth-child(2) {
    margin-top: auto;
    margin-bottom: auto;
  }

  & > :nth-child(3) {
    margin-left: auto;
    margin-right: -52px;
  }

  & > :nth-last-child(1),
  & > :nth-last-child(2) {
    margin-top: 112px;
  }

  & > :last-child {
    margin-left: 66px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & > * {
      list-style: none;

      display: grid;
      gap: 16px;

      & > :nth-child(1) {
        font-weight: 600;
        font-weight: 18px;
      }

      & > :not(:first-child) {
        display: flex;
        align-items: center;

        gap: 8px;
      }
    }
  }
`
