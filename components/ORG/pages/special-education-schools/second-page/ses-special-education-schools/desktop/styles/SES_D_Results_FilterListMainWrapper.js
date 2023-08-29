import styled from "styled-components"

export const SES_D_Results_FilterListMainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-right: 45px;

  & > :nth-last-child(2) {
    & > :nth-child(2) {
      @media (max-width: 1085px) {
        left: -60%;
      }
    }
  }
`
