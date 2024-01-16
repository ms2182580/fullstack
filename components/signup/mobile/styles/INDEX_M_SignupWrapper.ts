import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { device } from "@/assets/screen-sizes/ScreenSizes"
import styled from "styled-components"
// import { NEUTRALS, PRIMARY } from "../../../assets/Colors"
// import { device } from "../../../assets/screen-sizes/ScreenSizes"
type Props = {
  showLoginButtons: boolean
}
export const INDEX_M_SignupWrapper = styled.div<Props>`
  position: relative;
  display: flex;
  width: 100%;
  padding: 25px;
  flex-direction: column;
  //back to home
  & > :nth-child(1) {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
  }
  & > :nth-child(2) {
    border-radius: 10px;
    padding: 15px;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;

    // connect to community
    & > :nth-child(1) {
      text-align: center;
      & > span {
        color: black;
      }
    }

    //div
    & > :nth-child(3) {
      & > :nth-child(1) {
        width: 100%;
      }
      & > :nth-child(2) {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        margin-bottom: 20px;
        //login in
        & > :nth-child(1) {
          font-size: 12px;
        }
        & > :nth-child(2) {
          & > a {
            font-size: 10px;
          }
        }
      }
    }
  }
`

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
