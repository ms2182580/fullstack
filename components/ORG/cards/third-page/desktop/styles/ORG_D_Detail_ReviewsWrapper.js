import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_ReviewsWrapper = styled.aside`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: grid;
  gap: 24px;
  position: relative;

  & > :not(:last-child) {
    padding-inline: 24px;
  }

  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 24px;
    padding-bottom: 24px;

    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    border-radius: 8px 8px 0 0;

    & > :nth-child(1) {
      & > span {
        color: ${SEMANTICS.HYPERLINK_NORMAL};
      }
    }

    & > :nth-child(2) {
      display: flex;
      align-items: center;
      gap: 8px;

      padding: 8px 48px 8px 24px;

      border-radius: 8px;
      border: 2px solid ${PRIMARY.PRIMARY_CTA};
      background-color: ${NEUTRALS.OFF_WHITE};

      color: ${PRIMARY.PRIMARY_CTA};

      font-size: 16px;
      font-weight: 600;

      cursor: pointer;

      &:hover,
      &:focus {
        background-color: ${PRIMARY.PRIMARY_CTA};
        color: ${NEUTRALS.OFF_WHITE};

        & > :nth-child(1) {
          fill: ${NEUTRALS.OFF_WHITE};
        }
      }
    }
  }

  & > :nth-child(2) {
    & > :nth-child(2) {
      font-weight: 600;
      text-decoration: underline;
      color: ${SEMANTICS.HYPERLINK_NORMAL};

      cursor: pointer;
    }
  }

  & > :nth-child(5) {
    justify-self: flex-end;
    margin-right: 24px;
    margin-bottom: 24px;

    color: ${SEMANTICS.HYPERLINK_NORMAL};
    font-weight: 600;

    cursor: pointer;
  }
`
