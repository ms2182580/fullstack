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
  /* border: 2px solid green; */
  display: grid;
  place-items: center;

  width: 100%;

  & > ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    width: 100%;

    & > li {
      /* border: 2px solid crimson; */

      & > :nth-child(odd) {
        /* border: 2px solid red; */
        /* justify-content: end; */
        text-align: end;
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
