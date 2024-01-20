import styled from "styled-components"
import { PRIMARY } from "../../../../assets/Colors"

export const Home_D_Service_NWrapper = styled.div`
  background-image: url("/background/background2.svg");
  margin-top: -100px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  & > :nth-child(1) {
    padding: 180px 56px 0px 56px;

    & > :nth-child(1) {
      display: flex;
      align-items: center;
      position: relative;
      & > :nth-child(1) {
        position: absolute;
        top: 10px;
        left: -10px;
        z-index: -1;
      }
      & > :nth-child(3) {
        margin-left: 16px;
        color: ${PRIMARY.PRIMARY_CTA};
        font-feature-settings: "clig" off, "liga" off;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px; /* 110% */
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }

    & > :nth-child(2) {
      margin-top: 16px;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 54px; /* 168.75% */
    }
    & > :nth-child(4) {
      & > li {
        margin-left: 20px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
      }
    }
    & > :nth-child(5) {
      margin-top: 64px;
    }
  }
`
