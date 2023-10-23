import styled from "styled-components"
import { NEUTRALS, PRIMARY, SEMANTICS } from "../../../../assets/Colors"

export const NavBar_D_SearchComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  z-index: 4;

  & > * {
    position: relative;

    & > :nth-child(1) {
      & > :nth-child(2) {
        & > input:focus {
          border-radius: 5px;
          position: relative;
          z-index: 2;
        }
      }
    }
  }

  & > *:not(:last-child) {
    & > :nth-child(1) {
      & > :nth-child(1) {
        font-weight: 700;
        color: ${NEUTRALS.DARK_GREY};
      }

      & > :nth-child(2) {
        & > :nth-child(1) {
          position: absolute;

          inset: 50% 0 50% 16px;
          z-index: 3;
          width: fit-content;
        }
        & > input {
          padding: 16px;
          padding-left: 55px;
          width: 100%;
        }
      }
    }
  }

  & > :nth-child(1) {
    flex-basis: 405px;
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    flex-basis: 250px;
  }

  & > :nth-child(1) {
    & > :nth-child(1) {
      & > :nth-child(2) {
        & > input {
          border-radius: 5px 0px 0px 5px;
          border: 1px ${NEUTRALS.DARK_GREY} solid;
          border-right-style: none;
        }
      }
    }
  }

  & > :nth-child(2) {
    & > :nth-child(1) {
      & > :nth-child(1) {
        & > :nth-child(1) {
          color: ${SEMANTICS.ERROR_STATE};
        }
      }

      & > :nth-child(2) {
        & > input {
          border: 1px ${NEUTRALS.DARK_GREY} solid;
          border-left-style: none;
          border-right-style: none;
        }
      }
    }
  }

  & > :nth-child(3) {
    & > :nth-child(1) {
      & > :nth-child(2) {
        & > input {
          border: 1px ${NEUTRALS.DARK_GREY} solid;
          border-left-style: none;
          border-radius: 0px 5px 5px 0px;
        }
      }
    }
  }

  /* & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3) {
    & > :nth-child(1) {
      & > :nth-child(2) {
        & > :nth-child(1) {
          position: absolute;

          inset: 50% 0 50% 16px;
          z-index: 3;
          width: fit-content;
        }
        & > input {
          padding: 16px;
          padding-left: 55px;
          width: 100%;
        }
      }
    }
  } */

  & > :nth-child(1),
  & > :nth-child(2) {
    & > :nth-child(1) {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        z-index: 2;
        width: 1px;
        height: calc(53px - 16px);
        bottom: 8px;
        right: 0px;
        background: #000000;
      }
    }
  }

  & > :last-child {
    margin-left: 19px;
    width: 65.6px;

    height: 55px;

    background-color: ${PRIMARY.PRIMARY_CTA};

    border-radius: 6.4px;
    border: 0;

    display: grid;
    place-content: center;

    cursor: pointer;
  }
`
