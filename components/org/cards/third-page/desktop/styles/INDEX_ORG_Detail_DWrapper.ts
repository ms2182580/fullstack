import { blurEffect } from "@/components/ui/blur/blur"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const INDEX_ORG_Detail_DWrapper = styled.div`
  position: relative;
  padding-bottom: 8px;

  & > :nth-child(1) {
    margin-top: 26px;
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    margin-inline: clamp(2px, calc(41vw - 416px), 170px);
  }

  & > :nth-child(2) {
    margin-top: 91px;
    padding-bottom: 8px;

    position: relative;

    display: grid;
    grid-template-columns: 700px 1fr;
    gap: 40px;

    & > :nth-child(1) {
      display: grid;
      gap: 28px;
    }

    & > *:not(:nth-child(1)):not(:nth-last-child(1)):not(:nth-last-child(2)) {
      /* margin-bottom: 24px; */
    }

    & > :nth-last-child(2) {
      /* margin-bottom: 44px; */
    }

    & > :last-child {
      height: 100vh;
      /* height: calc(500px + 400px); */
      width: 100%;

      position: sticky;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      /* display: grid; */
      /* gap: 36px; */

      display: flex;
      flex-direction: column;
      gap: 36px;

      & > :nth-child(1) {
        /* height: 60vh; */
        height: 50%;
        /* flex: 1; */
        position: relative;
        ${blurEffect({})}
      }

      & > :nth-child(2) {
        height: 40%;
        /* flex: 1; */
        /* height: 320px; */
        /* height: 30vh; */
        /* margin-bottom: 36px; */
        /* margin-bottom: auto; */
        position: relative;
        ${blurEffect({})}
      }

      & > * {
        ${ui_section_card()}

        & > :nth-child(1) {
          ${ui_header_card()}
        }
      }
    }
  }

  & > :nth-child(3) {
    ${ui_section_card()}
    position: relative;
    & > :nth-child(1) {
      ${ui_header_card()}

      ${blurEffect({})}
    }
  }
`
