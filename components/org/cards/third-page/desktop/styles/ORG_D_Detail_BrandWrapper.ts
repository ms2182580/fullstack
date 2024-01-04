import styled from "styled-components"

export const ORG_D_Detail_BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  & > :nth-child(2) {
    & > :nth-child(1) {
      font-weight: 700;
    }

    & > :nth-child(2) {
      text-transform: capitalize;
    }
  }
`
