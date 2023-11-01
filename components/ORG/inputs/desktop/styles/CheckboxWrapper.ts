import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const CheckboxWrapper = styled.span`
  label {
    display: flex;
    align-items: center;
    gap: 8px;

    /* border: 2px solid crimson; */

    input[type="checkbox"] {
      /* removing default appearance */
      -webkit-appearance: none;
      appearance: none;

      /* creating a custom design */

      padding: 11px; // With this pading, the checkbox get 24px of width and height
      border: 3px solid ${NEUTRALS.BLACK};
      border-radius: 4px;

      cursor: pointer;

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

    /* input.CHECKED {
      border-radius: 4px;
      background-color: #007a7e;
      position: relative;

      &::before {
        content: "A";
        font-size: 1.5em;
        color: #fff;
        position: absolute;
        right: 1px;
        top: -5px;
      }
    } */

    span {
      white-space: nowrap;
    }
  }
`
