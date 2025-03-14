import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const SBSG_ContentWrapper = styled.div`
  & > button {
    ${reusableButton()};
    width: 100%;

    margin-top: calc(8px * 4);
  }
`
