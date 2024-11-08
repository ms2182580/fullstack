import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const LoadingComponentWrapper = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  display: grid;
  align-self: start;
  margin-top: calc(8px * 4);
  padding-bottom: 4.978rem;

  height: 100dvh;

  & > * {
    justify-self: center;
  }

  & > :nth-child(1) {
    margin-bottom: 1.5rem;
  }

  & > :nth-child(2) {
    text-align: center;
    margin-bottom: 3rem;
  }
  & > :nth-child(3) {
    width: 10rem;
    margin-bottom: 3rem;
  }

  & > :nth-child(4) {
    margin-inline: 24px;
  }
`
