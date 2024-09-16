import { NEUTRALS } from "@/assets/Colors"
import styled, { FlattenSimpleInterpolation } from "styled-components"

export const Editor_Header_Row2Wrapper = styled.div`
  padding-block: 10px;
  padding-inline: clamp(8px, 4.9vw - 46px, 24px);

  ul {
    list-style: none;

    display: flex;
    align-items: center;

    column-gap: 8px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: clamp(4px, 2.41vw - 21px, 14px);

      text-transform: capitalize;

      svg {
        & > * {
          fill: #343330;
          stroke: ${NEUTRALS.DARK_GREY};
        }
      }
    }

    & > *:not(:first-child):not(:last-child):not(:nth-last-child(2)) {
      margin-right: 14px;
      margin-right: clamp(2px, 2.9vw - 28px, 14px);

      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: calc(100% + clamp(6px, 2.9vw - 24px, 18px));
        top: 0;

        width: 1px;
        height: 100%;
        background-color: ${NEUTRALS.BORDER};
      }
    }

    & > *:not(:first-child):not(:last-child):not(:nth-child(2)) {
      margin-left: 14px;
      margin-left: clamp(2px, 2.9vw - 28px, 14px);
    }

    & > :first-child {
      margin-right: 1px;
      margin-right: clamp(1px, 9.2vw - 92px, 40px);
    }

    & > :last-child {
      margin-left: auto;

      &::before,
      & > span::before {
        left: -150%;
      }
    }
  }
`

export type Editor_Header_Row2_LI_Props = {
  customStyles?: (() => FlattenSimpleInterpolation) | null
}

export const Editor_Header_Row2_LIWrapper = styled.li<Editor_Header_Row2_LI_Props>`
  ${({ customStyles }) => customStyles && customStyles()};

  height: 32px;

  &,
  & > span {
    position: relative;
  }

  &::before,
  & > span::before {
    content: attr(data-content);
    font-weight: 600;
    height: max-content;
    width: max-content;

    position: absolute;
    top: calc(-100% - calc(8px * 1.5));
    left: 0%;

    background-color: ${NEUTRALS.BORDER};
    color: ${NEUTRALS.BLACK};
    border-radius: 8px;

    padding: 4px 8px;

    overflow: hidden;
    visibility: hidden;
    user-select: none;
    pointer-events: none;
  }

  :is(:focus-visible),
  & > span:focus-visible {
    &::before {
      visibility: visible;
    }
  }
`
