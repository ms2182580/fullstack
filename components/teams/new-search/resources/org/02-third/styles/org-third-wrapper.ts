import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const OrgThirdWrapper = styled.div`
  border: 2px solid green;
  display: flex;

  a {
    ${reusableButton()};
  }
`
