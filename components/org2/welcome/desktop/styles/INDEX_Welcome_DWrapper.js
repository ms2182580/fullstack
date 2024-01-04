import styled from "styled-components"

export const INDEX_Welcome_DWrapper = styled.div`
  display: ${({ taskCompleted }) => taskCompleted && "none"};
`
