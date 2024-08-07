import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_ContactWrapper = styled.article`
  ul {
    list-style: none;
    display: grid;

    & > *:not(:last-child) {
      border-bottom: 1px solid ${NEUTRALS.BORDER};
      padding: 12px 0px;
    }

    & > li {
      display: grid;
      grid-template-columns: repeat(2, auto);
      justify-content: space-between;
      align-items: center;
    }

    & > :last-child {
      margin-top: 20px;
      & > p:nth-of-type(1) {
        text-transform: capitalize;
        font-weight: 600;
        color: ${SEMANTICS.HYPERLINK_NORMAL};
      }
    }

    & > li:nth-of-type(1) > span:nth-of-type(1),
    & > li:nth-of-type(2) > span:nth-of-type(1),
    & > li:nth-of-type(3) > span:nth-of-type(1),
    & > li > p:nth-of-type(2) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  & > :nth-child(2) {
    height: 167px;
  }
`
