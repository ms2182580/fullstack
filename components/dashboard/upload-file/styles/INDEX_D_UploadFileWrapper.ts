import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  isFile: boolean
}
export const INDEX_D_UploadFileWrapper = styled.div<Props>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 1024px;
  margin: auto;
  flex-shrink: 0;
  background: rgba(43, 30, 48, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  & > :nth-child(1) {
    display: flex;
    width: 558px;
    padding: 24px 32px;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #d3ced5;
    background: #fff;

    //close
    & > :nth-child(1) {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
    }

    //upload file
    & > :nth-child(2) {
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    //upload a previous
    & > :nth-child(3) {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    //upload box
    & > :nth-child(4) {
      display: flex;
      padding: 24px 10px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      align-self: stretch;
      border-radius: 16px;
      border: 1px dashed #908395;
      background: ${(props) =>
        props.isFile ? `${PRIMARY.PRIMARY_BACKGROUND}` : "white"};

      //upload text
      & > :nth-child(1) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: ${(props) => (props.isFile ? "start" : "center")};

        & > :nth-child(2) {
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 27px;
        }
        & > :nth-child(3) {
          color: ${PRIMARY.PRIMARY_CTA};
          margin-left: 5px;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-decoration-line: underline;
          cursor: pointer;
        }
      }

      //text
      & > :nth-child(2) {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: ${(props) => (props.isFile ? "start" : "center")};
        align-items: center;
        color: #908395;
        cursor: pointer;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
    }
    //Tips
    & > :nth-child(5) {
      margin-top: 32px;
      & > :nth-child(1) {
        color: #1d1a1e;
        display: flex;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
      }
      & > :nth-child(2) {
        color: #908395;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
      & > :nth-child(3) {
        margin-top: 16px;
        display: flex;
        height: 48px;
        padding: 12px 16px;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        border-radius: 8px;
        border: 1px solid #908395;
        background: #fff;
        color: #908395;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
      }
    }

    //quick
    & > :nth-child(6) {
      margin-top: 32px;
      display: flex;
      padding: 8px 12px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 13px;
      align-self: stretch;
      border-radius: 8px;
      background: #f3f1f3;

      & > :nth-child(1) {
        display: flex;
        gap: 10px;
        & > :nth-child(2) {
          color: #746779;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 27px;
        }
      }
      & > :nth-child(2),
      & > :nth-child(3),
      & > :nth-child(4),
      & > :nth-child(5) {
        margin-bottom: 2px;
        color: ${PRIMARY.PRIMARY_CTA};
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 27px;
      }
    }

    & > :nth-child(7) {
      margin-top: 32px;
      max-width: 130px;
    }
    //input
    & > :last-child {
      display: none;
    }
  }
`
