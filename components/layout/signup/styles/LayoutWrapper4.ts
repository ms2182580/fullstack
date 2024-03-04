import styled from "styled-components"

type Props = {
  isShowSidebar?: boolean
  colorBottom?: boolean
}
export const LayoutWrapper4 = styled.div<Props>`
  display: flex;
  /* justify-content: center; */

  border: 2px solid crimson;

  /* & > :nth-child(1) {
    width: ${(props) => (props.isShowSidebar ? "266px" : "0px")};
  } */

  & > :nth-child(2) {
    /* width: 100%; */
  }

  .bottom {
    border: 2px solid crimson;

    position: fixed;
    bottom: 0px;
    display: flex;
    /* display: flex; */
    /* background-color: ${(props) =>
      props.isShowSidebar ? "white" : "#FFF2ED"}; */
    background-color: ${(props) => props.colorBottom && "#FFF2ED"};

    & > :nth-child(1) {
      gap: 24px;
      padding: 10px;
      /* width: ${(props) => (props.isShowSidebar ? "1174px" : "1440px")}; */

      width: 100%;
      border-top: 1px solid #d3ced5;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
`
