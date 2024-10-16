import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

// export const Home_D_NavBar_NWrapper = styled.nav`
//   box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
//   position: relative;
//   z-index: 1;

//   & > :nth-child(1) {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     background: #fff;

//     height: 118px;
//     max-width: ${maxDesktopScreenSize};

//     margin-inline: auto;
//     padding: 0px 56px;

//     //Div
//     & > :nth-child(2) {
//       display: flex;
//       align-items: center;
//       gap: 20px;

//       & > :nth-child(1) {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         gap: 10px;
//       }

//       & > a {
//         text-decoration: none;
//         font-size: 16px;
//         color: #312138;
//       }

//       & > :nth-child(3) {
//         ${reusableButton({ secondary: true })}
//       }

//       & > :nth-child(4) {
//         ${reusableButton({})}
//       }
//     }
//   }
// `

export const Home_D_NavBar_NWrapper = styled.nav`
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

    //Div
    & > :nth-child(2) {
      display: flex;
      align-items: center;
      gap: 58px;

      // & > :nth-child(1) {
      //   display: flex;
      //   align-items: center;
      //   justify-content: center;
      //   gap: 20px;

      //   & > a {
      //     text-decoration: none;
      //     font-size: 16px;
      //     color: #312138;
      //   }
      // }

      & > :nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 48px;

        & > a {
          text-decoration: none;
          font-size: 16px;
          color: #312138;
        }

        & > :nth-child(1) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 9px;
          ${reusableButton({ secondary: true })}
        }

        & > :nth-child(2) {
          font-weight: 600;
          color: #006886;
        }

        & > :nth-child(3) {
          ${reusableButton({})}
        }
      }
    }
  }
`
