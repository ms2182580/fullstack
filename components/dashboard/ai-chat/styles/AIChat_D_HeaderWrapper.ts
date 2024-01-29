import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  isShow: boolean
}
export const AIChat_D_HeaderWrapper = styled.div<Props>`
  > :nth-child(1) {
    display: flex;
    width: 1200px;
    height: 72px;
    padding: 15px;
    justify-content: space-between;
    align-items: flex-end;
    gap: 10px;
    flex-shrink: 0;
    & > :nth-child(1) {
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.4px;
    }
    & > :nth-child(2) {
      width: 44px;
      height: 44px;
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #474747;
      cursor: pointer;
      background-color: ${(props) =>
        props.isShow ? `${PRIMARY.PRIMARY_CTA}` : "white"};

      & > svg {
        fill: ${(props) => (props.isShow ? "white" : "black")};
      }
    }
  }
`
