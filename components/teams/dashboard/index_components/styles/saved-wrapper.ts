import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const SavedWrapper = styled.div`
  border: 1px solid ${NEUTRALS.BORDER};
  border-radius: 8px;

  cursor: not-allowed;
  position: relative;

  & > :nth-child(1) {
    display: flex;
    align-items: center;

    padding: 12px;

    background-color: #f3f1f3;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    & > :nth-child(1) {
      margin-right: 12px;

      & > * {
        fill: ${NEUTRALS.DARK_GREY_3};
      }
    }

    & > :nth-child(2) {
      list-style: none;
      display: flex;
      justify-content: space-between;
      flex: 1;

      & > * {
        display: flex;
        gap: 12px;

        p {
          font-weight: 600;
          color: #908395;
        }
      }

      & > :nth-child(1) {
        width: 20%;
      }

      & > :last-child {
        margin-right: 10%;
      }
    }
  }

  & > :nth-child(2) {
    padding-block: 24px;

    display: grid;
    place-items: center;

    h2 {
      color: ${NEUTRALS.DARK_GREY_3};
      font-weight: 600;
      font-size: 20px;
    }

    p {
      color: ${NEUTRALS.DARK_GREY_3};
    }
  }

  &:after {
    position: absolute;
    content: attr(data-coming-soon);
    top: calc(8px * -6);
    right: 0%;

    border: 2px solid gray;
    border-radius: 8px 8px 8px 0;

    padding: 8px 32px;
    background-color: gray;
    color: white;

    font-weight: 600;

    display: none;
  }

  :is(:focus-visible, :hover) {
    &:after {
      display: block;
    }
  }
`
