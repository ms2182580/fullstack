import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Results_CardTypedFlow_IndividualsWrapper = styled.section`
  display: grid;

  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;

    & > :nth-child(2) {
      color: ${PRIMARY.PRIMARY_CTA};
      font-weight: 600;

      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover,
      &:focus-visible {
        color: ${PRIMARY.PRIMARY_HOVER};
      }
    }
  }

  & > :nth-child(2) {
    margin-bottom: 16px;
    font-weight: 600;
  }

  & > :nth-child(3) {
    display: grid;

    overflow-x: scroll;

    & > :nth-child(1) {
      display: flex;
      gap: 12px;

      & > * {
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;

        margin-bottom: 24px;
        margin-left: 8px;

        display: flex;
        gap: 8px;

        & > :nth-child(1) {
          border-top-left-radius: 8px;
          display: grid;

          & > :nth-child(1) {
            overflow: hidden;
            border-top-left-radius: 8px;

            width: 205px;
          }

          & > :nth-child(2) {
            background-color: ${PRIMARY.PRIMARY_CTA};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;

            padding: 8px 16px;

            border-bottom-left-radius: 8px;
            border: none;

            color: ${NEUTRALS.OFF_WHITE};

            &:hover,
            &:focus-visible {
              background-color: ${PRIMARY.PRIMARY_HOVER};
            }
          }
        }

        & > :nth-child(2) {
          display: grid;

          padding-top: 8px;
          padding-bottom: 8px;

          width: 300px;

          & > :nth-child(1) {
            font-weight: 700;
            font-size: 24px;
          }

          & > :nth-child(2) {
            font-size: 16px;
            font-weight: 400;
            color: ${NEUTRALS.BLACK};
          }

          & > :nth-child(3) {
            font-size: 16px;
            font-weight: 400;
            color: ${NEUTRALS.DARK_GREY};
          }

          & > :nth-child(4) {
            & > * {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
`
