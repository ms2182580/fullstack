import styled from 'styled-components'

export const ST_M_Results_FinalButtonsWrapper = styled.div`
  border: 2px solid crimson;
  position:${({ mustShowFiltersMobile }) => mustShowFiltersMobile ? `fixed` : `relative`};
  visibility:${({ mustShowFiltersMobile }) => mustShowFiltersMobile ? `hidden` : `visible`};
  
  
  
`