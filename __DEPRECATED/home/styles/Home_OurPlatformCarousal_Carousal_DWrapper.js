import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../assets/Colors"

export const Home_OurPlatformCarousal_Carousal_DWrapper = styled.li`
  border: 1px solid rgba(224, 224, 224, 0.75);
  background: #fff;
  padding-inline: 30px;
  padding-top: 30px;
  padding-bottom: 45px;

  list-style: none;

  & > :nth-child(1) {
    border-radius: 50%;
    background-color: ${({ theFill }) => `${theFill}`};
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    & > * {
      & > * {
        stroke: black;
      }
    }
  }

  & > :nth-child(2) {
    font-size: 34px;
    margin-bottom: 8px;
  }

  & > :nth-child(3) {
    white-space: normal;

    font-size: 24px;
    color: ${NEUTRALS.DARK_GREY};

    margin-bottom: 40px;
  }

  & > :last-child {
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
`
