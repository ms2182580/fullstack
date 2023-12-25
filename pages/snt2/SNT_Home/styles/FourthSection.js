import styled from "styled-components"

const FourthSectionWrapper = styled.div`
  padding-right: 6rem;
  padding-left: 6rem;
  padding-top: 8.5rem;
  padding-bottom: 8.5rem;

  background-color: #f1e7f5;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  & > *{
    /* outline:4px black solid; */
  }
  
  & > div > h3 {
    margin-bottom: 2.5rem;
  }
  
  & > div > ul {
    margin-left: 20px;
  }
  & > div > ul > li {
    /* outline: crimson solid 3px; */
    margin-bottom: 2.5rem;
  }
  & > div > ul > li:last-child{
    margin-bottom: 0;
  }
  
  & > svg{
    justify-self: center;
  }
  
  
`

export default FourthSectionWrapper
