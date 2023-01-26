import styled from "styled-components"

export const BreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;

  & > p {
    cursor: pointer;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 2rem;
  }

  svg,
  p {
    margin-right: 22px;
  }
`
