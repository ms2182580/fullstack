import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const PVES_General_D_GraphicsWrapper = styled.section`
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding-bottom: 40px;

  & > :nth-child(1) {
    padding: 24px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    margin-bottom: 24px;
  }

  & > *:not(:first-child) {
    padding-inline: 32px;
  }

  & > :nth-child(2) {
    display: flex;
    flex-wrap: wrap;

    gap: 24px;

    margin-bottom: 40px;

    header {
      flex-basis: 100%;

      margin-bottom: calc(8px * 4);

      display: flex;
      align-items: center;
      gap: 24px;
    }

    & > *:not(header) {
      background-color: #fafafa;
      border-radius: 8px;

      padding: 24px 24px;

      flex-basis: 600px;
      flex-grow: 1;
    }
  }

  & > :nth-child(3) {
    & > :nth-child(1) {
      margin-bottom: 24px;

      & > :nth-child(1) {
        margin-bottom: 8px;
      }
    }

    & > :nth-child(2) {
      width: 700px;
    }
  }
`
