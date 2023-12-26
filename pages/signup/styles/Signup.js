import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../assets/Colors"
import { device } from "../../../assets/screen-sizes/ScreenSizes"

const SignupWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: hsl(0, 0%, 100%);
  background-color: #fafcfe;
  position: relative;

  @media (${device.laptop}) {
    flex-direction: column;
    align-items: center;

    background-color: #fff;

    & > :nth-child(1) {
      visibility: ${(x) => (x.showLoginButtons ? `hidden` : `visible`)};

      & > :nth-child(1) {
        display: flex;
        align-items: center;
      }

      margin: 24px auto 53px 18px;
      & > :nth-child(1) > :nth-child(1) {
        margin-right: 10px;
      }
      & > :nth-child(1) > :nth-child(2) {
        font-size: 14px;
      }
    }

    & > :nth-child(2) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
      position: relative;

      &::before {
        content: "";
        position: ${(x) => (x.showLoginButtons ? `absolute` : `relative`)};
        top: -100px;
        width: 100vw;
        height: calc(157%);

        background-color: ${(x) => (x.showLoginButtons ? `#e5e5e5` : `unset`)};
        opacity: 0.5;
        z-index: 1;
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

  h2 {
    position: absolute;
    top: 200px;
    font-size: 32.02px;
    text-align: center;
    font-weight: 600;
    line-height: 45.2px;
  }

  @media (${device.laptop}) {
    max-width: 100%;

    & :nth-child(1) {
      & > h4 {
        text-align: center;
        margin-bottom: 10px;

        & > span {
          color: ${PRIMARY.PRIMARY_CTA};
        }
      }
    }
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
