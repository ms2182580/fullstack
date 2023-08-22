import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../../../assets/Colors"

export const MH_D_Results_CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "leftPart rightPart"
    "bottomButtons bottomButtons";
  grid-template-rows: auto;
  align-items: stretch;
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

  & > .LEFT-PART {
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    grid-area: leftPart;

    display: flex;
    flex-direction: column;

    padding: 24px;

    border-top-left-radius: inherit;

    & > :nth-child(1) {
      position: relative;
      background-color: white;

      padding-inline: 20%;
      overflow: hidden;

      border-radius: 16px;

      margin-bottom: 28px;

      width: 100%;
      height: 175px;

      & > :nth-child(2) {
        position: absolute;
        top: 1rem;
        left: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      & > :nth-child(3) {
        position: absolute;
        bottom: 16px;
        right: 16px;
        z-index: 3;
      }
    }

    & > :nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 24px;

      & > * {
        display: grid;
        grid-template-columns: 33px 1fr;
        gap: 8px;

        & > :nth-child(1) {
          justify-self: center;
        }

        & > :nth-child(2) {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  & > .RIGHT-PART {
    grid-area: rightPart;
    border-top-right-radius: inherit;
    padding: 24px;

    & > :nth-child(1),
    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4),
    & > :nth-child(5) {
      margin-bottom: 8px;
    }

    & > :nth-child(6) {
      margin-bottom: 32px;
    }

    & > *:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4)):not(:nth-child(6)):not(:last-child) {
      margin-bottom: 16px;
    }

    & > p {
      & > * {
        color: ${NEUTRALS.BLACK};
        font-weight: 400;
      }
    }
  }

  & > .BOTTOM-BUTTONS {
    grid-area: bottomButtons;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;

    background-color: ${PRIMARY.PRIMARY_CTA};
    color: ${NEUTRALS.OFF_WHITE};

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 8px;

      cursor: pointer;
    }
  }
`
