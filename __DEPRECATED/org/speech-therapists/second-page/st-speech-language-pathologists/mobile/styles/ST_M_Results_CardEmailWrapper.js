import styled from "styled-components"

export const ST_M_Results_CardEmailWrapper = styled.div`
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    & > :nth-child(1){
      margin-right: 14px;
    }
  }
  
  & > :nth-child(2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
`
