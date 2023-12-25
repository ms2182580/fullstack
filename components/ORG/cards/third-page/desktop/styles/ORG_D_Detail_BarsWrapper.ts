import styled from "styled-components"

export const ORG_D_Detail_BarsWrapper = styled.section`
  & > :nth-child(1) {
    text-transform: capitalize;
    margin-bottom: 8px;

    & > * {
      font-size: 18px;
    }
  }

  & > :nth-child(2) {
    & > * {
      display: flex;
      justify-content: space-between;

      & > * {
        font-size: 18px;
      }
    }
  }
`
