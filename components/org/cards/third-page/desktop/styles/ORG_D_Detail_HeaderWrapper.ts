import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

type Props = {
  howManyRender: number
}

export const ORG_D_Detail_HeaderWrapper = styled.div<Props>`
  display: grid;
  gap: 26px;

  & > :nth-child(1) {
    margin-left: 81px;
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: calc(8px * 2);

    background-color: ${NEUTRALS.LIGHT_GREY2};

    & > li {
      list-style: none;

      padding-top: 16px;
      padding-bottom: 16px;

      & > a {
        padding-top: 16px;
        padding-bottom: 16px;

        text-decoration: none;
        color: ${NEUTRALS.BLACK};
        text-transform: capitalize;
        font-weight: 400;
        font-size: 16px;

        padding-inline: 20px;

        border-bottom: 4px solid transparent;

        &:hover {
          border-color: ${NEUTRALS.DARK_GREY_3};
        }
      }

      span {
        position: relative;

        & > * {
          & > * {
            stroke: #6e3a82;
          }
        }
      }
    }
  }
`
