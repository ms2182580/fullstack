import styled from "styled-components"

export const Home_HowItWorks_FinalThree_DWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 152px;

  & > :nth-child(1) {
    display: grid;
    row-gap: 120px;
  }

  & > :nth-child(2) {
    margin-top: auto;
    margin-bottom: auto;

    margin-left: auto;
    margin-right: -56px;
  }
`
