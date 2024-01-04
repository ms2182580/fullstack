import styled from "styled-components"
import { NEUTRALS, SEMANTICS } from "../../../../../assets/Colors"

export const ORG_Filters_D_CheckboxWrapper2 = styled.div`
  position: relative;

  & > :nth-child(1) {
    & > :nth-child(1) {
      padding-top: 8px;

      padding-bottom: 8px;
      padding-inline: 16px;

      text-transform: capitalize;
      font-weight: 600;
    }
  }

  & > :nth-child(2) {
    position: absolute;
    top: 150%;
    left: 0;

    z-index: 5;
    background-color: white;

    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    visibility: ${({ mustShowFilter }) => (mustShowFilter ? `visible` : `hidden`)};
    padding: 48px;

    display: flex;
    align-items: start;
    justify-content: center;

    flex-direction: column;
    gap: 16px;

    width: 449px;

    & > :nth-child(1) {
      position: absolute;
      right: 16px;
      top: 16px;

      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > :nth-child(2) {
      cursor: pointer;
      user-select: ${({ allowSelection }) => (allowSelection ? `auto` : `none`)};

      text-transform: capitalize;
    }

    & > :nth-child(3) {
      list-style: none;
      margin-left: 6px;

      padding-bottom: 48px;

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
    }

    & > :last-child {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 40px;
      & > * {
        width: 100%;
        & > * {
          width: 100%;
        }
      }
    }
  }

  &.DAY_CAMPS_PRICE_RANGE {
    & > :nth-child(2) {
      @media screen and (min-width: 1078px) and (max-width: 1140px) {
        left: -60%;
      }
    }
  }

  &.AA_AT_SETTING_CHECKBOX {
    & > :nth-child(2) {
      @media (max-width: 1100px) {
        left: -70px;
      }
    }
  }
`
