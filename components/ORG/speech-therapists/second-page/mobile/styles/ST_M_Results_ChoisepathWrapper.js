import styled from 'styled-components'

export const ST_M_Results_ChoisepathWrapper = styled.div`
  position:${({ mustShowFiltersMobile }) => mustShowFiltersMobile ? `fixed` : `relative`};
  visibility:${({ mustShowFiltersMobile }) => mustShowFiltersMobile ? `hidden` : `visible`};
`