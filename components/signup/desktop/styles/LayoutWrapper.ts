import styled from "styled-components"

type Props = {
  isShowSidebar: boolean
}
export const LayoutWrapper = styled.div<Props>`
  width: 1440px;
  height: 100vh;
  & > :nth-child(1) {
    display: flex;
    & > :nth-child(1) {
      width: ${(props) => (props.isShowSidebar ? "266px" : "0px")};
    }
    & > :nth-child(2) {
      width: 100%;
    }

    .bottom {
      position: fixed;
      bottom: 0px;
      display: flex;
      display: flex;
      width: 1440;
      background-color: ${(props) =>
        props.isShowSidebar ? "white" : "#fff8f5"};
      & > :nth-child(1) {
        gap: 24px;
        padding: 10px;
        width: ${(props) => (props.isShowSidebar ? "1174px" : "1440px")};
        border-top: 1px solid #d3ced5;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }
    }
  }
`
