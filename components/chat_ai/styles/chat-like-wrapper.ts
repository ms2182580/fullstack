import { NEUTRALS, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import styled, { keyframes } from "styled-components"

const keyFramesRotation = keyframes`
  0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const ChatLikeWrapper = styled.div`
  display: grid;
  place-items: center;

  width: 100%;

  position: relative;

  & > ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    width: 100%;

    & > li {
      & > :nth-child(odd) {
        width: fit-content;
        margin-left: auto;

        background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};
        padding: calc(8px * 2);
        border-radius: 12px;

        color: ${NEUTRALS.OFF_WHITE_2};

        margin-block: calc(8px * 2);
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

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid black;
    border-bottom-color: green;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${keyFramesRotation} 1s linear infinite;
  }
`
