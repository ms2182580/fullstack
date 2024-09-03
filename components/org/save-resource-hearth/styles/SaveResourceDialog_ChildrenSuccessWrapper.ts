import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const SaveResourceDialog_ChildrenSuccessWrapper = styled.section`
  padding: calc(8px * 4);

  & > * + *:not(:last-child) {
    margin-top: 8px;
  }

  h6 {
    ${HeaderCSS({ fontSize: "h3" })}
  }

  p {
    ${Paragraph({ color: "black" })}

    span {
      text-transform: capitalize;
      font-weight: 600;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    margin-top: 24px;

    button {
      ${reusableButton()};
    }

    a {
      ${reusableButton({ secondary: true })};
    }
  }
`
