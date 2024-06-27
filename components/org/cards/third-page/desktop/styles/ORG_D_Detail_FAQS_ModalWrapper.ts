import { NEUTRALS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const ORG_D_Detail_FAQS_ModalWrapper = styled.div`
  ${ui_section_card()}

  width: clamp(300px, 95vw - 14px, 1200px);

  & > :nth-child(1) {
    ${ui_header_card()};

    h2 {
      font-size: 24px;
    }
  }

  & > :nth-child(2) {
    & > :nth-child(1) {
      display: flex;
      flex-direction: column;

      gap: 22px;

      position: relative;

      & > :nth-child(2) {
        padding: 19px 21px;
        border-radius: 8px;
        border: 1px solid ${NEUTRALS.BLACK};
        resize: vertical;
        min-height: 193px;
        max-height: 430px;

        &:focus {
          border: 1px solid transparent;
        }
      }
    }

    & > :last-child {
      ${reusableButton({})}

      margin-left: auto;
      margin-top: 22px;

      text-transform: capitalize;
    }
  }
`
