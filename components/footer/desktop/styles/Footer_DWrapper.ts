import { NEUTRALS, PRIMARY, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Footer_DWrapper = styled.footer`
  position: relative;
  margin-inline: auto;

  & > *:not(:last-child) {
    padding-inline: clamp(16px, calc(10vw - 80px), 56px);
    max-width: ${maxDesktopScreenSize};
    margin-inline: auto;
  }

  // & > header {
  //   background-color: ${PRIMARY.PRIMARY_LOGO};

  //   display: flex;
  //   justify-content: center;
  //   gap: 32px;

  //   padding-top: 56px;
  //   padding-bottom: 56px;

  //   & > :nth-child(1) {
  //     color: ${NEUTRALS.OFF_WHITE};
  //     font-size: 28px;
  //     font-weight: 600;
  //     line-height: 48px;
  //   }
  //   & > :nth-child(2) {
  //     ${reusableButton({ secondary: true })}

  //     border-color: ${NEUTRALS.OFF_WHITE};

  //     &:hover,
  //     &:focus-visible {
  //       border-color: ${PRIMARY.PRIMARY_HOVER};
  //     }
  //   }
  // }

  // & > :nth-child(1) {
  //   // padding: 41px 185px;
  //    padding: 76px 185px;
  //   display: grid;
  //   gap: 48px;

  //   & > :nth-child(1) {
  //     display: grid;
  //     gap: 10px;
  //     & > :nth-child(1) {
  //       display: grid;
  //       gap: 2px;
  //       & > :nth-child(4) {
  //         & > :nth-child(1) {
  //           color: #ae79c3;
  //         }
  //       }
  //     }
  //     & > :nth-child(2) {
  //       color: ${NEUTRALS.DARK_GREY_2};
  //     }
  //   }

  //   & > :nth-child(2) {
  //     display: grid;
  //     grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  //     gap: 98px;
  //     position: relative;

  //     & > :nth-child(1) {
  //       display: grid;
  //       gap: 36px;

  //       & > :nth-child(1),
  //       & > :nth-child(2),
  //       & > :nth-child(3) {
  //         & > :nth-child(2) {
  //           width: 100%;
  //           align-self: stretch;
  //           padding: 12px 16px;
  //           border-radius: 8px;
  //           border: 1px solid ${PRIMARY.LIGHT_MAROON};
  //         }
  //       }
  //       & > :nth-child(4) {
  //         max-width: fit-content;
  //         margin-top: -20px;
  //       }
  //     }

  //     & > :nth-child(2) {
  //       border-radius: 8px;
  //       border: 2px solid ${NEUTRALS.BORDER};
  //       padding: 24px 28px 24px 16px;
  //       height: fit-content;
  //       max-width: fit-content;
  //       display: grid;
  //       gap: 18px;

  //       & > :nth-child(1),
  //       & > :nth-child(2),
  //       & > :nth-child(3) {
  //         display: grid;
  //         gap: 4px;
  //         & > :nth-child(1) {
  //           font-size: 16px;
  //         }
  //         & > :nth-child(2) {
  //           font-size: 12px;
  //           color: #798196;
  //         }
  //       }

  //       & > :nth-child(3) {
  //         display: grid;

  //         & > * {
  //           list-style: none;
  //           display: flex;
  //           flex-wrap: wrap;
  //           gap: 24px;
  //           margin-bottom: 16px;
  //         }
  //       }
  //     }

  //     & > :nth-child(3) {
  //       position: absolute;
  //       right: 0px;
  //       bottom: -76px;
  //       height: 260px;
  //       width: 180px;
  //     }
  //   }
  // }

  & > :nth-child(1) {
    // background-image: url("/background/background3.svg");
    // background-repeat: no-repeat;
    // background-size: 100% auto;
    background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.YELLOW_2};

    padding-top: 47px;

    display: flex;
    gap: 100px;

    padding-bottom: 220px;

    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      & > :nth-child(1) {
        position: relative;

        & > :nth-child(2) {
          position: absolute;
          top: 0.8rem;
          right: -3rem;
          font-weight: 600;
        }
      }
    }

    & > :nth-child(2) {
      display: flex;
      column-gap: 129px;

      & > * {
        list-style: none;

        display: flex;
        flex-direction: column;
        gap: 20px;

        & > :nth-child(1) {
          font-size: 20px;
          font-weight: 600;
        }
      }
      & > :last-child {
        & > :last-child {
          width: max-content;
          background-color: transparent;
          padding-inline: 24px;
        }
      }
    }
  }

  & > :last-child {
    background-color: ${PRIMARY.PRIMARY_CTA};
    // max-width: ${maxDesktopScreenSize};
    // margin: auto;

    & > :nth-child(1) {
      padding-inline: clamp(16px, calc(10vw - 80px), 96px);
      padding-top: 8px;
      padding-bottom: 8px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      max-width: ${maxDesktopScreenSize};
      margin-inline: auto;

      span {
        color: ${NEUTRALS.OFF_WHITE};
      }

      & > ul {
        display: flex;
        align-items: center;
        justify-content: center;

        & > :nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;

          margin-right: 87px;

          & > :nth-child(1) {
            & > * {
              fill: ${NEUTRALS.OFF_WHITE};
            }
          }

          & > :nth-child(2) {
            color: ${NEUTRALS.OFF_WHITE};
          }
        }
        & > :nth-child(2) {
          list-style: none;
          & > * {
            list-style: inherit;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;

            cursor: pointer;
          }
        }
      }
    }
  }
`
