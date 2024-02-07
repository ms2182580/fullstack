import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  isFull: boolean
  isHistory: boolean
}
export const INDEX_D_AIChatPopupWrapper = styled.div<Props>`
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: 868px;
  background-color: white;
  width: ${(props) => (props.isFull ? "900px" : "398px")};
  border-left: 1px solid #e4e4e4;
  box-shadow: 0px 0px 5px 0px rgba(123, 123, 123, 0.25);
  z-index: 9999;
  & > :nth-child(1) {
    display: flex;
    width: ${(props) => (props.isFull ? "900px" : "398px")};
    height: 72px;
    padding: 24px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d3ced5;

    & > :nth-child(1) {
      & > :nth-child(1) {
        cursor: pointer;
      }
      display: flex;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    & > :nth-child(2) {
      display: flex;
      gap: 16px;
      & > :nth-child(1),
      & > :nth-child(2) {
        cursor: pointer;
        width: 44px;
        height: 44px;
        padding: 10px;
        border-radius: 8px;
      }
      & > :nth-child(1) {
        background-color: ${(props) =>
          props.isHistory ? `${PRIMARY.PRIMARY_BACKGROUND}` : "white"};
      }
      & > :nth-child(2) {
        background-color: ${(props) =>
          props.isFull ? `${PRIMARY.PRIMARY_BACKGROUND}` : "white"};
      }
    }
  }
  & > :nth-child(2) {
    padding: 32px;
    height: 700px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
    &::-webkit-scrollbar {
      width: 10px;
    }
  }
  & > :last-child {
    padding: 0px 20px 0px 20px;
    margin-top: 25px;
  }
`
