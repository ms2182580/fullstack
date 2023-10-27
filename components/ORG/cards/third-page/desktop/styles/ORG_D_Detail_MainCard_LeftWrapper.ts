import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_MainCard_LeftWrapper = styled.aside`
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  display: flex;
  flex-direction: column;

  padding: 24px;

  border-radius: 8px 0 0 8px;

  & > :nth-child(1) {
    position: relative;
    overflow: hidden;
    border-top-left-radius: 8px;
    margin-bottom: 24px;

    margin-bottom: 8px;
    border-radius: 8px;
    border: none;

    height: 210px;

    & > :nth-child(2) {
      cursor: pointer;
      position: absolute;
      left: 16px;
      top: 16px;
    }

    & > :nth-child(3) {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }
  }

  & > :nth-child(3) {
    margin-left: 22px;
    margin-bottom: 16px;
    margin-right: 9px;

    & > *:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`
