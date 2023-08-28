import styled from "styled-components"

export const A_D_Results_FilterListMainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-right: 45px;

  & > :nth-last-child(2) {
    & > :nth-child(2) {
      @media screen and (min-width: 1078px) and (max-width: 1140px) {
        left: -60%;
      }
    }
  }
`
