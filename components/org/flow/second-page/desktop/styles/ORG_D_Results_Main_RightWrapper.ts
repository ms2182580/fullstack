import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export type Props = {
  backendData?: boolean
}

export const ORG_D_Results_Main_RightWrapper = styled.div<Props>`
  border-top-right-radius: inherit;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-inline: 44px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  & > :nth-child(1) {
    font-weight: 700;
  }

  & > :nth-child(3) {
    color: ${NEUTRALS.DARK_GREY};
    text-transform: capitalize;
  }

  & > :nth-child(6) {
    display: grid;
    gap: 24px;

    position: relative;
    width: fit-content;

    & > :nth-child(1) {
      list-style: none;
      width: fit-content;

      display: grid;
      gap: 16px;
      position: relative;

      & > * {
        display: flex;
        align-items: center;

        gap: 8px;

        text-transform: capitalize;
        white-space: nowrap;

        & > :nth-child(1) {
          color: ${PRIMARY.PRIMARY_HOVER};
          font-weight: 600;
        }
      }
    }
  }
`
