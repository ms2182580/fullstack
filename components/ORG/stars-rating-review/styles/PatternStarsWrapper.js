import styled from "styled-components"

export const PatternStarsWrapper = styled.div`
  & > :nth-child(1) > *:not(:last-child) {
    margin-right: 8px;
  }
`
