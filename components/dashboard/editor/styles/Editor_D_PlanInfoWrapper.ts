import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const Editor_D_PlanInfoWrapper = styled.div`
  width: 930px;
  height: 860px;
  background-color: #fff;
  display: flex;
  width: 930px;
  height: 869px;
  padding: 72px 32px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;

  & > :nth-child(1) {
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    width: 100%;
    padding: 16px;

    //first grid
    & > :nth-child(1) {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 10px;
      width: 100%;
      height: 100%;

      & > :nth-child(1) {
        background-color: white;
        height: 201px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #d3ced5;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.04);
        & > :nth-child(1) {
          display: flex;
          width: 110px;
          height: 110px;
          padding: 40px 0px 34px 0px;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          background: #f3f1f3;
        }
        & > :nth-child(2) {
          width: 174px;
          margin-left: 24px;
          & > :nth-child(1) {
            display: flex;
            color: #1d1a1e;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
          & > :nth-child(2),
          & > :nth-child(3),
          & > :nth-child(4) {
            display: flex;
            color: #1d1a1e;
            font-size: 14px;
            color: #3a343c;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
            & > :nth-child(1) {
              color: #3a343c;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px;
            }
          }
        }
      }
      & > :nth-child(2) {
        background-color: white;
        height: 201px;
        /* display: flex; */
        border: 1px solid #d3ced5;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.04);
        padding: 24px;
        & > :nth-child(1) {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        & > :nth-child(2) {
          color: #3a343c;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
        }
      }
    }
    //remain grid
    & > :nth-child(2) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
      margin-top: 15px;
      & > * {
        background-color: white;
        padding: 24px;
        border: 1px solid #d3ced5;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.04);
        height: 285px;
        & > :nth-child(1) {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        & > :nth-child(2) {
          color: #3a343c;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
        }
      }
    }
  }
`
