import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

export const NavBar_D_SearchComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;

  & > :nth-child(1) {
    flex-grow: 1;
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    flex-basis: 250px;
  }

  & > :nth-child(1) {
    & > span {
      & > input {
        border-radius: 5px 0px 0px 5px;
        border: 1px ${NEUTRALS.DARK_GREY} solid;
        border-right-style: none;
        /* width:100%; */
      }
    }
  }

  & > :nth-child(2) {
    & > span {
      & > input {
        border: 1px ${NEUTRALS.DARK_GREY} solid;
        border-left-style: none;
        border-right-style: none;
        /* width:70%; */
      }
    }
  }

  & > :nth-child(3) {
    /* flex-shrink: 2; */
    /* width:250px; */
    & > span {
      & > input {
        border: 1px ${NEUTRALS.DARK_GREY} solid;
        border-left-style: none;
        border-radius: 0px 5px 5px 0px;
      }
    }
  }

  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3) {
    & > span {
      position: relative;
      & > span {
        position: absolute;
        inset: 0 0 0 16px;
        z-index: 3;
        width: fit-content;
      }
      & > input {
        padding: 23px;
        padding-left: 55px;
        width: 100%;
      }
    }
  }

  & > div {
    & > span {
      & > input:focus {
        border-radius: 5px;
        position: relative;
        z-index: 2;
      }
    }
  }

  & > :nth-child(1) > :nth-child(1),
  & > :nth-child(2) > :nth-child(1) {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      width: 1px;
      height: 58px;
      bottom: -19px;
      right: 0px;
      background: #000000;
    }
  }

  & > :last-child {
    position: absolute;
    z-index: 2;
    right: 0;
    height: 100%;

    & > :nth-child(1) {
      height: 100%;
    }
  }
`
