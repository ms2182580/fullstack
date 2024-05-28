import { SEMANTICS } from "@/assets/Colors"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

const CONST = {
  IMAGE: {
    width: "150px",
    height: "150px",
  },
}

export const ORG_D_Detail_MainCard2Wrapper = styled.section`
  ${ui_section_card()}

  & > :nth-child(1) {
    ${ui_header_card()};
  }

  & > article {
    display: grid;
    gap: 24px;

    & > :nth-child(1) {
      display: grid;
      grid-template-columns: 150px 1fr auto;
      column-gap: 24px;

      & > :nth-child(1) {
        position: relative;

        height: ${CONST.IMAGE.height};

        & > :nth-child(1) {
          & > :nth-child(1) {
            object-fit: cover;

            height: 100%;
          }

          & > :nth-child(2) {
            position: absolute;
            top: 0;
            right: 0;
          }

          & > :nth-child(3) {
            position: absolute;
            bottom: 8px;
            left: 29px;
            right: 29px;
          }
        }

        & > :nth-child(2) {
          margin-top: 4px;

          text-align: center;
          color: ${SEMANTICS.HYPERLINK_NORMAL};
        }
      }

      & > :nth-child(2) {
        display: grid;
        gap: 4px;
      }
    }

    & > :nth-child(2) {
      padding: 15px 24px;

      display: grid;
      gap: 8px;

      border-top: 1px solid hsla(0, 0%, 0%, 0.1);
      border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);

      font-size: 14px;

      h3 {
        font-size: 14px;
        font-weight: 500;
      }

      ul {
        display: grid;
        grid-auto-flow: column;
        gap: 24px;

        li {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          position: relative;

          &::before {
            content: "•";
            margin-right: 5px;
            /* position: absolute; */
          }
        }
      }
    }

    & > :nth-child(4) {
      color: hsla(196, 100%, 2%, 0.6);
    }
  }
`
