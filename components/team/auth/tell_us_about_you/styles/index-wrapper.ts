import styled from "styled-components"

export const TellUsAboutYouWrapper = styled.div`
  border: 2px solid green;

  min-height: 50dvh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  justify-content: center;
  justify-self: center;

  gap: 28px;

  a {
    padding: 24px;
    border: 2px solid green;
  }
`
