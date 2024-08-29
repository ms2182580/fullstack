import { css } from "styled-components"

export const dialogCSS = () => css`
  margin: auto;

  position: fixed;
  inset: 0;

  ::backdrop {
    background-color: rgba(44, 42, 42, 0.61);
  }
`
