import styled from "styled-components"

export const DefaultWrapper = styled.div`
  margin-block: calc(8px * 23) calc(8px * 14);

  & > :nth-child(1) {
    margin-inline: auto;
  }

  & > :nth-child(2) {
    margin-top: calc(8px * 6);

    text-align: center;
  }

  & > :nth-child(3) {
    margin-top: 8px;

    list-style: none;
    display: flex;
    justify-content: center;

    flex-wrap: wrap;

    gap: calc(8px * 2);

    & > * {
      max-width: 290px;
    }

    @media (max-width: 1285px) {
      flex-direction: column;

      & > * {
        max-width: 100%;
        & > :nth-child(3) {
          grid-auto-flow: column;
          width: max-content;
        }
      }
    }
  }
`
