import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

export const ORG_D_Detail_Reviews_ViewAll_PeopleOftenMentionWrapper = styled.div`
  display: grid;
  gap: 16px;

  position: relative;

  border: 2px solid crimson;

  & > :nth-child(2) {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;

    margin-bottom: 24px;

    & > :nth-child(1) {
      display: flex;
      gap: 16px;

      position: relative;
      padding: 4px;

      & > * {
        border: 1px solid #686868;
        padding: 4px 11px;
        border-radius: 8px;
        cursor: default;

        background-color: ${NEUTRALS.OFF_WHITE};

        display: flex;
        align-items: center;

        &:hover {
          filter: brightness(98%);
        }
      }
    }

    & > :nth-child(2) {
      border: solid 2px ${PRIMARY.PRIMARY_CTA};
      padding: 4px 20px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      cursor: default;

      position: relative;

      ${({ isBackend }) => isBackend && css``}
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0px;

      width: calc(100% - calc(24px * 2));
      height: 1px;
      background-color: #686868;
    }
  }
`
