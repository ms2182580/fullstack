import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const INDEX_D_EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f3f1f3;

  & > :nth-child(1) {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 20px;

    & > :nth-child(1) {
      color: #1d1a1e;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    & > :nth-child(3) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      & > :nth-child(1),
      & > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 103px;
        height: 34px;
        border-radius: 8px;
        background: #f3f1f3;
        color: #1d1a1e;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
        text-align: center;
      }

      & > :nth-child(2) {
        gap: 5px;
        margin-left: 60px;
      }
    }
  }
  & > :nth-child(2) {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    gap: 24px;

    & > :nth-child(2) {
      & > :nth-child(1) {
        display: flex;

        & > * {
          padding: 12px 32px;

          font-size: 14px;
          font-weight: 400;

          border-top-left-radius: 8px;
          border-top-right-radius: 8px;

          text-transform: capitalize;
        }

        p {
          background-color: ${NEUTRALS.OFF_WHITE};

          color: #3a343c;
        }

        a {
          background-color: ${NEUTRALS.LIGHT_GREY};

          cursor: pointer;

          color: #746779;

          text-decoration: none;

          &:hover,
          &:focus-visible {
            filter: drop-shadow(1px 2px 3px hsla(0, 0%, 0%, 0.15));
          }
        }
      }
    }
  }

  #editor {
    width: 930px !important;
    height: 860px !important;
  }
  #toolbar {
    width: 100% !important;
  }
  #toolbar .fr-toolbar {
    border: none;
    border-radius: 0px;
  }

  .fr-box.fr-basic .fr-wrapper {
    border: none;
  }
  .fr-btn-grp.fr-float-left {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-right: 1px solid #d3ced5;
    height: 28px;
  }

  .fr-toolbar .fr-btn-wrap,
  .fr-popup .fr-btn-wrap,
  .fr-modal .fr-btn-wrap {
    margin-right: 10px;
  }

  .fr-command.fr-btn.fr-dropdown.fr-selection {
    margin-right: 10px !important;
    border: 1px solid black;
    width: 60px;
    height: 28px;
    border-radius: 10px;
  }
  .fr-command.fr-btn.fr-dropdown.fr-selection::after {
    top: 5px;
    right: 19px;
    content: url(/svg/arrow-down.svg);
    border: 0px;
  }

  .fr-command.fr-btn.fr-dropdown {
    width: 60px;
    height: 28px;
    border-radius: 10px;
  }
  .fr-command.fr-btn.fr-dropdown::after {
    top: 5px;
    right: 19px;
    content: url(/svg/arrow-down.svg);
    border: 0px;
  }
  .fr-command.fr-btn.fr-dropdown.fr-options {
    margin-top: 10px !important;
    margin-left: -19px;
    display: none;
    /* top: 5px;
    right: 19px;
    content: url(/svg/arrow-down.svg);
    border: 0px; */
  }
`
