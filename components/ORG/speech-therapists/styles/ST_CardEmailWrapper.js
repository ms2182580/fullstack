import styled from "styled-components"

export const ST_CardEmailWrapper = styled.div`
  margin-bottom: 21px;
  display:flex;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
  }
  & > div:nth-child(1) > :nth-child(1) {
    margin-right: 14px;
  }
  & > :nth-child(2) {
    margin-left: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  
`