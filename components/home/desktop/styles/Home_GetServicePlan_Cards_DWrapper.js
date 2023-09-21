import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const Home_GetServicePlan_Cards_DWrapper = styled.div`
  margin-bottom: calc(68px + 35px); /* With the first value (68px) the component achieve 33px, to get 68px total is needed 35px more*/
  & > :nth-child(1) {
    font-size: 107px;
    color: #dfdbd1;
    font-weight: 700;
  }

  & > :nth-child(2) {
    border: 1px solid rgba(224, 224, 224, 0.75);
    background: #fff;
    padding-inline: 30px;
    padding-top: 30px;
    padding-bottom: 45px;

    display: flex;
    flex-direction: column;

    height: 80%;

    gap: 24px;

    & > :nth-child(1) {
      border-radius: 50%;
      background-color: #ffc2a5;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;

      & > * {
        & > * {
          stroke: black;
        }
      }
    }

    & > :nth-child(2) {
      font-size: 34px;
    }

    & > :nth-child(3) {
      height: 147px;

      font-size: 24px;
      color: ${NEUTRALS.DARK_GREY};
    }

    & > :nth-child(4) {
      margin-top: auto;
      align-self: flex-start;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 2px solid ${PRIMARY.PRIMARY_CTA};
      border-radius: 8px;
      padding: 6px 24px;

      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      color: ${PRIMARY.PRIMARY_CTA};

      width: 171px;

      &:hover,
      &:focus {
        color: ${NEUTRALS.OFF_WHITE};
        background-color: ${PRIMARY.PRIMARY_HOVER};
      }
    }
  }
`
