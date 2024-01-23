import { PRIMARY } from "@/assets/Colors"
import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Home_D_NavBar_NWrapper = styled.nav`
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;

  & > :nth-child(1) {
    display: flex;
    height: 118px;
    padding: 0px 56px;
    justify-content: space-between;
    align-items: center;
    background: #fff;

    max-width: ${maxDesktopScreenSize};
    margin-inline: auto;

    //span
    & > :nth-child(1) {
      display: flex;
      gap: 10px;
      cursor: pointer;
      //inclusive
      & > :nth-child(1) {
        color: ${PRIMARY.PRIMARY_LOGO};
      }
    }

    //Div
    & > :nth-child(2) {
      display: flex;
      align-items: center;
      gap: 20px;

      & > a {
        text-decoration: none;
        font-size: 16px;
        color: #312138;
      }

      & > :nth-child(3) {
        ${reusableButton({ secondary: true })}
      }

      & > :nth-child(4) {
        ${reusableButton({})}
      }
    }
  }
`
