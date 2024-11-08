import styled from "styled-components"
import { PRIMARY } from "../../../../../../assets/Colors"

export const ORG_M_Detail_ScheduleModalWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  background: #d9d9d9;
  width: 100%;
  height: 100vh;
  padding: 100px 20px;
  display: flex;

  & > :nth-child(1) {
    background-color: white;
    border-radius: 10px;
    height: 554px;
    width: 100%;
    padding: 10px 15px;
    & > :nth-child(1) {
      display: flex;
      align-items: end;
      justify-content: right;
      background-color: white;
      cursor: pointer;
    }
    & > :nth-child(2) {
      font-size: 14px;
      font-weight: 800;
      text-align: center;
      padding: 0px 20px;
      margin-bottom: 15px;
    }
    & > :nth-child(3) {
      display: flex;
      gap: 20px;
      & > :nth-child(1) {
        object-fit: cover;
        border-radius: 10px;
      }
      & > :nth-child(2) {
        font-size: 18px;
        font-weight: 500;
      }
    }
    & > :nth-child(4) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      & > :nth-child(2) {
        background-color: ${PRIMARY.PRIMARY_BACKGROUND};
        border-radius: 10px;
        padding: 20px;
        font-size: 16px;
        text-align: center;
        & > :nth-child(2) {
          font-style: normal;
          font-weight: 600;
        }
        & > :nth-child(3) {
          font-style: normal;
          font-weight: 600;
        }
      }
    }
    & > button {
      width: 100%;
      margin-top: 20px;
      display: flex;
    }
    & > :nth-child(6) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;
      & > a {
        color: blue;
      }
    }
  }
`
