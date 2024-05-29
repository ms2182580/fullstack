import { PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_AT_WCMD_WhereToBuyWrapper = styled.section`
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

  & > :nth-child(1) {
    padding: 8px 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    border-radius: 8px 8px 0 0;
  }

  & > :first-child ~ *:not(:last-child) {
    border-bottom: 1px solid rgba(108, 108, 108, 0.6);
  }

  & > :last-child {
    display: grid;
    justify-content: flex-end;
    margin-left: auto;

    padding: 8px 73px 32px 0;

    p {
      text-transform: capitalize;
      font-weight: 600;

      color: ${SEMANTICS.HYPERLINK_NORMAL};
      text-decoration: underline;

      cursor: default;

      &:hover,
      &:focus-visible {
        filter: brightness(120%);
      }
    }
  }
`
