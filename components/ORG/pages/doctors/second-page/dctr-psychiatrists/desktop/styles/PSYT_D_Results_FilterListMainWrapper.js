import styled from "styled-components"

export const PSYT_D_Results_FilterListMainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-right: 45px;

  & > :nth-last-child(3) {
    & > :nth-child(2) {
      @media (max-width: 1091px) {
        left: -10vw;
      }
    }
  }

  & > :nth-last-child(2) {
    & > :nth-child(2) {
      @media (min-width: 1179px) and (max-width: 1250px) {
        left: -10vw;
      }
    }
  }
`
