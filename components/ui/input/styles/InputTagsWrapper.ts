import styled from "styled-components"

type Props = {
  isInputFocused: boolean
}

export const InputTagsWrapper = styled.div<Props>`
  display: flex;
  flex-wrap: wrap; /* Allow tags to wrap to a new line if necessary */
  align-items: flex-start; /* Center items vertically */

  gap: 8px;

  border: 1px solid #ccc; /* Optional border for better visibility */
  border-radius: 8px;

  padding: 12px 16px;

  overflow-y: auto;
  overflow-x: hidden;

  max-height: 350px;

  /* height: clamp(350px, 100vh, 350px); */
  min-height: 95px;
  max-height: 350px;

  cursor: text;

  outline: ${({ isInputFocused }) =>
    isInputFocused ? "4px solid #64AFFB" : "none"};

  & > * {
    outline: 2px solid crimson;
  }

  & > div {
    background-color: #e0e0e0; /* Background color for tags */
    border-radius: 3px; /* Rounded corners */
    padding: 5px 10px; /* Padding inside each tag */
    margin-right: 5px; /* Space between tags */
    cursor: pointer;

    /* white-space: break-spaces; */
    word-break: break-all;
  }

  & > input {
    /* border: none; Remove default border */
    border: none;
    outline: none; /* Remove outline on focus */
    padding: 5px; /* Padding inside the input */
    /* min-width: 120px; */
    width: min-content;
  }
`
