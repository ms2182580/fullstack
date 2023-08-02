import styled from "styled-components"

export const ORG_D_Results_Card_HearthWrapper = styled.div`
  /* border: 2px solid crimson; */

  & > * {
    & > * {
      fill: ${({ clickOnHearth }) => (clickOnHearth ? `#e8675f` : ``)};
    }
    
    &:hover > *{
      fill: ${({ clickOnHearth }) => (clickOnHearth ? `` : `hsl(3.5, 74.9%, 54.1%)`)};
      
    }
    
  }
`
