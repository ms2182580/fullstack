import styled from "styled-components"

export const INDEX_D_Day_ResultsWrapper = styled.div`
  position: relative;
  user-select: ${(x) => (x.ORGShowFullMapFilter ? `none` : ``)};
`
