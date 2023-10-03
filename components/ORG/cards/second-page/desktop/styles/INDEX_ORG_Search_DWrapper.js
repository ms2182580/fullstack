import styled from 'styled-components'

export const INDEX_ORG_Search_DWrapper = styled.div`
  position: relative;
  user-select: ${(x) => (x.ORGShowFullMapFilter ? `none` : ``)};
  
`