import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const AsideWrapper = styled.div`
  padding-inline: 12px;
  padding-top: calc(8px * 4);

  border-right: 1px solid ${NEUTRALS.BORDER};

  display: flex;
  flex-direction: column;

  min-width: 264px;

  & > :nth-child(1) {
    margin-inline: auto;
  }

  & > :nth-child(2) {
    margin-top: calc(8px * 6);
  }

  & > ul {
    margin-top: calc(8px * 3);

    & > li {
      border-radius: 6px;

      & > a {
        display: flex;
        gap: 12px;

        padding: 16px 24px;
        border-radius: inherit;

        font-weight: 500;
      }
    }
  }

  & > :last-child {
    margin-top: auto;

    cursor: default;

    & > p {
      border-radius: 6px;
    }
  }
`
