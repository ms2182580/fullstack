import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  isActive: boolean
}

export const Dashboard_Sidebar_D_ActiveLinkWrapper = styled.div<Props>`
  & > :nth-child(1) {
    color: ${({ isActive }) => (isActive ? PRIMARY.PRIMARY_CTA : "black")};
    background-color: ${({ isActive }) =>
      isActive ? PRIMARY.PRIMARY_BACKGROUND : "white"};

    display: flex;
    padding-top: 16px;
    padding-bottom: 16px;
    text-decoration: none;
    color: black;
    & > :nth-child(1) {
      margin-left: 24px;
      margin-right: 10px;
    }
    & > :nth-child(2) {
      border: none;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px; /* 168.75% */
    }
  }
`
