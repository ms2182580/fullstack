import styled from "styled-components"

export const A_D_Results_ChoisepathWrapper = styled.div`
  margin-right: 24px;

  display: ${(x) => (x.ORGshowFullMapButton || x.ORGShowFullMapFilter ? `none` : `block`)};
  
  display: flex;
  justify-content: center;
  flex-direction:column;
  gap:24px;

`
