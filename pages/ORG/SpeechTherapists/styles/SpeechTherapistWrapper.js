import styled from "styled-components"
import { device } from "../../../../assets/screenSizes/ScreenSizes"

const SpeechTherapistWraper = styled.div`
  margin: ${(x) => (x.inDetail ? "2rem 0px" : "2rem 6rem")};

  
  & > div:nth-child(1) {
    margin-bottom: 2rem;
    
    & > span {
      
      display: flex;
    }
    
    & > span > a{
      position: relative;
      cursor: pointer;
    }

    & > span > a > :nth-child(2) {
      display: inline;
      margin-left: calc(20px + 0.625rem);
      
    }
    
    & > span > a > svg {
      margin-top: auto;
      margin-bottom: auto;
      position: absolute;
      top:50%;
      bottom: 50%;
    }

    
  }
  & > div:nth-child(2) {
    margin-bottom: 2.25rem;
  }

  @media (${device.tablet}) {
    margin: 0;

    & > div:nth-child(1) {
      margin-top: 28px;
      margin-left: 14px;
      margin-bottom: 12px;
    }
    
    
  }
`

export default SpeechTherapistWraper
