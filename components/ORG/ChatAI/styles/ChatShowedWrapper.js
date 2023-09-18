import styled from "styled-components"
import { NEUTRALS, PRIMARY, SEMANTICS } from "../../../../assets/Colors"

export const ChatShowedWrapper = styled.div`
  position: absolute;
  bottom: 50%;
  right: 50%;
  z-index: 2;
  background-color: ${NEUTRALS.OFF_WHITE};

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  border-radius: 16px;

  width: 386px;

  & > :nth-child(1) {
    padding-inline: 18px;
    padding-top: 8px;
    padding-bottom: 8px;

    margin-bottom: 12px;

    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);

    border-radius: 16px 16px 0 0;

    display: flex;
    justify-content: space-between;

    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > :nth-child(1) {
      gap: 12px;

      & > :nth-child(1) {
        & > * {
          fill: ${PRIMARY.PRIMARY_CTA};
        }
      }
    }

    & > :nth-child(2) {
      gap: 39px;

      & > * {
        cursor: pointer;
        &:hover {
          filter: brightness(70%);
        }
      }

      & > :nth-child(1),
      & > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  & > :nth-child(2) {
    height: 69vh;

    overflow-y: scroll;

    padding-bottom: 20px;
    padding-inline: 36px;

    display: flex;
    flex-direction: column;

    gap: 24px;

    & > :nth-child(1) {
      position: relative;

      span {
        display: block;
      }

      & > :nth-child(1) {
        display: flex;
      }

      & > :nth-last-child(2) {
        margin-bottom: 16px;
      }

      & > :last-child {
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
      }
    }

    .leftChat {
      background-color: #f5f5f5;
      border-radius: 16px 16px 16px 0px;
      padding: 16px;
    }

    & > :nth-child(3) {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: inherit;

      & > button {
        padding-inline: 8px;
        padding-top: 5px;
        padding-bottom: 5px;

        border-radius: 8px;
        border: 2px solid ${PRIMARY.PRIMARY_CTA};
        background: ${NEUTRALS.OFF_WHITE};

        font-weight: 600;
        color: ${PRIMARY.PRIMARY_CTA};

        cursor: pointer;

        &:hover {
          background: ${PRIMARY.PRIMARY_HOVER};
          color: ${NEUTRALS.OFF_WHITE};
        }
      }
    }

    .rightChat {
      border-radius: 16px 16px 0px 16px;
      padding: 16px;

      margin-left: auto;
      width: 66%;

      background-color: ${PRIMARY.PRIMARY_CTA};
      color: ${NEUTRALS.OFF_WHITE};
      font-weight: 600;
    }

    & > :nth-child(5) {
      span {
        font-weight: 700;
        color: ${SEMANTICS.HYPERLINK_NORMAL};
        text-decoration: underline;
        cursor: pointer;

        &:hover {
          color: ${SEMANTICS.FOCUS_RING};
        }
      }
    }

    & > :nth-child(7) {
      margin-left: auto;

      border-radius: 8px;
      border: 2px solid ${PRIMARY.PRIMARY_CTA};
      padding: 0px 24px;

      display: flex;
      gap: 16px;
      font-size: 32px;

      & > * {
        cursor: pointer;

        &:hover {
          filter: brightness(110%);
        }
      }
    }
  }

  & > :nth-child(3) {
    display: grid;
    grid-template-columns: 1fr 12fr;

    & > :nth-child(1) {
      border: none;
      resize: none;

      border-bottom: 1px solid rgba(151, 151, 151, 0.3);
      border-top: 1px solid rgba(151, 151, 151, 0.3);

      position: relative;
      padding-top: 16px;
      padding-left: 24px;

      &::placeholder {
        font-style: italic;
        font-size: 18px;
        color: ${NEUTRALS.BLACK};
      }
    }

    & > :nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      background-color: ${PRIMARY.PRIMARY_CTA};

      cursor: pointer;

      &:focus {
        position: relative;
        z-index: 2;
      }

      & > * {
        & > * {
          stroke: ${NEUTRALS.OFF_WHITE};
        }
      }
    }
  }

  & > :nth-child(4) {
    display: flex;
    justify-content: space-between;
    padding: 17px 30px 17px 30px;

    & > :nth-child(1) {
      display: flex;
      align-items: center;
      gap: 5px;

      & > :nth-child(1) {
        font-weight: 600;
        cursor: pointer;
        
        & > :nth-child(1) {
          & > * {
            fill: ${NEUTRALS.BLACK};
          }
        }
      }
    }

    & > :nth-child(2) {
      display: flex;
      align-items: center;
      gap: 8px;

      & > * {
        display: flex;
        align-items: center;
        justify-content: center;
        
        cursor: pointer;
        
      }
    }
  }
`
