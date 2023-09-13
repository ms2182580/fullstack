import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../../../../assets/Colors"

export const CC_Karate_D_MainCardWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: "leftPart rightPart";
  align-items: stretch;

  border: 1px solid ${NEUTRALS.LIGHT_GREY};
  border-radius: 8px;

  grid-template-columns: 450px 1fr;

  & > .LEFT {
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    grid-area: leftPart;
    min-width: 320px;
    display: flex;
    flex-direction: column;

    padding: 24px;

    & > :nth-child(1) {
      position: relative;
      overflow: hidden;
      border-top-left-radius: 8px;
      margin-bottom: 24px;

      & > :nth-child(2) {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
      }

      margin-bottom: 8px;
      border-radius: 8px;
      border: none;
    }

    & > :nth-child(3) {
      margin-left: 22px;
      margin-bottom: 16px;
      margin-right: 9px;

      & > *:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }

  & > .RIGHT {
    display: grid;
    justify-self: stretch;
    grid-template-rows: auto 1fr;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: ${NEUTRALS.OFF_WHITE};
    padding: 24px;
    position: relative;

    & > :last-child {
      display: flex;
      justify-content: end;
      gap: 44px;

      & > :nth-child(2):hover {
        cursor: pointer;
        filter: brightness(90%);
      }
    }

    & > :nth-child(1) {
    }

    & > :nth-child(2) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "leftPart rightPart";
      margin-bottom: 32px;
      gap: 16px;

      & > :nth-child(1) {
        grid-area: leftPart;
        & > * {
          & > :not(:first-child) {
            display: inline;
          }
        }
      }

      & > :nth-child(2) {
        grid-area: rightPart;

        & > :nth-child(1) {
          & > :not(:first-child) {
            display: inline;
          }
        }

        & > :nth-child(2) {
          & > :not(:first-child) {
            display: flex;
            flex-wrap: wrap;
            & > span {
              font-weight: 600;
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
`
