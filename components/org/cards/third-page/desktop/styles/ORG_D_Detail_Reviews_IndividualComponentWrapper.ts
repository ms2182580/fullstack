import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

const enum Tooltip_Vars {
  LEFT = "50%",
}

export const ORG_D_Detail_Reviews_IndividualComponentWrapper = styled.div`
  display: grid;
  gap: 24px;

  & > button {
    ${reusableButton({ secondary: true })};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: fit-content;
    margin-left: auto;

    border-radius: 999px;

    &:focus-visible,
    &:hover {
      & > :nth-child(1) {
        & > * {
          fill: ${NEUTRALS.OFF_WHITE};
        }
      }
    }
  }

  & > ul {
    list-style: none;

    display: grid;
    gap: 24px;

    position: relative;

    li {
      border-radius: 8px;
      border: 1px solid ${PRIMARY.PRIMARY_BACKGROUND};
      background-color: ${PRIMARY.PRIMARY_BACKGROUND};
      padding: 12px 16px 16px 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

      & > footer {
        display: flex;
        justify-content: space-between;
        width: 100%;

        & > :nth-child(1) {
          display: flex;
          gap: 8px;

          & > p:nth-of-type(1) {
            font-weight: 700;
          }
        }

        & > :last-child {
          position: relative;

          & > div {
            & > :nth-child(2) {
              position: absolute;
              top: -140%;
              left: -400%;

              white-space: nowrap;

              background-color: white;
              padding: 6px;
              border-radius: 8px;
              border-bottom-right-radius: 0;

              filter: drop-shadow(1px 3px 8px rgba(0, 0, 0, 0.2));

              font-size: 14px;

              &:after {
                content: "";
                position: absolute;
                top: 100%;
                right: 0%;

                border: 4px solid white;
                border-color: white white transparent transparent;
              }
            }
          }
        }
      }
    }
  }
`
