import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

type props = {
  progress: number
  isGap: boolean
}
export const HeaderProgressWrapper = styled.div<props>`
  display: flex;
  gap: ${(props) => (props.isGap ? "10px" : "0px")};
  & > :nth-child(1) {
    display: flex;
    margin-top: 32px;
    display: flex;
    gap: 1px;
    & > :nth-child(1) {
      text-align: justify;
      font-size: 36px;
      font-style: normal;
      font-weight: 800;
      line-height: 51px;
      letter-spacing: 1.44px;
    }
    & > :nth-child(2) {
      padding-bottom: 10px;
      text-align: justify;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px;
    }
  }
  & > :nth-child(2) {
    width: 100%;
    position: relative;
    & > :nth-child(1) {
      background-color: #f3f1f3;
      margin-top: 50px;
      display: flex;
      width: 100%;
      height: 10px;
    }

    & > :nth-child(2) {
      position: absolute;
      top: 50px;
      left: 0px;
      background-color: ${PRIMARY.PRIMARY_LOGO};
      height: 10px;
      width: ${(props) => `${props.progress}%`};
      display: flex;
    }
    & > :nth-child(3) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      & > * {
        margin-top: 10px;
        text-align: center;
        color: #3a343c;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 27px;
      }
    }
  }
`
