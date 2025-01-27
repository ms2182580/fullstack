import styled from "styled-components"

export const OnlyDesktopLayoutWrapper = styled.div`
  display: grid;
  justify-items: center;

  font-family: "Poppins", sans-serif;

  & > :nth-child(1) {
    & > * {
      margin: 0;
    }

    gap: 8px;

    & > :nth-child(3) {
      order: 1;

      margin-top: 24px;

      text-align: center;
    }
  }
`
