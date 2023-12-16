import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

export enum All_Layouts_Accepted {
  like_PVES = "like_PVES",
}

type INDEX_ORG_Search_DWrapper_Props = {
  someLayoutSpecial: keyof typeof All_Layouts_Accepted
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

  ${({ someLayoutSpecial }) =>
    someLayoutSpecial === "like_PVES"
      ? css`
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

              display: grid;
              grid-auto-flow: column;
              gap: 24px;

              & > * {
                box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
                border-radius: 8px;

                display: grid;
                gap: 6px;

                padding-bottom: 24px;

                & > :nth-child(1) {
                  border-top-left-radius: 8px;
                  border-top-right-radius: 8px;

                  overflow: hidden;
                  width: 100%;

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

                & > :nth-child(5) {
                  font-weight: 600;
                }

                & > :nth-child(6) {
                  display: grid;
                  gap: 6px;

                  margin-bottom: 24px;
                }
              }
            }

            & > :nth-child(3) {
              grid-area: finalButton;
              justify-self: flex-end;
            }
          }
        `
      : css``}

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
          width: 100%;

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

          & > * {
            width: 100%;
            & > * {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 16px;
            }
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

  & > * {
    padding-top: 21px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: ${PROPS.HEIGHT};
      background-color: ${PROPS.BACKGROUND_COLOR};
    }

    & > :nth-child(2) {
      /* & > * {
        & > :last-child {
          margin-top: auto;

          margin-inline: 24px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;

          font-size: 12px;
          font-weight: 600;
          color: ${NEUTRALS.OFF_WHITE};
          line-height: 19.2px;
          letter-spacing: 0.256px;

          background-color: ${PRIMARY.PRIMARY_CTA};
          border-radius: 6.2px;
          border: none;

          padding: 9px 62px;

          cursor: pointer;
        }
      } */
    }
  }

  /* & > * {
    border-top: 4px solid ${NEUTRALS.LIGHT_GREY};
    padding-top: 21px;

    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "title title title"
      "card1 card2 card3"
      ". . finalButton";

    & > :nth-child(1) {
      grid-area: title;
    }

    & > :nth-child(2) {
      grid-area: card1;
    }
    & > :nth-child(3) {
      grid-area: card2;
    }

    & > :nth-child(4) {
      grid-area: card3;
    }

    & > :nth-child(5) {
      grid-area: finalButton;
      width: 45%;

      justify-self: end;
      & > :nth-child(1) {
        width: 100%;
      }
    }

    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4) {
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
      border-radius: 8px;

      display: grid;
      grid-template-rows: min(209px) repeat(5, auto);

      & > :nth-child(1) {
        justify-self: center;
        margin: auto;

        height: fit-content;
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

      & > :nth-child(4),
      & > :nth-child(5) {
        padding-bottom: 32px;
      }

      & > :last-child {
        padding-bottom: 24px;
        align-self: end;

        & > :nth-child(1) {
          width: 100%;
          & > * {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
          }
        }
      }
    }
  } */
`
