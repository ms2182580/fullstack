import styled from "styled-components"

export const INDEX_ORG_Results_DWrapper = styled.div`
  user-select: ${(x) => (x.ORGShowFullMapFilter ? `none` : ``)};
`
