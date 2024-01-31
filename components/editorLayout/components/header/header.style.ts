import styled from "styled-components"

export const Header_Wrapper = styled.div`
  display: flex;
  height: 80px;
  padding: 24px;
  width: 1327px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d3ced5;
  background: #fff;
  .title-area {
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    .title-text {
      color: #1d1a1e;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 34px;
    }
  }
  .button-area {
    .button-inner {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`
export const Header_Editor_Options = styled.div`
  display: flex;
  height: 52px;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: #fff;
`
