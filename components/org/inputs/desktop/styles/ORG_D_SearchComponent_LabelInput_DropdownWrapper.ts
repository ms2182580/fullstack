import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

export const ORG_D_SearchComponent_LabelInput_DropdownWrapper = styled.div`
  & > :nth-child(1) {
    box-shadow: 0 4px 4px hsl(0, 0%, 0%, 0.25);
    background-color: ${NEUTRALS.OFF_WHITE};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;

    font-size: 16px;

    & > :nth-child(1) {
      ul,
      li {
        list-style: none;
      }
    }
  }
`

type Props_DIAGNOSIS = {
  isTitle?: boolean
}

export const ORG_D_SearchComponent_LabelInput_Dropdown_DIAGNOSIS = styled.li<Props_DIAGNOSIS>`
  padding-left: 21px;

  text-decoration: underline;

  text-decoration-thickness: 2px;

  ${({ isTitle }) =>
    isTitle &&
    css`
      margin-top: 16px;
    `}

  &::after {
    display: block;
    content: attr(data-content);
    font-weight: 700;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    user-select: none;
    pointer-events: none;
  }

  &:hover,
  &:focus-visible {
    background-color: ${PRIMARY.PRIMARY_CTA};
    color: ${NEUTRALS.OFF_WHITE};
    font-weight: 700;
  }
`

export const ORG_D_SearchComponent_LabelInput_Dropdown_SYMPTOMS = styled.li`
  & > p {
    white-space: break-spaces;

    font-size: 14px;
    padding-inline: 16px;
    color: ${NEUTRALS.DARK_GREY};
    font-style: italic;
  }
`

export const ORG_D_SearchComponent_LabelInput_Dropdown_LI = styled.li`
  & > ul {
    list-style: none;
    padding-bottom: 16px;

    & > :first-child {
      padding-top: 8px;
    }

    & > * {
      word-break: break-all;
    }

    & > li {
      padding: 8px 8px 8px 21px;

      &::after {
        display: block;
        content: attr(data-content);
        font-weight: 700;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        user-select: none;
        pointer-events: none;
      }

      &:hover,
      &:focus-visible {
        background-color: ${PRIMARY.PRIMARY_CTA};
        color: ${NEUTRALS.OFF_WHITE};
        font-weight: 700;
        transform: scale(1);
      }
    }
  }
`

export const LI_2Wrapper = styled.li`
  word-break: break-all;

  padding: 8px 8px 8px 21px;

  &::after {
    display: block;
    content: attr(data-content);
    font-weight: 700;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    user-select: none;
    pointer-events: none;
  }

  &:hover,
  &:focus-visible {
    background-color: ${PRIMARY.PRIMARY_CTA};
    color: ${NEUTRALS.OFF_WHITE};
    font-weight: 700;
    transform: scale(1);
  }
`
