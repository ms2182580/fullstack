import styled from "styled-components"
import { PRIMARY } from "../../../../assets/Colors"

export const Home_Feature_D_NWrapper = styled.div`
  margin-top: 200px;
  & > :nth-child(1) {
    padding: 0px 56px;
    color: ${PRIMARY.PRIMARY_LOGO};
    margin-bottom: 16px;
    font-feature-settings: "clig" off, "liga" off;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 110% */
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  & > :nth-child(2) {
    padding: 0px 56px;
    margin-bottom: 98px;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px;
  }

  & > :nth-child(3) {
    padding: 0px 0px 0px 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > :nth-child(1) {
      & > :nth-child(1) {
        display: flex;
        align-items: center;
        margin-bottom: 32px;

        & > :nth-child(2) {
          color: ${PRIMARY.PRIMARY_LOGO};
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 22px; /* 110% */
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      }
      & > :nth-child(2) {
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 54px;
      }
      & > :nth-child(3) {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin-top: 5;
        line-height: 27px;
      }
      & > :nth-child(4) {
        margin-top: 64px;
      }
    }
  }
`
