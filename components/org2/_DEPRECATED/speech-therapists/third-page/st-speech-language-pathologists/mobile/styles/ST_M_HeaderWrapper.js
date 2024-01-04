import styled from "styled-components"

export const ST_M_HeaderWrapper = styled.div`
  /* padding: 28px 14px 16px 14px; */
  padding: 28px 28px 12px 28px;
  /* border: 2px solid crimson; */
  /* width:100%; */

  & > a {
    position: relative;

    & > span {
      display: inline;
      margin-left: calc(20px + 0.625rem);
    }

    & > svg {
      margin-top: auto;
      margin-bottom: auto;
      position: absolute;
      top: 50%;
      bottom: 50%;
    }
  }
`
