import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const INDEX_NavBar_ORGOnly_D_Wrapped = styled.div`
  background-color: ${PRIMARY.OFF_WHITE};
  position: relative;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: clamp(16px, calc(10vw - 80px), 96px);

    padding-top: 28px;
    padding-bottom: 28px;

    position: relative;

    & > :nth-child(1) {
      margin-right: clamp(8px, 1vw, 50px);
      cursor: pointer;

      display: flex;
      gap: 8px;

      & > :nth-child(1) {
        color: ${PRIMARY.PRIMARY_LOGO};
      }

      & > :nth-child(2) {
        & > * {
          fill: ${PRIMARY.PRIMARY_LOGO};
        }
      }
    }

    & > :nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: clamp(8px, calc(10vw - 90px), 56px);

      position: relative;

      & > :nth-child(2) {
        list-style: none;
        display: flex;
        align-items: center;

        cursor: pointer;
        border-bottom: 4px solid transparent;
        gap: clamp(8px, calc(10vw - 90px), 56px);

        margin-right: 8px;

        li {
          white-space: pre;

          & > h4 {
            font-weight: 500;
          }
          &.active {
            border-bottom: 4px solid ${PRIMARY.PRIMARY_CTA};
          }
        }
      }
    }

    & > :nth-child(3) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      cursor: pointer;

      & > :nth-child(1) {
        &:hover,
        &:focus {
          & > * {
            fill: hsl(0, 0%, 40%);
          }
        }
      }
    }
  }
`
