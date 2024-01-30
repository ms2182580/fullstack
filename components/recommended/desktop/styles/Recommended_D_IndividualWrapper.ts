import styled from "styled-components"
import { PRIMARY } from "../../../../assets/Colors"

export enum All_Layouts_Accepted {
  like_PVES = "like_PVES",
  like_PAT = "like_PAT",
}

type INDEX_ORG_Search_DWrapper_Props = {
  someLayoutSpecial?: keyof typeof All_Layouts_Accepted
}

export const Recommended_D_IndividualWrapped = styled.div<INDEX_ORG_Search_DWrapper_Props>`
  & > :nth-child(1) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);

    position: relative;

    & > * {
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      background-color: white;
      display: grid;

      padding-bottom: 24px;

      max-width: 400px;

      & > :nth-child(1) {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        overflow: hidden;

        position: relative;

        & > :nth-child(2) {
          position: absolute;
          right: 16px;
          bottom: 16px;
        }
      }

      & > *:not(:first-child) {
        padding-inline: 24px;
      }

      & > :nth-child(2) {
        padding-top: 24px;
        font-weight: 800;
      }

      & > :nth-child(2),
      & > :nth-child(3) {
        padding-bottom: 8px;
      }
      & > :nth-child(5) {
        margin-top: 24px;
        margin-bottom: 24px;
      }

      & > :last-child {
        margin-top: auto;
        margin-inline: 24px;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 16px;

        font-size: 16px;
        font-weight: 600;
        color: hsl(210, 50%, 99.2%);
        line-height: 19.2px;
        letter-spacing: 0.256px;

        background-color: ${PRIMARY.PRIMARY_CTA};
        padding-top: 9px;
        padding-bottom: 9px;

        border-radius: 6.2px;
        border: medium;

        cursor: pointer;

        white-space: nowrap;

        &:hover,
        &:focus-visible {
          background-color: ${PRIMARY.PRIMARY_HOVER};
        }
      }
    }
  }
`
