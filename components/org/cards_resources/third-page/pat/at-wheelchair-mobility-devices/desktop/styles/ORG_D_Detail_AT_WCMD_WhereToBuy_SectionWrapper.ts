import { NEUTRALS, PRIMARY, SECONDARY_ORG_PLUS } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_AT_WCMD_WhereToBuy_SectionWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;

  padding-top: 65px;
  padding-bottom: 65px;
  padding-inline: clamp(16px, 10vw - 50px, 65px);
  /* gap: 102px; */
  gap: clamp(16px, 21vw - 197px, 102px);

  & > :nth-child(1) {
    display: grid;
  }

  & > :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 26px;

    flex-wrap: wrap;

    max-width: 100%;

    border: 2px solid green;

    & > :nth-child(1) {
      font-weight: 800;
    }

    & > :nth-child(2) {
      list-style: none;
      display: flex;
      gap: 8px;

      button {
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        border-radius: 8px;
        border: none;

        padding: 5px 10px;

        background-color: ${SECONDARY_ORG_PLUS.ASH_BLUE};
      }
    }

    & > :nth-child(3) {
      text-decoration: none;
      cursor: pointer;

      color: ${PRIMARY.PRIMARY_CTA};
      font-weight: 600;
      text-align: center;
      white-space: nowrap;

      border-radius: 8px;
      border: 2px solid ${PRIMARY.PRIMARY_CTA};

      padding: 8px 48px;

      &:hover {
        color: ${NEUTRALS.OFF_WHITE};

        border: 2px solid ${PRIMARY.PRIMARY_CTA};

        background-color: ${PRIMARY.PRIMARY_CTA};
      }
    }
  }
`
