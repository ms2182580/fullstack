import styled from "styled-components"

export const ST_M_Detail_SeparatorWrapper = styled.div`
  width: 100%;
  height: ${(x) => (x.isLastOne ? `56px` : `24px`)};
  background-color: #dbd6dc;
`
