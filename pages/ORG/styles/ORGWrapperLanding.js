import styled from "styled-components"
import { NEUTRALS } from "../../../assets/Colors"

const ORGWrapperLanding = styled.div`
  /* background-color: red; */
  background-color: ${NEUTRALS.OFF_WHITE};
  display: grid;
  place-items: center;
  
  
  
  
  

  /* padding-top: 44px; */
  padding: 3.08rem 3rem 0 3rem;
  /* border:7px black solid; */
  /* border: crimson solid 2px; */
  
  & > * {
    /* border: crimson solid 2px; */
  }

  & > :nth-child(1) {
    /* border: 7px black solid; */
    margin-bottom: 36px;
  }
  
  & > :nth-child(2){
    margin-bottom: 72px;
  }
`

export default ORGWrapperLanding
