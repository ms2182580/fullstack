import styled from "styled-components"

export const ST_Mobile_CardInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  white-space: none;
  margin: auto;

  & > :nth-child(1) {
    width: 100%;
  }

  & > :nth-child(2) {
    & > * {
      display: ${(x) => (x.isThirdPage ? `inline` : ``)};
    }
  }
`
