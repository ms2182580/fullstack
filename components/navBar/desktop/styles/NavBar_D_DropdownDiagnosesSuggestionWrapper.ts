import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"
import { CLASSNAME_ISDIAGNOSIS } from "@/components/org/welcome/desktop/Welcome_D_1_DropdownOptions_TYPE"

export const NavBar_D_DropdownDiagnosesSuggestionComponentWrapper = styled.div`
  & > :nth-child(1) {
    box-shadow: 0 4px 4px hsl(0, 0%, 0%, 0.25);
    background-color: ${NEUTRALS.OFF_WHITE};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;

    font-size: 16px;

    .${CLASSNAME_ISDIAGNOSIS.SUGGESTION} {
      list-style: none;
      padding-bottom: 16px;

      & > :first-child {
        padding-top: 8px;
      }

      & > * {
        word-break: break-all;
      }

      & > li {
        cursor: pointer;
        padding: 8px 8px 8px 21px;

        white-space: break-spaces;

        .${CLASSNAME_ISDIAGNOSIS.BOLD} {
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
    }

    .${CLASSNAME_ISDIAGNOSIS.DIAGNOSIS} {
      .${CLASSNAME_ISDIAGNOSIS.DIAGNOSIS_SPAN} {
        padding-bottom: 4px;
        text-decoration: underline;
        text-decoration-thickness: 2px;

        padding: 4px 8px 0px 21px;

        display: flex;

        cursor: pointer;

        .${CLASSNAME_ISDIAGNOSIS.BOLD} {
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

      .${CLASSNAME_ISDIAGNOSIS.IN_SYMPTOMS} {
        white-space: break-spaces;

        font-size: 14px;
        padding-inline: 16px;
        color: ${NEUTRALS.DARK_GREY};
        font-style: italic;
      }
    }
  }
`

export const KeywordCitiesWrapper = styled.div`
  margin-top: -1.5rem;

  & > div > span {
    margin-left: 2.1rem;
    font-weight: 700;
  }

  & > svg {
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 1rem;
    left: 0.5rem;
  }
`
