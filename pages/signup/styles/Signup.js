import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../assets/Colors"
import { device } from "../../../assets/screenSizes/ScreenSizes"

const SignupWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: hsl(0, 0%, 100%);
  background-color: #fafcfe;
  
  /* border: 2px solid crimson; */
  
  position: relative;
  
  
  @media (${device.laptop}) {
    
    flex-direction: column; 
    align-items: center;
    
    & > :nth-child(1){
      margin-right: auto;
      margin-left: 18px;
      margin-top: 24px;
      
      & > :nth-child(1) > :nth-child(1) {
        margin-right: 10px;
      }
      & > :nth-child(1) > :nth-child(2) {
        font-size: 14px;
      }
      
      
    }
    
  }
  
  
`
export default SignupWrapper

export const LeftSignup = styled.div`
  position: relative;
  max-width: clamp(390px, -37.903rem + 88.434vw, 667px);

  display: flex;
  align-items: flex-end;
  justify-content: center;

  p {
    position: absolute;
    top: 200px;
    font-size: 32.02px;
    text-align: center;
    font-weight: 600;
    line-height: 45.2px;
  }
`

export const RightSignup = styled.div`
  display: flex;
  flex-direction: column;
  width: 601px;

  padding: 48px 8px 48px 8px;

  & > :nth-child(1) {
    margin-bottom: 28px;

    & > :nth-child(1) {
      color: ${PRIMARY.PRIMARY_LOGO};
    }
  }

  & > :nth-child(2) {
    color: ${NEUTRALS.DARK_GREY};
    display: flex;
    align-items: center;

    margin-bottom: 28px;

    h4 {
      margin-right: 15px;
      color: ${NEUTRALS.DARK_GREY};
    }
  }

  & > :nth-child(3) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;
  }

  & > :nth-child(4) {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-bottom: 24px;

    &:before,
    &:after {
      content: "";
      border-top: 2px solid ${NEUTRALS.BLACK};
      margin: 0 4px 0 0;
      flex: 1 0 4px;
    }
    &:after {
      margin: 0 0 0 4px;
    }
  }
`
