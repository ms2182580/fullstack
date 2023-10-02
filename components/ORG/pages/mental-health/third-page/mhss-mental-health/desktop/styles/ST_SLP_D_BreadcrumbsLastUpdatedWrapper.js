import styled from "styled-components"

export const ST_SLP_D_BreadcrumbsLastUpdatedWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  

  & > * {
    align-self: flex-start;
  }

  & > :last-child {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-end;
    
    & > :nth-child(1){
      text-align: end;
    }
    
    
    
  }
`
