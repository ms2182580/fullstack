import { NEUTRALS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const ORG_D_Detail_AIChatWrapper = styled.article`
  ${ui_section_card()};

  & > :nth-child(1) {
    ${ui_header_card()};
    height: 56px;
    display: flex;
    align-items: center;
  }

  & > div:nth-of-type(1) {
    padding-top: 8px;
    display: grid;
    gap: 24px;

    textarea {
      resize: none;

      width: 100%;

      padding: 12px 16px;
      border-radius: 8px;

      border: 2px solid ${NEUTRALS.DARK_GREY_3};
    }

    button {
      ${reusableButton({})};

      padding: 8px 32px !important;
      width: 124px;
    }
  }
`
