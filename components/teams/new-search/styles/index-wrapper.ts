import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const INDEX_NewsearchWrapper = styled.div`
  display: grid;

  gap: 16px;

  & > div {
    display: flex;

    gap: 16px;

    & > :nth-child(1) {
      ${reusableButton()}
    }

    & > :nth-child(2) {
      ${reusableButton({ secondary: true })}
    }

    a {
      padding: 8px 16px;
    }
  }
`
