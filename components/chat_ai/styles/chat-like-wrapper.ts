import { NEUTRALS, PRIMARY, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import styled, { css, keyframes } from "styled-components"

const keyFramesRotation_l30 = keyframes`
   0%,20% {transform: rotate(0)}
   100%   {transform: rotate(360deg)}
`

const keyFramesRotation_l31 = keyframes`
   50% {transform: rotate(var(--s,90deg))}
   100% {transform: rotate(0)}
`

type Props = {
  isFetching: boolean
}

export const ChatLikeWrapper = styled.div<Props>`
  display: grid;
  place-items: start;

  width: 100%;
  min-height: 100dvh;

  position: relative;

  & > ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    width: 100%;

    & > li {
      & > :nth-child(odd) {
        width: fit-content;
        max-width: 80%;
        margin-left: auto;

        background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};
        padding: calc(8px * 2);
        border-radius: 12px;

        color: ${NEUTRALS.OFF_WHITE_2};

        margin-block: calc(8px * 2);

        word-break: break-all;
      }

      & > :nth-child(even) {
        list-style: none;
        /* border: 2px solid green; */
      }

      & > p {
        /* margin-left: auto; */
      }
    }
  }

  ${({ isFetching }) =>
    isFetching &&
    css`
      & > :last-child {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;

        margin-inline: auto;

        margin-bottom: calc(8px * 2);

        width: 28px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: #f896d8;
        transform-origin: top;
        display: grid;
        animation: ${keyFramesRotation_l30} 1.9s infinite ease-in-out;

        &::before,
        &::after {
          content: "";
          grid-area: 1/1;
          background: #edf67d;
          border-radius: 50%;
          transform-origin: top;
          animation: inherit;
          animation-name: ${keyFramesRotation_l31};
        }
        &::after {
          background: ${PRIMARY.PRIMARY_CTA};
          --s: 180deg;
        }
      }
    `}
`
