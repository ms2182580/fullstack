import styled from "styled-components"

export const BreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  /* border: crimson 3px solid; */
  
  & > p{
    cursor: pointer;
    /* border: crimson 3px solid; */
  }
  
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: crimson 3px solid; */
    
  }
  
  svg {
    /* font-size:1.6em; */
    /* border: crimson 3px solid; */
    /* display:flex; */
    /* align-items: center; */
    /* justify-content: center; */
    width:2rem;
    /* height:2rem; */
  }
  
  svg, p {
    margin-right: 22px;
    /* border: crimson 3px solid; */
    
  }
  
`
