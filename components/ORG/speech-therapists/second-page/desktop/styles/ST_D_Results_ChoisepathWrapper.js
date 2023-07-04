import styled from "styled-components"

export const ST_D_Results_ChoisepathWrapper = styled.div`
  margin-right: 24px;

  display: ${(x) => (x.ORGshowFullMapButton || x.ORGShowFullMapFilter ? `none` : `block`)};

  & > *:not(:last-child) {
    margin-bottom: 52px;
  }
  
  

`
