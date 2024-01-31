import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Home_D_Hero_NWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;

  gap: 69px;

  & > :nth-child(1) {
    h1 {
      margin-bottom: 8px;
    }

    p {
      display: grid;
      gap: 32px;
    }

    & > :last-child {
      margin-top: 72px;

      display: flex;
      align-items: flex-end;
      gap: 24px;

      & > :nth-child(1) {
        ${reusableButton({})}
      }
      & > :nth-child(2) {
        ${reusableButton({ secondary: true })}
      }
    }
  }

  & > :nth-child(2) {
    margin-left: auto;
  }
`
