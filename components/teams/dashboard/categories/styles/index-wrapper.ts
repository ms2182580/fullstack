import styled from "styled-components"

export const INDEX_CategoriesWrapper = styled.div`
  display: grid;
  place-items: center;

  margin-block: calc(8px * 23) calc(8px * 14);
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

    & > *:not(:first-child) {
      position: relative;

      box-shadow: none;
      cursor: not-allowed;

      & > * {
        opacity: 0.4;
      }

      & > :nth-child(3) {
        & > li {
          background-color: hsl(0, 0%, 50.2%, 0.4);
        }
      }

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        /* background-color: gray; */
        /* opacity: 0.8; */

        border-radius: inherit;
      }
    }

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
