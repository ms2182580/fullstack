import { NEUTRALS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
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
  MAX_WIDTH: "400px",
}

export const INDEX_ORG_Search_DWrapper = styled.article<INDEX_ORG_Search_DWrapper_Props>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
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
      grid-template-columns: repeat(3, 1fr);

      grid-auto-flow: column;

      gap: 24px;

      & > * {
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        background-color: white;

        padding-bottom: 24px;

        min-width: 100%;

        display: flex;
        flex-direction: column;

        & > :nth-child(1) {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;

          position: relative;

          & > img {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            height: 250px;

            object-fit: cover;
            object-position: 50% 40%;
          }
        }

        & > :not(:first-child) {
          padding-inline: 24px;
        }

        & > :nth-child(2) {
          padding-top: 24px;
          font-weight: 800;

          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        & > :nth-child(3) {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        & > :nth-child(3),
        & > :nth-child(4) {
          padding-top: 8px;
        }

        & > :nth-child(6) {
          padding-top: 32px;

          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding-bottom: 32px;
        }

        & > :last-child {
          margin-top: auto;
          margin-inline: 24px;

          ${reusableButton({})}
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 8px;
          cursor: pointer;

          & > :nth-child(1) {
            flex-shrink: 0;
          }
        }
      }
    }

    & > :nth-child(3) {
      grid-area: finalButton;
      justify-self: flex-end;

      ${reusableButton({ secondary: true })}

      cursor: pointer;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: ${PROPS.HEIGHT};
      /* background-color: ${PROPS.BACKGROUND_COLOR}; */

      background: linear-gradient(
        90deg,
        hsla(195, 4.8%, 83.5%, 0.9) 1%,
        hsla(195, 4.8%, 83.5%, 1) 50%,
        hsla(195, 4.8%, 83.5%, 0.9) 99%
      );

      border-radius: 50%;
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
`
