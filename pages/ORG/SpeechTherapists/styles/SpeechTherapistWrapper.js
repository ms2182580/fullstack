import styled from "styled-components"
import { device } from "../../../../assets/screenSizes/ScreenSizes"

const SpeechTherapistWraper = styled.div`
  margin: ${(x) => (x.inDetail ? "2rem 0px" : "2rem 6rem")};

  & > p:nth-child(1){
    margin-bottom: 14px;
  }
  
  
  & > div:nth-child(2) {
    margin-bottom: 2.25rem;
  }

  @media (${device.laptop}) {
    margin: 0;

    & > div:nth-child(1) {
      margin-top: 28px;
      margin-left: 14px;
      margin-bottom: 12px;
    }
    
    
  }
`

export default SpeechTherapistWraper
