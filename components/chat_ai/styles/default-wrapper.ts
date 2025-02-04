import styled from "styled-components"

export const DefaultWrapper = styled.div`
  /* min-height: 100dvh; */
  margin-block: calc(8px * 23) calc(8px * 14);

  & > :nth-child(1) {
    margin-inline: auto;
  }

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
`
