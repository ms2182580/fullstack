import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

export const INDEX_D_MoreRecommendationWrapper = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  margin-bottom: 56px;
  background-image: url("/background/background1.svg");
  margin-top: 100px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  position: relative;

  & > :nth-child(1) {
    padding-inline: clamp(16px, calc(10vw - 80px), 96px);
    position: relative;
  }

  & > *:not(:nth-child(1)) {
    margin-inline: clamp(16px, calc(10vw - 80px), 96px);
  }

  & > * {
    /* outline: 2px solid crimson; */
  }

  & > :nth-child(1) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "text image"
      "search search";
    grid-auto-flow: dense;

    & > :nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;

      & > :nth-child(1) {
        grid-area: text;
      }

      & > :nth-child(2) {
        grid-area: image;
      }
    }

    & > :nth-child(2) {
      padding-top: 73px;
      grid-area: search;
    }
    & > :nth-child(3) {
      margin-top: 109rem;
      position: absolute;
      top: 0;
      left: 0;
    }
    & > :nth-child(4) {
      margin-top: 185rem;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  & > :nth-child(2) {
    margin-top: 0px;
    margin-bottom: 40px;
    position: relative;

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

      position: relative;

      padding-right: 70px;

      p {
        white-space: nowrap;
      }
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
  & > :nth-child(4) {
    margin-bottom: 20px;
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

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: capitalize;

  cursor: default;

  ${({ isActiveCategory }) =>
    isActiveCategory &&
    css`
      background-color: ${PRIMARY.PRIMARY_CTA};
      & > p {
        color: ${NEUTRALS.OFF_WHITE};
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
        }
      `}
  }
`
