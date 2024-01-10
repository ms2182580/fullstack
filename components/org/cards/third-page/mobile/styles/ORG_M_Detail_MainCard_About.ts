import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_M_Detail_MainCard_AboutWrapper = styled.div`
  & > :nth-child(1) {
    display: flex;
    gap: 10px;
    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  & > :nth-child(2) {
    margin-top: 16px;
  }
  & > :nth-child(3) {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    background: ${PRIMARY.PRIMARY_CTA};
    color: white;
    font-size: 18px;
    font-weight: 600;
  }
`
