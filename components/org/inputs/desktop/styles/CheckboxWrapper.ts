import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const CheckboxWrapper = styled.span`
  label {
    display: flex;
    align-items: center;
    gap: 8px;

    input[type="checkbox"] {
      /* removing default appearance */
      -webkit-appearance: none;
      appearance: none;

      /* creating a custom design */
      padding: 11px; // With this pading, the checkbox get 28px of width and height
      border: 3px solid ${NEUTRALS.BLACK};
      border-radius: 4px;

      cursor: default;

      &:checked {
        border-radius: 4px;
        position: relative;

        &::before {
          content: "L";
          font-family: arial;
          font-weight: 600;
          transform: scaleX(-1) rotate(-37deg);
          scale: 1.9;

          position: absolute;
          top: 0px;

          left: 8px;
        }
      }
    }

    span {
      white-space: nowrap;
    }
  }
`
