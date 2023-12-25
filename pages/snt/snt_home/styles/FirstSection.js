import styled from "styled-components"

const FirstSectionWrapper = styled.div`
  /* outline: 7px black solid; */
  margin-right: 6rem;
  margin-left: 6rem;
  margin-top: 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  
`
export default FirstSectionWrapper

export const LeftData = styled.div`
  /* border: 7px crimson solid; */
  display: grid;
  justify-self: start;
  /* justify-items: end; */
  & > h1,
  & > h3,
  & > button {
    margin-bottom: 3.5rem;
  }

  & > span > a {
    padding: 0;
  }
`

export const RightData = styled.div`
  /* border: 7px cornflowerblue solid; */
  /* display: flex; */
  justify-self: end;
  /* place-self: center; */
  /* align-self: center; */
`

export const ScrollDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10.17rem;

  & > h4 {
    margin-bottom: 1.5rem;
  }
`
