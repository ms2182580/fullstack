import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

export enum All_Layouts_Accepted {
  like_PVES = "like_PVES",
  like_PAT = "like_PAT",
}

type INDEX_ORG_Search_DWrapper_Props = {
  someLayoutSpecial?: keyof typeof All_Layouts_Accepted
}

const PROPS = {
  HEIGHT: "4px",
  BACKGROUND_COLOR: `${NEUTRALS.LIGHT_GREY}`,
}

export const INDEX_ORG_Search_DWrapper = styled.div<INDEX_ORG_Search_DWrapper_Props>`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-bottom: 40px;

  & > * {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "title title title"
      "cards cards cards"
      ". . finalButton";

    padding-top: 21px;
    position: relative;

    & > :nth-child(1) {
      grid-area: title;

      text-transform: capitalize;
    }

    & > :nth-child(2) {
      grid-area: cards;

      display: grid;
      grid-auto-flow: column;
      gap: 24px;

      & > * {
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;

        display: grid;

        padding-bottom: 24px;

        & > :nth-child(1) {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;

          overflow: hidden;

          position: relative;

          & > :nth-child(2) {
            position: absolute;
            right: 16px;
            bottom: 16px;
          }
        }

        & > *:not(:first-child) {
          padding-inline: 24px;
        }

        & > :nth-child(2) {
          padding-top: 24px;
        }

        & > :nth-child(2),
        & > :nth-child(3) {
          padding-bottom: 8px;
        }

        & > :nth-child(5),
        & > :nth-child(6) {
          padding-bottom: 32px;
        }

        & > :last-child {
          margin-top: auto;
          margin-inline: 24px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 16px;

          font-size: 16px;
          font-weight: 600;
          color: hsl(210, 50%, 99.2%);
          line-height: 19.2px;
          letter-spacing: 0.256px;

          background-color: ${PRIMARY.PRIMARY_CTA};
          padding-top: 9px;
          padding-bottom: 9px;

          border-radius: 6.2px;
          border: medium;

          cursor: pointer;

          white-space: nowrap;

          &:hover,
          &:focus-visible {
            background-color: ${PRIMARY.PRIMARY_HOVER};
          }
        }
      }
    }

    & > :nth-child(3) {
      grid-area: finalButton;
      justify-self: flex-end;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: ${PROPS.HEIGHT};
      background-color: ${PROPS.BACKGROUND_COLOR};
    }
  }

  ${({ someLayoutSpecial }) =>
    someLayoutSpecial === "like_PVES" &&
    css`
      & > :nth-child(1) {
        display: grid;
        gap: 24px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
          "title title title title"
          "cards cards cards cards"
          ". . . finalButton";

        & > :nth-child(1) {
          grid-area: title;
        }

        & > :nth-child(2) {
          grid-area: cards;
          padding-bottom: 4px;

          & > * {
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
            border-radius: 8px;

            padding-bottom: 24px;
            display: grid;

            & > :nth-child(1) {
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;

              overflow: hidden;

              position: relative;

              & > :nth-child(2) {
                position: absolute;
                right: 16px;
                bottom: 16px;
              }
            }

            & > *:not(:first-child) {
              padding-inline: 24px;
            }

            & > :nth-child(4) {
              color: ${NEUTRALS.DARK_GREY};
            }

            & > :nth-child(5) {
              font-weight: 600;
            }

            & > :nth-child(6) {
              display: grid;
              gap: 6px;

              margin-bottom: 24px;
            }

            & > :last-child {
              font-size: 12px;
            }
          }
        }

        & > :nth-child(3) {
          grid-area: finalButton;
          justify-self: flex-end;
        }
      }
    `}

  &.dataComesFromBackend {
    & > * {
      & > :nth-child(2) {
        & > * {
          display: grid;
          justify-self: center;

          width: clamp(310px, 10vw - 200px, 400px);

          & > :nth-child(2) {
            text-transform: capitalize;
          }

          & > :nth-child(4) {
            color: ${NEUTRALS.DARK_GREY};
          }
        }
      }
    }
  }
`
