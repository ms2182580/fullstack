import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import styled from "styled-components"
import { NEUTRALS, SECONDARY_SNT } from "../../../../assets/Colors"

export const NavBar_D_OnlyHomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: clamp(16px, calc(15vw - 80px), 126px);
  padding-top: 50px;
  max-width: ${maxDesktopScreenSize};
  margin-inline: auto;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  max-width: 1440px;
  margin-inline: auto;

  & > :nth-child(1) {
    display: flex;
    gap: 8px;

    & > :nth-child(1) {
      font-size: 56px;
      font-weight: 900;
      color: ${NEUTRALS.OFF_WHITE};
    }
  }

  & > :nth-child(2) {
    padding: 16px 100px;
    border-radius: 8px;
    background-color: ${SECONDARY_SNT.YELLOW};

    color: ${NEUTRALS.BLACK};
    font-size: 18px;
    text-decoration: none;
    font-weight: 600;
  }

  //Animación botón
  & > :nth-child(2) {
    background-color: ${SECONDARY_SNT.YELLOW};

    cursor: pointer;

    position: relative;
    z-index: 3;

    overflow: hidden;

    &::before {
      content: "";
      width: 0%;
      height: 100%;
      display: block;
      background: hsl(50.4, 100%, 69.2%);
      position: absolute;
      transform: skewX(-45deg);
      left: -10%;
      opacity: 1;
      top: 0;
      z-index: -12;
      transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
    }

    &::after {
      content: "";
      width: 0%;
      height: 100%;
      display: block;
      background: hsl(50.4, 100%, 49.2%);
      position: absolute;
      transform: skewX(-45deg);
      left: -10%;
      opacity: 0;
      top: 0;
      z-index: -15;
      transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    }

    &:hover::before,
    &:focus::before {
      opacity: 1;
      width: 120%;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      width: 136%;
    }
  }
`
