import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const INDEX_ORG_Detail_MainCard = styled.div`
  position: relative;
  padding-bottom: 8px;
  & > :nth-child(1) {
    padding: 28px 16px;
    display: flex;
    gap: 9px;
    & > :nth-child(1) {
      width: 84;
      height: 84;
      object-fit: cover;
    }
    & > :nth-child(2) {
      display: flex;
      justify-content: space-between;
      width: 100%;
      & > :nth-child(1) {
        & > :nth-child(1) {
          font-size: 16px;
          font-style: normal;
          font-weight: 800;
          letter-spacing: 0.16px;
          display: block;
        }
        & > :nth-child(2) {
          font-size: 10px;
          font-style: normal;
          font-weight: 600;
          letter-spacing: 0.1px;
          display: block;
        }
        & > :nth-child(3) {
          color: ${NEUTRALS.DARK_GREY};
          font-size: 10px;
          font-style: normal;
          font-style: normal;
          display: block;
        }
        & > :nth-child(4) {
          width: 131px;
          height: 18px;
          border-radius: 7px;
          border: 0.5px solid #686868;
          background: #fff;
          font-size: 8px;
          text-align: center;
        }
      }
    }
  }
  & > :nth-child(2) {
    display: flex;
    padding: 0px 16px;
    justify-content: space-between;
    & > button {
      border-radius: 7px;
      border: 0.5px solid #686868;
      background: #fff;
      font-size: 8px;
      padding: 3px 10px;
    }
  }
`
