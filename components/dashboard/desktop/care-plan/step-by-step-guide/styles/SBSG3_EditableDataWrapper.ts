import styled from "styled-components"

export const SBSG3_EditableDataWrapper = styled.li`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: auto auto;
  grid-template-areas:
    "label label"
    "defaultValue icon";

  & > :nth-child(1) {
    grid-area: label;
  }

  & > :nth-child(2) {
    grid-area: defaultValue;
    border: none;

    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: hsl(208, 100%, 90.1%);
    }
  }

  & > :nth-child(3) {
    grid-area: icon;
    margin-left: auto;
  }
`
