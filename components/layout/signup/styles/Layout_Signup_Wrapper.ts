import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"
import { defaultWidthWebsite } from "../../index/styles/DefaultWidthWebsite"

type Props = {
  asideShouldShow: boolean
  shouldShowBackground: boolean
}

export const Layout_Signup_Wrapper = styled.div<Props>`
  ${defaultWidthWebsite()};

  position: relative;

  display: grid;
  grid-template-rows: auto 1fr auto;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ asideShouldShow, shouldShowBackground }) =>
    asideShouldShow && !shouldShowBackground
      ? ""
      : (asideShouldShow === false || shouldShowBackground) &&
        'url("/background/background2.svg")'};

  grid-template-areas: ${({ asideShouldShow }) =>
    asideShouldShow
      ? `
          "aside progress"
          "aside children"
          "aside buttons"
        `
      : `
          " logo progress"
          " children children"
          " buttons buttons"
        `};

  grid-template-columns: 266px 1fr;

  & > header {
    grid-area: logo;
    margin-top: 32px;

    margin-left: ${({ asideShouldShow }) => (asideShouldShow ? "" : "16px")};

    position: sticky;
    top: 10px;
  }

  aside {
    grid-area: aside;

    display: ${({ asideShouldShow }) => (asideShouldShow ? "flex" : "none")};
    align-items: flex-start;
    flex-direction: column;

    min-height: 100vh;

    padding: 0px 16px;

    border-radius: 0px 24px 0px 0px;
    background: ${PRIMARY.PRIMARY_CTA};

    & > :nth-child(1) {
      margin-top: 32px;
      display: flex;
      gap: 1px;

      & > :nth-child(1) {
        color: #f3f1f3;
        text-align: justify;
        font-size: 36px;
        font-style: normal;
        font-weight: 800;
        line-height: 51px;
        letter-spacing: 1.44px;
      }
      & > :nth-child(2) {
        padding-bottom: 10px;
        color: #f3f1f3;
        text-align: justify;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 27px;
      }
    }
    & > :nth-child(2) {
      margin-top: 112px;
      color: #f3f1f3;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 54px;
    }
    & > :nth-child(3) {
      color: #f3f1f3;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
    }
  }

  & > :nth-child(2) {
    grid-area: progress;
    margin-bottom: 136px;

    position: sticky;
    top: 31px;
  }

  & > :nth-child(3) {
    grid-area: children;
  }

  & > :nth-child(4) {
    grid-area: buttons;
    align-self: flex-end;

    width: 100%;
    border-top: 1px solid ${NEUTRALS.LIGHT_GREY};
    padding-top: 24px;
    padding-bottom: 24px;

    position: sticky;
    bottom: 0;

    background-color: transparent;
  }
`
