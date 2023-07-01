import styled from "styled-components"

export const ST_M_HeaderWrapper = styled.div`
  padding: 32px 14px 16px 14px;

  & > a {
    position: relative;
  }

  & > a > span {
    display: inline;
    margin-left: calc(20px + 0.625rem);
  }

  & > a > svg {
    margin-top: auto;
    margin-bottom: auto;
    position: absolute;
    top: 50%;
    bottom: 50%;
  }
`
