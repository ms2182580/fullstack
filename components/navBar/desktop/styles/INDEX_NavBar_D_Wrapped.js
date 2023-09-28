import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const INDEX_NavBar_D_Wrapped = styled.nav`
  box-shadow: ${(x) => (x.isORG ? `0px 4px 15px 0px rgba(0, 0, 0, 0.15);` : `0px 2px 4px rgba(0, 0, 0, 0.25)`)};

  background-color: ${PRIMARY.OFF_WHITE};

  position: relative;

  padding-top: 28px;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: clamp(16px, calc(10vw - 80px), 96px);
    position: relative;
    margin-bottom: 28px;

    & > :nth-child(1) {
      margin-right: 50px;
      cursor: pointer;

      display: flex;
      gap: 8px;

      & > :nth-child(1) {
        color: ${PRIMARY.PRIMARY_LOGO};
      }

      & > :nth-child(2) {
        & > * {
          fill: ${PRIMARY.PRIMARY_LOGO};
        }
      }
    }

    & > :nth-child(2) {
      margin-right: 80px;
    }
  }

  & > :nth-child(2) {
    content: "";
    height: 4px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    width: 100%;
    position: absolute;
  }

  & > :nth-child(3) {
    display: flex;
    justify-content: space-between;
    padding-top: 33px;
    padding-bottom: 33px;
    margin-left: clamp(16px, calc(10vw - 80px), 90px);
    margin-right: clamp(16px, calc(10vw - 80px), 66px);

    & > :nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 49px;

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        
        gap: 30px;
        gap: clamp(20px, 7vw - 50px, 51px);

        & > *:not(:first-child) {
          & > h4 {
            color: ${NEUTRALS.LIGHT_GREY};
          }
        }

        li {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-bottom: 4px solid transparent;

          & > h4 {
            font-weight: 500;
          }
          &.active {
            border-bottom: 4px solid ${PRIMARY.PRIMARY_CTA};
          }
        }

        & > :nth-child(2),
        & > :nth-child(4) {
          position: relative;
        }
      }
    }

    & > :last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      padding: 6px 16px;

      background-color: ${NEUTRALS.LIGHT_GREY};

      border: 2px solid ${NEUTRALS.DARK_GREY};
      border-radius: 16px;

      cursor: not-allowed;

      & > :nth-child(1) {
        & > * {
          fill: ${NEUTRALS.DARK_GREY};
        }
      }

      & > :nth-child(2) {
        font-size: 18px;
        font-weight: 600;
        color: ${NEUTRALS.DARK_GREY};
      }
    }
  }
`
