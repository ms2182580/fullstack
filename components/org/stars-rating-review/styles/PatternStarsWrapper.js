import styled from "styled-components"

export const PatternStarsWrapper = styled.div`
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > :nth-child(1) > *:not(:last-child) {
    margin-right: ${({ modal }) => (modal ? `2px` : `8px`)};
  }
`
