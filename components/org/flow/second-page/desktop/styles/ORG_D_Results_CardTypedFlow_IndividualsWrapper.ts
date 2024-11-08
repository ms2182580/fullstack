import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Results_CardTypedFlow_IndividualsWrapper = styled.section`
  display: grid;

  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;

    & > :nth-child(2) {
      color: ${PRIMARY.PRIMARY_CTA};
      font-weight: 600;

      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover,
      &:focus-visible {
        color: ${PRIMARY.PRIMARY_HOVER};
      }
    }
  }

  & > :nth-child(2) {
    margin-bottom: 16px;
    font-weight: 600;
  }

  & > :nth-child(3) {
    display: grid;

    & > :nth-child(1) {
      display: flex;
      gap: 24px;

      overflow-x: scroll;

      list-style: none;

      padding-right: 16px;
      padding-top: 4px;

      & > li > article {
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;

        margin-bottom: 24px;
        /* margin-left: 8px; */

        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 178px 1fr;

        min-width: 100%;

        gap: 8px;

        & > :nth-child(1) {
          border-top-left-radius: 8px;
          display: grid;

          & > :nth-child(1) {
            border-top-left-radius: inherit;

            & > img {
              border-top-left-radius: inherit;
              /* This height is controlling the height of the whole card */
              height: 107px;
              min-height: 100%;

              object-fit: cover;
              object-position: 50% 40%;
            }
          }

          & > :nth-child(2) {
            background-color: ${PRIMARY.PRIMARY_CTA};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;

            padding: 8px 16px;

            border-bottom-left-radius: 8px;
            border: none;

            color: ${NEUTRALS.OFF_WHITE};
            font-size: 16px;
            font-weight: 600;

            margin-top: auto;
            height: 48px;

            cursor: pointer;

            &:hover,
            &:focus-visible {
              background-color: ${PRIMARY.PRIMARY_HOVER};
            }
          }
        }

        & > :nth-child(2) {
          display: grid;

          padding: 8px 10px 8px 8px;

          & > :nth-child(1) {
            position: relative;

            h3 {
              font-weight: 700;
              font-size: 16px;

              text-transform: capitalize;

              overflow: hidden;
              text-overflow: ellipsis;
              white-space: pre;
            }

            & > :nth-child(2) {
              position: absolute;
              top: 100%;
              left: 0;

              padding: 4px 8px;
              background-color: ${NEUTRALS.DARK_GREY_2};

              border-radius: 4px;

              color: ${NEUTRALS.OFF_WHITE};
              text-transform: capitalize;

              &:after {
                content: "";
                position: absolute;
                bottom: 100%;
                right: 85%;

                border: 8px solid ${NEUTRALS.DARK_GREY_2};
                border-color: transparent transparent ${NEUTRALS.DARK_GREY_2}
                  transparent;
              }
            }
          }

          & > :nth-child(2) {
            margin-top: auto;

            & > :nth-child(1) {
              font-size: 12px;
              font-weight: 400;
              color: ${NEUTRALS.BLACK};

              text-transform: capitalize;
            }

            & > :nth-child(2) {
              font-size: 12px;
              font-weight: 400;
              color: ${NEUTRALS.DARK_GREY};

              text-transform: capitalize;
            }

            & > :nth-child(3) {
              width: max-content;
              & > :nth-child(1) {
                margin-right: 5px;

                p {
                  font-weight: 700;
                  font-size: 12px;
                }
              }

              & > * {
                font-weight: 700;
                font-size: 12px;

                color: ${NEUTRALS.DARK_GREY};
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
`
