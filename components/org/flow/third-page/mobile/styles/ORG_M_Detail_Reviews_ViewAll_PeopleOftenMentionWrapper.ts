import { Classes_ORG_D_Detail_IsModal } from "@/utils/org/third-page/IsModal"
import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ORG_M_Detail_Reviews_ViewAll_PeopleOftenMentionWrapper = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;

  & > :nth-child(3) {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    & > :nth-child(1) {
      display: flex;
      gap: 16px;

      & > * {
        border: 1px solid #686868;
        height: 20px;
        padding: 0px 11px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 8px;
        background-color: ${NEUTRALS.OFF_WHITE};
        clear: both;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
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
      cursor: pointer;
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

        & > :nth-child(1) {
          border: solid 2px ${PRIMARY.PRIMARY_CTA};
          padding: 4px 20px;
          border-radius: 19px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;

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
  & > :nth-child(4) {
    margin-top: -20px;
  }
  & > :nth-child(5) {
    margin-top: -10px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 10px;
    width: 97%;
    & > :nth-child(1) {
      border: 1px solid #686868;
      height: 20px;
      /* padding: 0px 11px; */
      border-radius: 8px;
      cursor: pointer;
      font-size: 8px;
      background-color: ${NEUTRALS.OFF_WHITE};
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    & > :nth-child(2) {
      border: 1px solid #686868;
      height: 20px;
      padding: 0px 11px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 8px;
      background-color: ${NEUTRALS.OFF_WHITE};
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      & > :nth-child(1) {
        width: 14px;
        height: 14px;
      }
      & > :nth-child(2) {
        width: 100%;
        border: none;
        padding: 10px 0px;
        ::placeholder {
          font-size: 8px;
        }
      }
    }
  }
`
