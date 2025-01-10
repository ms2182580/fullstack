import styled from "styled-components"

export const ExpectedFeaturesWrapper = styled.div`
  padding: 36px;
  max-width: 900px;

  display: grid;
  gap: 64px;

  fieldset {
    padding: 16px;

    :not(pre) {
      li,
      p {
        & > code {
          background-color: hsl(0, 0%, 50.2%, 0.7);
          padding: 1px 8px;
          border-radius: 4px;
        }
      }
    }
  }

  ol,
  ul {
    margin-left: 8px;
  }

  li {
    margin-left: 24px;
  }

  & > h2 {
    border: 2px solid black;
    border-radius: 4px;

    padding: 8px;

    text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }

    & > span {
      text-decoration: underline;
      text-decoration-color: rebeccapurple;

      font-style: italic;

      color: hsl(125.9, 86.2%, 25.5%);
    }
  }
`
