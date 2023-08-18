import styled from "styled-components"

export const INDEX_D_CommunityClasses_ResultsWrapper = styled.div`
  position: relative;
  user-select: ${(x) => (x.ORGShowFullMapFilter ? `none` : ``)};
`
