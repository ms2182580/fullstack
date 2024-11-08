import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import styled, { css } from "styled-components"

const Variables = {
  widthArrows: "48px",
}

type Props = {
  shouldDisplayLeftArrow: boolean
  shouldArrowRightBeDisabled: boolean
}

export const INDEX_D_HorizontalNavigationNavWrapper = styled.div<Props>`
  display: flex;

  white-space: nowrap;
  overflow-x: hidden;

  position: relative;

  margin-bottom: 40px;

  & > :nth-child(1),
  & > :last-child {
    background-color: ${NEUTRALS.OFF_WHITE};

    border-radius: 5px;

    width: ${Variables.widthArrows};
    height: 100%;

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 99;

    & > :nth-child(1) {
      width: 100%;
      height: 100%;
      background-color: ${NEUTRALS.OFF_WHITE};
      border: 2px solid ${PRIMARY.PRIMARY_CTA};
      border-radius: inherit;

      display: flex;
      align-items: center;
      justify-content: center;

      & > * {
        & > * {
          fill: ${PRIMARY.PRIMARY_CTA};
        }
      }
    }
  }

  & > :nth-child(1) {
    position: absolute;
    z-index: 3;

    top: 0;
    bottom: 0;
    left: 0px;

    visibility: hidden;

    ${({ shouldDisplayLeftArrow }) =>
      shouldDisplayLeftArrow &&
      css`
        visibility: visible;

        & > :nth-child(1) {
          &:after {
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            bottom: 0;
            left: 0px;

            width: calc(${Variables.widthArrows} + 20px);
            height: 100%;
            background: linear-gradient(-90deg, transparent 0%, white 22%);
          }
        }
      `}
  }

  ul {
    list-style: none;
    display: flex;
    gap: 16px;

    white-space: nowrap;
    overflow-x: hidden;

    position: relative;
    z-index: 1;

    padding-right: 55px;
  }

  & > :last-child {
    position: absolute;
    z-index: 2;
    right: 0px;
    top: 0;
    bottom: 0;
    margin: auto;

    ${({ shouldArrowRightBeDisabled }) =>
      shouldArrowRightBeDisabled &&
      css`
        & > :nth-child(1) {
          cursor: not-allowed;

          border: 2px solid ${NEUTRALS.LIGHT_GREY};
          background-color: ${NEUTRALS.LIGHT_GREY};

          & > * {
            & > * {
              fill: ${NEUTRALS.DARK_GREY};
            }
          }
        }
      `}

    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      right: 0px;

      width: calc(${Variables.widthArrows} + 20px);
      height: 100%;
      background: linear-gradient(90deg, transparent 0%, white 22%);
    }
  }
`

type Props_LI_Wrapper = {
  isActiveCategory?: boolean
}

export const LI_Wrapper = styled.li<Props_LI_Wrapper>`
  list-style: none;
  border: 2px solid ${PRIMARY.PRIMARY_CTA};
  padding: 8px 16px;
  border-radius: 8px;

  background-color: ${NEUTRALS.OFF_WHITE};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  cursor: default;

  & > p {
    ${Paragraph()};

    text-transform: capitalize;
    color: ${PRIMARY.PRIMARY_CTA};
    font-weight: 600;

    white-space: nowrap;
  }

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
