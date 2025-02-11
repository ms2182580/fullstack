import styled from "styled-components"

export const INDEX_ChatAIWrapper = styled.div`
  display: grid;
  place-items: center;

  margin-inline: 8px;

  & > :nth-child(2) {
    margin-top: calc(8px * 6);
  }

  & > :nth-child(3) {
    margin-top: 8px;

    list-style: none;
    display: flex;
    justify-content: center;

    flex-wrap: wrap;

    gap: calc(8px * 2);
    max-width: 1200px;

    @media (max-width: 1302px) {
      flex-direction: column;

      min-width: 77%;

      & > * {
        & > :nth-child(3) {
          grid-auto-flow: column;
          width: max-content;
        }
      }
    }
  }

  & > :nth-child(4) {
    margin-top: calc(8px * 14);
  }
`
