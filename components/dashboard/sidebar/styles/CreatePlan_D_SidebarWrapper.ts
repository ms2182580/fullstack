import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  currentOption: number
}
export const CreatePlan_D_SidebarWrapper = styled.div<Props>`
  & > :nth-child(1) {
    display: flex;
    flex-direction: column;
    & > :nth-child(2) {
      margin-top: -22px;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
    }
  }

  & > :nth-child(2) {
    list-style-type: none;
    gap: 23px;
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    & > :nth-child(${(props) => props.currentOption}) {
      background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    }
    & > li {
      cursor: pointer;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > :nth-child(2) {
        color: ${PRIMARY.PRIMARY_CTA};
        text-align: center;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 166.667% */
      }
    }
  }
`
