import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_Review_Modal_ViewAllWrapper = styled.aside`
  position: fixed;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: clamp(932px, 91%, 1310px);

  background-color: ${NEUTRALS.OFF_WHITE};

  cursor: default;

  padding-top: 42px;
  padding-inline: 31px;
  border-radius: 8px;

  display: grid;
  gap: 36px;

  & > :nth-child(1) {
    position: absolute;
    right: 29px;
    top: 26px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;

    & > :nth-child(1) > path {
      fill: ${NEUTRALS.BLACK};
    }
  }

  & > :nth-child(2) {
    color: ${PRIMARY.PRIMARY_CTA};

    & > :nth-child(2) {
      margin-bottom: 36px;
    }

    & > :nth-child(4) {
      & > :nth-child(2) {
        border: none;
        margin-bottom: 34px;
      }
    }
  }

  & > :nth-child(3) {
    display: flex;
    justify-content: space-between;

    & > :nth-child(1) {
      font-weight: 400;
    }

    & > :nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid ${PRIMARY.PRIMARY_CTA};
      border-radius: 6px;

      padding: 9px;

      cursor: pointer;

      &:hover,
      &:focus-visible {
        background-color: ${PRIMARY.PRIMARY_CTA};

        & > * {
          fill: ${NEUTRALS.OFF_WHITE};
        }
      }
    }
  }

  & > :nth-child(5) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }
`
