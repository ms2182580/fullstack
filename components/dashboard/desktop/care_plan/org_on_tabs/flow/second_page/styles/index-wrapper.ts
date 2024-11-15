import styled from "styled-components"

export const INDEX_D_OrgOnTabsSecondPageWrapper = styled.article`
  & > fieldset {
    height: 70dvh;

    display: grid;
    place-items: center;
    gap: calc(8px * 4);

    padding: calc(8px * 6);

    button {
      width: fit-content;
      padding-inline: 16px;
    }

    & > div {
      h3 {
        text-align: center;
      }
    }
  }
`
