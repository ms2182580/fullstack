import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { blurEffect } from "@/components/ui/blur/blur"
import styled, { css } from "styled-components"

type Props = {
  isBackend?: boolean
}

export const ORG_D_Detail_AtTheSameClinicWrapper = styled.section<Props>`
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding-bottom: 32px;

  & > :nth-child(1) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    padding: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    margin-bottom: 32px;
  }

  & > :nth-child(2) {
    padding-inline: 24px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-items: center;

    gap: 88px;

    flex-wrap: wrap;

    list-style: none;

    position: relative;

    ${({ isBackend }) =>
      isBackend &&
      css`
        padding: 16px;

        ${blurEffect({})}
      `}

    & > * {
      display: grid;
      justify-items: flex-start;

      gap: 16px;

      button {
        padding: 12px 24px;
        font-size: 16px;

        border: 2px solid ${PRIMARY.PRIMARY_CTA};
        border-radius: 8px;

        background-color: ${NEUTRALS.OFF_WHITE};

        cursor: pointer;

        &:hover,
        &:focus-visible {
          background-color: ${PRIMARY.PRIMARY_CTA};
          color: ${NEUTRALS.OFF_WHITE};
        }
      }
    }
  }
`
