import styled from "styled-components"

export const INDEX_HomeNWrapper = styled.div`
  background-image: url("/background/background1.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: 180px;

  margin-top: 77px;
  /* padding-bottom: 56px; */

  display: grid;
  gap: 77px;

  & > :not(:last-child) {
    padding-inline: 56px;
  }

  & > :nth-child(4) {
    background-image: url("/background/background4.svg");
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
`
