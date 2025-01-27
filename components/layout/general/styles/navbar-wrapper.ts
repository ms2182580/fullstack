import { PRIMARY } from "@/assets/Colors"
import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const NavbarWrapper = styled.nav`
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;

  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #fff;

    height: 118px;
    max-width: ${maxDesktopScreenSize};

    margin-inline: auto;
    padding: 0px 56px;

    & > ul {
      display: flex;
      align-items: center;
      gap: calc(8px * 2);

      list-style: none;

      & > :nth-child(1) {
        & > a {
          ${reusableButton({ secondary: true })};
        }
      }

      & > :nth-child(2) {
        & > a {
          ${reusableButton()};

          background-color: transparent;
          color: ${PRIMARY.PRIMARY_CTA};

          padding: 12px 32px;
        }
      }

      & > :nth-child(3) {
        & > a {
          ${reusableButton()};
        }
      }

      & > li {
        & > span {
        }

        a {
          text-decoration: none;
          font-size: 16px;
          color: #312138;
        }

        & > :nth-child(1) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 9px;
        }

        & > :nth-child(1) {
          /* border: 2px solid green; */
          /* ${reusableButton({ secondary: true })}; */
        }
      }

      & > :nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 48px;

        & > :nth-child(2) {
          font-weight: 600;
          color: #006886;
        }

        & > :nth-child(3) {
          ${reusableButton({})};
        }
      }
    }
  }
`
