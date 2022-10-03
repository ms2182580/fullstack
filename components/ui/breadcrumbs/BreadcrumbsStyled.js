import styled from "styled-components"

export const BreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  
  p{
    cursor: pointer;
  }
  
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  
  svg {
    font-size:1.6em;
  }
  
  svg, p {
    margin-right: 22px;
  }
  
`
