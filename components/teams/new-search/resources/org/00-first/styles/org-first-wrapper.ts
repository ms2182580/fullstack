import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const OrgFirstWrapper = styled.div`
  border: 2px solid green;

  display: flex;

  a {
    ${reusableButton()};
  }
`
