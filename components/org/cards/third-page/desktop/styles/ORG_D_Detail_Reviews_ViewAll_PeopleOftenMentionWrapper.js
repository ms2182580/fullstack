import { Classes_ORG_D_Detail_IsModal } from "@/utils/org/third-page/IsModal"
import styled, { css } from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_Reviews_ViewAll_PeopleOftenMentionWrapper = styled.div`
  display: grid;
  gap: 16px;

  position: relative;

  & > :nth-child(1) {
    position: relative;

    ${({ isBackend }) =>
      isBackend &&
      css`
        padding: 16px;
        width: fit-content;
      `}
  }

  & > :nth-child(3) {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;

    margin-bottom: 24px;

    & > :nth-child(1) {
      display: flex;
      gap: 16px;

      position: relative;
      padding: 4px;

      ${({ isBackend }) => isBackend && css``}

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

  &.${Classes_ORG_D_Detail_IsModal.IS_MODAL} {
    & > :nth-child(3) {
      margin-bottom: 0px;
      & > :nth-child(1) {
        & > * {
          border-radius: 19px;
        }
      }

      & > :nth-child(2) {
        all: unset;

        position: relative;

        ${({ isBackend }) => isBackend && css``}

        & > :nth-child(1) {
          border: solid 2px ${PRIMARY.PRIMARY_CTA};
          padding: 4px 20px;
          border-radius: 19px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;

          & > :nth-child(1) {
            position: absolute;
            bottom: 100%;
            bottom: calc(100% + 13px);
            left: 0;

            font-weight: 600;
          }
        }
      }

      &:after {
        all: unset;
      }
    }
  }
`
