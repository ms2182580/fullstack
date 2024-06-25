import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const ORG_D_Detail_FAQSWrapper = styled.article`
  ${ui_section_card()};

  & > :nth-child(1) {
    ${ui_header_card()};

    h2 {
      font-size: 20px;
    }
  }

  & > :nth-child(2) {
    & > :nth-child(1) {
      display: flex;
      position: relative;
      justify-content: space-between;
      margin-bottom: 24px;

      & > :nth-child(1) {
        position: relative;
        height: 100%;

        & > :nth-child(1) {
          position: absolute;
          left: 43px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        & > :nth-child(2) {
          width: 100%;
          padding: 10px 10px 10px calc(43px + 60px);

          background: ${NEUTRALS.OFF_WHITE};
          border: 1px solid ${NEUTRALS.BLACK};
          border-radius: 16px;

          &[type="text"]:focus {
            border: 1px solid transparent;
          }
        }
      }

      & > :nth-child(2) {
        ${reusableButton({ secondary: true })};
      }
    }

    & > :nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    & > :nth-child(3) {
      display: grid;
      gap: 40px;

      margin-bottom: 40px;

      position: relative;
    }

    & > :last-child {
      width: fit-content;
      margin-left: auto;

      font-weight: 600;
      color: ${SEMANTICS.HYPERLINK_NORMAL};
      text-decoration: underline;

      cursor: default;

      &:hover,
      &:focus-visible {
        filter: brightness(70%);
      }
    }
  }
`
