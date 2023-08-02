import styled from "styled-components"

export const INDEX_D_STResultsWrapper = styled.div`
  position: relative;
  padding-left: 40px;
  user-select: ${(x) => (x.ORGShowFullMapFilter ? `none` : ``)};
`
