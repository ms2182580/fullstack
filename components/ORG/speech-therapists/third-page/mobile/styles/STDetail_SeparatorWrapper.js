import styled from "styled-components"

export const STDetail_SeparatorWrapper = styled.div`
  width: 100%;
  height: ${(x) => (x.isLastOne ? `56px` : `24px`)};
  background-color: #dbd6dc;
`
