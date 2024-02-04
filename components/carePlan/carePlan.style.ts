import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

export const CarePlan_Wrapper = styled.div`
  display: flex;

  .stepper {
    margin: 24px;
    min-width: 350px;
  }
  .content_tabs {
    margin-top: 24px;
    min-height: 100vh;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;

    .tab_title {
      display: flex;
      justify-content: center;
      padding-top: 62px;
      padding-bottom: 15px;
      font-family: Poppins;
      font-size: 31px;
      font-weight: 600;
      line-height: 45px;
      letter-spacing: 0px;
      text-align: left;
      color: #312138;
    }
    .search_content {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }

    .tab_filter {
      position: relative;
      max-width: 794.38px;
      margin: auto;

      & > :first-child {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0px;
        margin: auto;

        visibility: hidden;

        &.navBarLeftArrowShouldDisplay {
          visibility: visible;
        }

        & > :nth-child(1) {
          border: 2px solid ${PRIMARY.PRIMARY_CTA};
          border-radius: 8px;

          background-color: ${NEUTRALS.OFF_WHITE};

          height: 100%;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;
          z-index: 2;

          cursor: default;

          & > * {
            & > * {
              fill: ${PRIMARY.PRIMARY_CTA};
            }
          }

          &:hover {
            background-color: ${PRIMARY.PRIMARY_CTA};
            & > * {
              & > * {
                fill: ${NEUTRALS.OFF_WHITE};
              }
            }
          }
        }

        & > :nth-child(2) {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          height: 100%;
          width: 75px;
          background: linear-gradient(
            -90deg,
            hsla(0, 0%, 100%, 20%) 0%,
            hsl(0, 0%, 100%) 8%
          );
        }
      }

      & > :nth-child(2) {
        display: flex;
        flex-wrap: nowrap;
        gap: 12px;
        white-space: nowrap;
        overflow-x: hidden;

        cursor: ew-resize;

        position: relative;

        padding-right: 70px;
      }

      & > :last-child {
        position: absolute;
        right: 0px;
        top: 0;
        bottom: 0;
        margin: auto;

        &.navBarRightArrowShouldDisable {
          & > :nth-child(1) {
            border: 2px solid ${NEUTRALS.LIGHT_GREY};
            background-color: ${NEUTRALS.LIGHT_GREY};

            cursor: not-allowed;

            & > * {
              & > * {
                fill: ${NEUTRALS.BLACK};
              }
            }
          }
        }

        & > :nth-child(1) {
          border: 2px solid ${PRIMARY.PRIMARY_CTA};
          border-radius: 8px;
          height: 100%;

          background-color: ${NEUTRALS.OFF_WHITE};

          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;
          z-index: 2;

          cursor: default;

          /* border: 2px solid green !important; */

          & > * {
            & > * {
              fill: ${PRIMARY.PRIMARY_CTA};
            }
          }

          &:not(.navBarRightArrowShouldDisable):hover {
            background-color: ${PRIMARY.PRIMARY_CTA};
            & > * {
              & > * {
                fill: ${NEUTRALS.OFF_WHITE};
              }
            }
          }
        }

        & > :nth-child(2) {
          position: absolute;
          top: 0;
          right: 0px;
          z-index: 1;
          height: 100%;
          width: 75px;
          background: linear-gradient(
            90deg,
            hsla(0, 0%, 100%, 20%) 0%,
            hsl(0, 0%, 100%) 8%
          );
        }
      }
    }

    .tab_panel {
      margin-top: 17px;
      position: relative;
      margin-left: 50px;
      &:before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 806px;
        height: 2px;
        background-color: #d3d6d7;
        margin: auto;
      }
      .tab_panel_title {
        font-family: Poppins;
        font-size: 22px;
        font-weight: 600;
        line-height: 33px;
        letter-spacing: 0.04em;
        text-align: left;
        color: #00080b;
        padding-top: 14px;
      }
      .tab_cards_container {
        display: flex;
        gap: 16px;
        margin-top: 16px;
        .tab_card {
          width: 260px;

          border-radius: 5px;
          background: #fff;
          box-shadow: 0px 1.2916667461395264px 3.875px 0px #00000033;
          .tab_card_body {
            padding: 16px;
            .tab_card_title {
              font-family: Poppins;
              font-size: 16px;
              font-weight: 800;
              line-height: 23px;
              letter-spacing: 0.03em;
              text-align: left;
              color: #00080b;
            }
            .tab_card_subtitle {
              font-family: Poppins;
              font-size: 13px;
              font-weight: 600;
              line-height: 19px;
              letter-spacing: 0.02em;
              text-align: left;
              color: #00080b;
            }
            .tab_card_desc {
              padding: 20px 0px;
              font-family: Poppins;
              font-size: 10px;
              font-weight: 400;
              line-height: 19px;
              letter-spacing: 0.02em;
              text-align: left;
              color: #00080b;
            }
            .tab_card_btn {
              button {
                width: 100%;
                p {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                }
              }
            }
          }
        }
      }
      .pagingation_btn {
        display: flex;
        justify-content: end;
        margin-right: 50px;
        padding: 16px 0px;
      }
    }
  }
`
export const Search_Wrapper = styled.div`
  max-width: fit-content;
  display: flex;
  align-items: end;
  gap: 8px;
  .search_label {
    display: grid;
    grid-template-columns: 300px 250px 200px;
    font-family: Poppins;
    font-size: 10px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #6c6c6c;
    span {
      color: red;
    }
  }
  .search_input {
    display: grid;
    grid-template-columns: 300px 250px 200px;
    height: 50px;
    border: 1px solid #000000;
    border-radius: 5px;
    overflow: hidden;
    & :not(:first-child) {
      border-left: 1px solid black;
    }
    .inner_input {
      display: -webkit-box;
      gap: 10px;
      padding: 15px;
      align-items: center;

      input {
        border: none;
        outline: none;
      }
    }
  }
  .search_btn {
    width: 52.96px;
    height: 49.08px;
    left: 753.04px;
    padding: 5.17px, 31px, 5.17px, 31px;
    border-radius: 5.17px;
    gap: 5.17px;
    background-color: #6e3a82;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
type Props_LI = {
  isActiveCategory?: boolean
}
export const LI_Category = styled.li<Props_LI>`
  list-style: none;
  border: 2px solid ${PRIMARY.PRIMARY_CTA};
  padding: 8px 16px;
  border-radius: 8px;
  height: fit-content;

  background-color: ${NEUTRALS.OFF_WHITE};

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: capitalize;

  cursor: default;
  & > p {
    white-space: nowrap;
  }

  ${({ isActiveCategory }) =>
    isActiveCategory &&
    css`
      background-color: ${PRIMARY.PRIMARY_CTA};
      & > p {
        color: ${NEUTRALS.OFF_WHITE};
        white-space: nowrap;
      }
    `}

  &:hover,
  &:focus-visible {
    ${({ isActiveCategory }) =>
      !isActiveCategory &&
      css`
        background-color: ${PRIMARY.PRIMARY_HOVER};
        border-color: ${PRIMARY.PRIMARY_HOVER};

        & > p {
          color: ${NEUTRALS.OFF_WHITE};
          white-space: nowrap;
        }
      `}
  }
`
