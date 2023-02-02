import styled from "styled-components"
import { device } from "../../../../assets/screenSizes/ScreenSizes"

const SpeechTherapistWraper = styled.div`
  margin: ${(x) => (x.inDetail ? "2rem 0" : "2rem 6rem")};

  & > div:nth-child(1) {
    margin-bottom: 2rem;
    
    & > span {
      cursor: pointer;
    }
    
    & > span > a{
      position: relative;
    }

    & > span > a > span {
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
    /* border: 2px solid crimson; */
    /* margin-top: 28px; */
    margin: 0;

    & > div:nth-child(1) {
      /* border: 2px solid green; */
      margin-top: 28px;
      margin-left: 14px;
      margin-bottom: 12px;
    }
    
    
  }
`

export default SpeechTherapistWraper
