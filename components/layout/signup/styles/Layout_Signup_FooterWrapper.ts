import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Layout_Signup_FooterWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 32px;

  padding-right: 56px;

  & > * {
    text-transform: capitalize;
  }

  & > :nth-child(1) {
    ${reusableButton({ secondary: true })}
    cursor: pointer;
  }
  & > :nth-child(2) {
    ${reusableButton({})}
  }
`
