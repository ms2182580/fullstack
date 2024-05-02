import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const ORG_D_Detail_MainCard2Wrapper = styled.section`
  ${ui_section_card()}

  & > :nth-child(1) {
    ${ui_header_card()}
  }

  & > article {
    display: grid;
    grid-template-rows: repeat(4, auto);
    gap: 24px;

    & > :nth-child(1) {
      display: grid;
      grid-template-columns: 150px 1fr;
      gap: 24px;

      & > :nth-child(1) {
        position: relative;
        /* display: flex;
        flex-direction: column; */

        /* display: grid; */
        /* grid-template-rows: 3fr 1fr; */

        & > :nth-child(1) {
          & > :nth-child(1) {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }

          & > :nth-child(2) {
            position: absolute;
            top: 0;
            right: 0;
          }

          & > :nth-child(3) {
            position: absolute;
            bottom: 0;
          }
        }

        & > :nth-child(2) {
          display: flex;
          align-items: center;
          justify-content: center;

          /* padding-top: 24px; */
          /* margin-top: 24px; */
          /* border: 2px solid crimson; */
        }
      }

      & > :nth-child(2) {
        border: 2px solid crimson;
      }
    }

    & > :nth-child(2) {
      padding: 15px 24px;

      display: grid;
      gap: 8px;

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
  }
`
