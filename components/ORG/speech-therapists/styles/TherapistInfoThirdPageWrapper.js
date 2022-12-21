import styled from "styled-components"

export const TherapistInfoThirdPageWrapper_Left = styled.div`
  margin-right: 47px;
  margin-bottom: 24px;

  & > :first-child {
    margin-bottom: 4px;
  }

  & > :not(:first-child) {
    display: inline;
  }
`

export const TherapistInfoThirdPageWrapper_Right = styled.div`
  margin-bottom: ${(x) => (x.isFirst ? "40px" : null)};

  & > :first-child {
    margin-bottom: 8px;
  }
`
