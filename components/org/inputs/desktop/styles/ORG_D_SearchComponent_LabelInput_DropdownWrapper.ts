import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_SearchComponent_LabelInput_DropdownWrapper = styled.div`
  & > :nth-child(1) {
    box-shadow: 0 4px 4px hsl(0, 0%, 0%, 0.25);
    background-color: ${NEUTRALS.OFF_WHITE};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;

    font-size: 16px;

    .SUGGESTION {
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

        .BOLD {
          font-weight: 700;
        }

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

        &:hover {
          background-color: ${PRIMARY.PRIMARY_CTA};
          color: ${NEUTRALS.OFF_WHITE};
          font-weight: 700;
          transform: scale(1);
        }
      }
    }

    .DIAGNOSIS {
      .DIAGNOSIS_SPAN {
        padding-bottom: 4px;
        text-decoration: underline;
        text-decoration-thickness: 2px;

        padding: 4px 8px 0px 21px;

        list-style: none;

        .BOLD {
          font-weight: 700;
        }

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

        &:hover {
          background-color: ${PRIMARY.PRIMARY_CTA};
          color: ${NEUTRALS.OFF_WHITE};
          font-weight: 700;
        }
      }

      .IN_SYMPTOMS {
        white-space: break-spaces;

        font-size: 14px;
        padding-inline: 16px;
        color: ${NEUTRALS.DARK_GREY};
        font-style: italic;
      }
    }
  }
`
