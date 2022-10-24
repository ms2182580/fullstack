import styled from "styled-components"

const ThirdSectionWrapper = styled.div`
  margin-right: 6rem;
  margin-left: 6rem;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  
  /* outline: 7px black solid; */

  display: grid;
  grid-template-columns: 1fr 2fr;
  /* grid-template-rows: 1fr 1fr; */
  /* justify-items: center; */
  place-items: center;
  /* justify-self: center; */

  grid-template-areas:
    "title title"
    "image text";

  & > h1 {
    grid-area: title;
    justify-self: center;
    margin-bottom: 6.5rem;
    
    /* outline: 7px black solid; */
  }

  & > svg {
    grid-area: image;
    /* align-self: center; */
    /* outline:7px rebeccapurple solid; */
  }

  & > div {
    grid-area: text;
    justify-self: center;
    /* outline: 7px black solid; */
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
  
`

export default ThirdSectionWrapper
