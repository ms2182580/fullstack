import styled from "styled-components"

export const ORG_D_Results_CardLocationWrapper = styled.div`
  & > :nth-child(2) {
    & > :not(:last-child) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 8px;
    }

    & > :last-child {
      font-weight: 500;
    }
  }
`
