import styled from "styled-components"

export interface Properties {
  ORGShowFullMapFilter?: boolean
  path?: any
}

export const INDEX_TypedFlow_DWrapper = styled.div<Properties>`
  position: relative;
  user-select: ${(x) => (x.ORGShowFullMapFilter ? `none` : ``)};
`
