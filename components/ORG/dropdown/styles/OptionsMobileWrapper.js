import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

export const OptionsMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${NEUTRALS.OFF_WHITE};
  width: 100%;
  position: absolute;
  z-index: 99;
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.25));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: -12px;
  
  /* background-color: crimson; */

  & > :nth-child(1) {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 20px;
  }

  & > :nth-child(2) {
    height: 6px;
    background-color: ${NEUTRALS.BLACK};
  }

  & > * {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "icon namePlusArrow";

    & > :nth-child(1) {
      grid-area: icon;
      margin: 12px;
    }

    & > :nth-child(2) {
      grid-area: namePlusArrow;
      display: flex;
      align-items: center;
    }

    & > :nth-child(2) > :nth-child(1) {
      margin-right: 0;
      display: flex;
      justify-content: center;
      width: 100%;

      @media (max-width: 380px) {
        justify-content: start;
      }
    }
    & > :nth-child(2) > :nth-child(2) {
      margin: 18.12px 3px 18.12px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > div:nth-child(1) {
      display: grid;
      place-items: center;
    }
  }
`
