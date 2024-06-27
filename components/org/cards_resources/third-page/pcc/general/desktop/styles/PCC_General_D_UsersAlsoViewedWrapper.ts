import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

let leftMarginTags = "32px"
let rightMarginTags = "123px"

let leftMarginTagsLineBelow = "79px"
let rightMarginTagsLineBelow = "169px"

export const PCC_General_D_UsersAlsoViewedWrapper = styled.article`
  ${ui_section_card()}

  & > :nth-child(1) {
    ${ui_header_card()};

    h2 {
      font-size: 24px;
    }
  }

  & > :nth-child(2) {
    ul {
      list-style: none;
    }

    & > :nth-child(1) {
      display: flex;
      align-items: center;

      justify-content: space-between;

      span {
        position: relative;
        height: 100%;

        width: 60%;

        & > :nth-child(1) {
          position: absolute;
          left: 16px;
          top: 0;
          bottom: 0;
          margin: auto;
        }

        & > :nth-child(2) {
          width: 100%;
          padding: 10px 10px 10px calc(16px + 32px);

          background: ${NEUTRALS.OFF_WHITE};
          border: 1px solid ${NEUTRALS.BLACK};
          border-radius: 8px;
        }
      }

      button {
        ${reusableButton({ secondary: true })};
      }
    }

    & > :nth-child(2),
    & > :nth-child(3) {
      display: grid;
      gap: calc(8px * 4);

      & > h3 {
        font-weight: 800;
        color: #746779;
      }

      & > ul {
        display: flex;
        gap: 53px;

        & > li {
          & > :nth-child(2) {
            margin-top: 16px;
          }

          & > span {
            position: relative;

            & > img {
              border-radius: 8px;
            }

            & > :nth-child(2) {
              position: absolute;
              top: 100%;
              z-index: 1;

              width: max-content;
              margin-left: auto;
            }
          }

          a {
            ${reusableButton({ secondary: true })};
            text-transform: capitalize;

            width: fit-content;
            margin-top: 24px;
          }
        }
      }

      & > p {
        margin-left: auto;
        color: ${SEMANTICS.HYPERLINK_NORMAL};
        text-decoration: underline;

        font-weight: 600;

        cursor: default;

        :hover,
        :focus-visible {
          opacity: 0.7;
        }
      }
    }

    & > :nth-child(2) {
      margin-top: 68px;
      padding-bottom: 68px;
      border-bottom: 1px solid #746779;

      li {
        p {
          text-transform: capitalize;
        }

        & > :nth-child(2) {
          & > :nth-child(1) {
            font-size: 20px;
            font-weight: 600;
          }

          & > :nth-child(2) {
            color: ${NEUTRALS.DARK_GREY_2};
          }

          & > :nth-child(3) {
            font-size: 14px;
            color: #746779;
          }

          & > :last-child {
          }
        }
      }
    }

    & > :nth-child(3) {
      padding-top: 68px;

      ul {
        display: grid;
        grid-template-columns: repeat(5, auto);

        li {
          max-width: 229px;
        }

        & > :nth-child(2),
        & > :nth-child(4) {
          margin-top: 60px;
        }

        p {
          font-size: 17px;
          font-weight: 600;
          white-space: nowrap;
        }
      }
    }
  }
`
