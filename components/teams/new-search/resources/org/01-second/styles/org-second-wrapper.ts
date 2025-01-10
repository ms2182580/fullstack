import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const OrgSecondWrapper = styled.div`
  /* border: 2px solid green; */

  & > a {
    ${reusableButton()};

    width: fit-content;
  }
`
