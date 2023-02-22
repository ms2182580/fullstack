import styled from "styled-components"

export const HeaderSignUpMobileWrapper = styled.div`
  margin-inline: 16px;
  margin-top: 22px;

  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;

  & > :nth-child(1) {
    cursor: pointer;
  }

  & > :nth-child(2) {
    justify-self: center;
  }
`
