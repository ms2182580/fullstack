import styled from "styled-components"

const paddingOnTable = "44px"

export const ORG_D_Detail_TableCakeWrapper = styled.article`
  display: grid;
  grid-auto-flow: column;
  gap: calc(8px * 5);

  & > :nth-child(1) {
    display: grid;

    box-shadow: 0px 3.6px 3.6px 0px rgba(0, 0, 0, 0.25);

    & > :nth-child(1) {
      font-size: 18px;
      display: flex;
      align-items: center;
    }

    & > :nth-child(odd),
    & > :nth-child(2) > :nth-child(even) {
      background-color: rgba(211, 214, 215, 0.2);

      width: 100%;

      padding-inline: ${paddingOnTable};
    }

    & > :nth-child(2) > :nth-child(odd) {
      padding-left: ${paddingOnTable};
      padding-right: ${paddingOnTable};
    }

    & > :nth-child(2) {
      list-style: none;

      display: grid;

      & > * {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > * {
          font-weight: 400;
        }
      }
    }
  }
`
