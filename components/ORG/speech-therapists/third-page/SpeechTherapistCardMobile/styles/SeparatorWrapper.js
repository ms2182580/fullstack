import styled from "styled-components"

export const SeparatorWrapper = styled.div`
  width: 100%;
  height: ${(x) => (x.isLastOne ? `56px` : `24px`)};
  background-color: #dbd6dc;
  margin-top: ${(x) => (x.sticky && x.isFirst ? `48px` : `0px`)};
`
