import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const ORG_D_Detail_ReviewsWrapper = styled.article`
  ${ui_section_card()};

  & > header {
    ${ui_header_card()};

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px 8px 0 0;

    h2 {
      font-size: 20px;
      text-transform: capitalize;
    }

    & > :nth-child(2) {
      ${reusableButton({ secondary: true })}

      display: flex;
      align-items: center;
      gap: 8px;

      &:hover,
      &:focus-visible {
        & > :nth-child(1) {
          fill: ${NEUTRALS.OFF_WHITE};
        }
      }
    }
  }

  & > :nth-child(2) {
    display: grid;

    & > :nth-child(1) > span {
      font-weight: 600;
      text-decoration: underline;
      color: ${SEMANTICS.HYPERLINK_NORMAL};

      cursor: pointer;
    }

    & > :nth-child(2) {
      margin-top: 24px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }

    & > :nth-child(3) {
      margin-top: 32px;
    }

    & > :nth-child(4) {
      margin-top: 24px;
    }

    & > :nth-child(5) {
      margin-top: 24px;
    }

    & > :nth-child(6) {
      margin-left: auto;
      margin-top: 24px;

      color: ${SEMANTICS.HYPERLINK_NORMAL};

      cursor: default;

      &:hover,
      &:focus-visible {
        opacity: 0.8;
      }
    }
  }
`
