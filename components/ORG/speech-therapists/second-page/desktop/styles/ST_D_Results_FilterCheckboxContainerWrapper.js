import styled from "styled-components"
import { NEUTRALS, SEMANTICS } from "../../../../../../assets/Colors"

export const ST_D_Results_FilterCheckboxContainerWrapper = styled.div`
  /* border: 2px solid crimson; */
  /* width: 175px; */

  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap; */

  & > :nth-child(1) {
    margin-bottom: 18px;
  }

  & > :nth-child(2) {
    /* border: 2px solid black; */
    /* width: 175px; */
    /* display: flex;
    flex-direction: column;
    flex-wrap: wrap; */
  }

  & > div:nth-child(1),
  & > div:nth-child(2) {
    /* margin-top: 20px; */
    /* display: flex; */
    /* justify-content: space-between; */
    /* padding-bottom: 26px; */
    /* padding-inline: 22px 12px; */
  }

  & > div:nth-child(1) > span {
    cursor: pointer;
  }
`

export const ST_D_Results_FilterCheckboxContainerULWrapper = styled.ul`
  list-style: none;
  /* margin-left: 58px; */

  margin-left: 6px;
  /* border: 2px solid crimson; */

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  & > li {
    &.showRemaining {
      display: block;
    }
    &.notShowYet {
      display: none;
    }

    & > label {
      display: flex;
      align-items: center;
      height: 36px;
      position: relative;
      padding-left: 49px;
      cursor: pointer;
      user-select: none;

      &.viewOnly {
        height: 55px;

        & > span {
          top: 7px;
        }
      }

      & > p {
        /* white-space: nowrap; */
        /* border: 2px solid crimson; */
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
        top: 2px;
        left: 0;
        height: 28px;
        width: 28px;
        border: 4px solid ${NEUTRALS.BLACK};
        border-radius: 4px;
        /* border: 2px solid crimson; */

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
      & input:checked ~ span {
        background-color: ${NEUTRALS.BLACK};
      }

      & input:checked ~ span:after {
        display: block;
      }

      & span:after {
        left: 4px;
        top: -2px;
        width: 11px;
        height: 19px;
        border: solid ${NEUTRALS.OFF_WHITE};
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }
  }

  & > span:last-child {
    cursor: pointer;
    text-decoration-line: underline;
    text-decoration-color: ${SEMANTICS.HYPERLINK_NORMAL};

    &:hover > p {
      color: ${SEMANTICS.FOCUS_RING};
    }
  }
`

export const CustomCheckboxInputWrapper = styled.label``

export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`
