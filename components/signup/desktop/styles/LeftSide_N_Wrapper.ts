import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const LeftSide_N_Wrapper = styled.aside`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 266px;
  min-height: 100vh;

  padding: 0px 16px;

  border-radius: 0px 24px 0px 0px;
  background: ${PRIMARY.PRIMARY_CTA};

  & > :nth-child(1) {
    margin-top: 32px;
    display: flex;
    gap: 1px;

    & > :nth-child(1) {
      color: #f3f1f3;
      text-align: justify;
      font-size: 36px;
      font-style: normal;
      font-weight: 800;
      line-height: 51px;
      letter-spacing: 1.44px;
    }
    & > :nth-child(2) {
      padding-bottom: 10px;
      color: #f3f1f3;
      text-align: justify;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px;
    }
  }
  & > :nth-child(2) {
    margin-top: 112px;
    color: #f3f1f3;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 54px;
  }
  & > :nth-child(3) {
    color: #f3f1f3;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
`
