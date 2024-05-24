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
    grid-template-columns: 700px auto;
    gap: 40px;

    & > :nth-child(1) {
      display: grid;
      gap: 28px;
    }

    & > :last-child {
      height: 102vh;
      max-width: 365px;

      position: sticky;
      inset: 0;

      display: flex;
      flex-direction: column;
      gap: 36px;
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

  & > :nth-child(4) {
    margin-top: 266px;
    margin-inline: clamp(2px, calc(41vw - 416px), 142px);
  }
`
