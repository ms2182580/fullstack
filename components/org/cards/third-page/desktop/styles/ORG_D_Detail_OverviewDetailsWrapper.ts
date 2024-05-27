import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

type Props = {
  isViewMore: boolean
}

export const ORG_D_Detail_OverviewDetailsWrapper = styled.section<Props>`
  ${ui_section_card()}

  & > :nth-child(1) {
    ${ui_header_card()};

    h2 {
      font-size: 20px;
    }
  }

  & > :nth-child(2) {
    display: grid;
    row-gap: 24px;

    ul {
      list-style: none;
    }

    & > ul:nth-of-type(1) {
      display: grid;
      gap: 24px;

      & > li {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        & > :nth-child(1) {
          width: fit-content;
          height: fit-content;

          display: flex;
          align-items: center;
          justify-content: center;

          column-gap: 16px;

          p {
            font-weight: 600;
          }
        }
      }
    }

    & > :last-child {
      margin-left: auto;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;

      cursor: default;

      & > span:nth-of-type(1) {
        transform: ${({ isViewMore }) =>
          isViewMore ? "rotate(calc(90deg * 3))" : "rotate(calc(90deg * 1))"};
        height: fit-content;

        margin-right: 4px;
      }

      &:hover,
      &:focus-visible {
        opacity: 0.7;
      }
    }
  }
`
