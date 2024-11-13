import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const SBSGContentSkipWrapper = styled.div`
  margin-top: 20px;

  display: flex;
  justify-content: right;
  gap: calc(8px * 2);

  color: ${PRIMARY.PRIMARY_CTA};

  & > p {
    text-decoration: underline;

    &::first-letter {
      text-transform: capitalize;
    }

    &:is(:hover, :focus-visible) {
      cursor: default;
      opacity: 0.8;
    }
  }

  & > :nth-child(2) {
    position: relative;

    & > :nth-child(2) {
      position: absolute;
      left: 150%;
      bottom: 0;

      width: max-content;
      padding: 8px;
      border-radius: 4px;

      color: white;
      background-color: ${PRIMARY.PRIMARY_CTA};

      &:after {
        content: "";
        position: absolute;
        bottom: 16%;
        left: -19%;

        border: 14px solid ${PRIMARY.PRIMARY_CTA};
        border-color: transparent ${PRIMARY.PRIMARY_CTA} transparent transparent;
      }
    }
  }
`
