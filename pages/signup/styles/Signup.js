import styled from "styled-components"
import { NEUTRALS } from "../../../assets/Colors"

export const SignupWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: hsl(0, 0%, 100%);
`

export const LeftSignup = styled.div`
  position: relative;

  p {
    position: absolute;
    top: 200px;
    font-size: 32.02px;
    text-align: center;
    font-weight: 600;
    line-height: 45.2px;
  }
`

const Img = styled.img``

export const RightSignup = styled.div`
  display: flex;
  flex-direction: column;
  width: 601px;
  padding: 48px 0px;

  & > :nth-child(1) {
    margin-bottom: 32px;
  }
  & > :nth-child(2) {
    margin-bottom: 28px;
  }

  & > :nth-child(3) {
    color: ${NEUTRALS.DARK_GREY};
    display: flex;
    align-items: center;

    margin-bottom: 28px;

    h4 {
      margin-right: 15px;
      color: ${NEUTRALS.DARK_GREY};
    }
  }

  & > :nth-child(4) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;
  }

  & > :nth-child(5) {
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

export default Img