import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const HeaderProgressWrapper = styled.div`
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
    top: 0px;
    left: 0px;
    background-color: ${PRIMARY.PRIMARY_LOGO};
    height: 10px;
    width: 25%;
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
`
