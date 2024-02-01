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
      }
    }
  }
  & > :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  #editor {
    width: 930px !important;
    height: 700px !important;
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
    padding: 30px;
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
    height: 32px;
    border-radius: 10px;
  }
`
