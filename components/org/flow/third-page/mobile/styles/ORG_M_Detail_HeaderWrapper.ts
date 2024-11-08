import styled from "styled-components"

type Props = {
  activeIndex: number
}
export const ORG_M_Detail_HeaderWrapper = styled.ul<Props>`
  margin-top: 14px;
  height: 47px;
  display: flex;
  border: 1px solid #c8c8c8;
  justify-items: space-between;
  align-items: center;
  width: 100%;
  list-style: none;
  gap: 10px;
  padding: 0px 10px;
  & > li {
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    text-transform: capitalize;
    width: 100%;
    color: black;
    & > :nth-child(1) {
      & > :nth-child(1) {
        color: black;
        text-decoration: none;
        font-weight: 400;
      }
    }
  }
  & > :nth-child(${(props) => props.activeIndex}) {
    & > h4 {
      border-bottom: 2px solid black;
      padding: 3px 10px;
    }
  }
`
