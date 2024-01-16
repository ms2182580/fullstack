import styled from "styled-components"

export const ST_M_Detail_AboutWrapper = styled.div`
  scroll-margin-top: ${({ scrollMarginTopState }) => scrollMarginTopState && `${scrollMarginTopState}`};
  
  padding:16px;
  display: flex;
  flex-direction:column;
  gap:8px;
  


  
`
