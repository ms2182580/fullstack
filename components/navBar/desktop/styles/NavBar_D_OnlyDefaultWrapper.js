import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const NavBar_D_OnlyDefaultWrapper = styled.header`
  background-color: ${PRIMARY.OFF_WHITE};

  position: relative;

  padding-top: 16px;

  display: grid;
  gap: 34px;
  justify-self: center;

  & > :nth-child(1) {
    margin-inline: clamp(32px, 10vw, 220px);
  }

  & > :nth-child(2) {
    margin-inline: clamp(8px, 1vw - 20px, 50px);

    /* margin-right: clamp(8px, 1vw - 20px, 80px); */

    padding-bottom: 45px;

    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;

    & > * {
      width: fit-content;
    }

    & > :nth-child(1) {
      cursor: pointer;

      display: flex;
      gap: 8px;

      margin-right: clamp(8px, 10vw - 40px, 48px);

      & > :nth-child(1) {
        color: ${PRIMARY.PRIMARY_LOGO};
        font-weight: 800;
      }

      & > :nth-child(2) {
        & > * {
          fill: ${PRIMARY.PRIMARY_LOGO};
        }
      }
    }

    & > :nth-child(2) {
      display: grid;
      grid-auto-flow: column;
      align-items: center;

      margin-right: clamp(8px, 10vw - 40px, 51px);

      & > :nth-child(1) {
        margin-right: clamp(8px, 10vw - 40px, 46px);
      }

      & > :nth-child(2) {
        list-style: none;

        display: grid;
        grid-auto-flow: column;

        gap: clamp(20px, 7vw - 50px, 51px);

        & > * {
          cursor: pointer;
        }

        & > li ~ li {
          & > h4 {
            color: ${NEUTRALS.LIGHT_GREY};
          }
        }

        & > :nth-child(1) {
          & > * {
            & > * {
              text-decoration: none;
              color: ${NEUTRALS.BLACK};
            }
          }
        }
      }
    }

    & > :nth-child(3) {
      margin-left: clamp(8px, 7vw - 100px, 51px);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  }
`
