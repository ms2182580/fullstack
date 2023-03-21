import styled from "styled-components"
import { NEUTRALS } from "../../../../../assets/Colors"

export const STResults_FilterCheckboxContainerWrapper = styled.div`
  & > div:nth-child(1),
  & > div:nth-child(2) {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 26px;
    padding-inline: 22px 12px;
  }

  & > div:nth-child(1) > span {
    cursor: pointer;
  }
`

export const STResults_FilterCheckboxContainerUL = styled.ul`
  list-style: none;
  margin-left: 58px;
  display: ${(x) => (x.show ? "block" : "none")};

  & > li {
    margin-bottom: 31px;

    & > label {
      display: flex;
      align-items: center;
      height: 36px;
      position: relative;
      padding-left: 49px;
      cursor: pointer;
      user-select: none;

      & > p {
        white-space: nowrap;
      }

      & > input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      & > span {
        position: absolute;
        top: 0;
        left: 0;
        height: 36px;
        width: 36px;
        border: 4px solid ${NEUTRALS.BLACK};
        border-radius: 4px;

        &:after {
          content: "";
          position: absolute;
          display: none;
        }
      }

      &:hover input ~ span {
        background-color: ${NEUTRALS.LIGHT_GREY};
      }
      /* This apply styles when the checkbox is chequed */
      /* & input:checked ~ span {
        background-color: #2196f3;
      } */

      & input:checked ~ span:after {
        display: block;
      }

      & span:after {
        left: 9px;
        top: 2px;
        width: 11px;
        height: 19px;
        border: solid ${NEUTRALS.BLACK};
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }
  }
`

export const CustomCheckboxInputWrapper = styled.label`


`

export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`
