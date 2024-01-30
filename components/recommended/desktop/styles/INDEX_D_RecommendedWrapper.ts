import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const INDEX_D_RecommendedWrapped = styled.div`
  max-width: 1440px;
  margin-top: 56px;
  margin-bottom: 48px;
  padding-inline: 56px;

  display: grid;

  background-image: url("/background/background1.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: 100% 200px;

  //h1
  & > :nth-child(1) {
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 82px; /* 170.833% */
  }

  //1 P
  & > :nth-child(2) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 168.75% */

    width: 772px;

    margin-top: 20px;

    margin-bottom: 78px;
  }

  & > :nth-child(3) {
    display: grid;
    justify-self: center;

    margin-bottom: 104px;
  }

  /* image plus text */
  & > :last-child {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;

    & > :nth-child(2) {
      display: flex;
      justify-content: center;

      flex-direction: column;
      gap: 8px;

      h2 {
        font-size: 40px;
      }

      p {
        margin-bottom: 48px;
      }

      a {
        width: fit-content;

        ${reusableButton({ secondary: true })}
      }
    }
  }
`
