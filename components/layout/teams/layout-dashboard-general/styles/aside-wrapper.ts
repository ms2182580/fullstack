import { NEUTRALS, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const AsideWrapper = styled.div`
  padding-inline: 12px;
  padding-top: calc(8px * 4);

  border-right: 1px solid ${NEUTRALS.BORDER};

  display: flex;
  flex-direction: column;

  min-width: 264px;

  & > :nth-child(1) {
    margin-inline: auto;
  }

  & > button {
    ${reusableButton({ secondary: true })};
    margin-top: calc(8px * 6);

    margin-inline: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    width: 205px;
    padding-inline: 24px;

    & > svg {
      & > path {
        fill: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};
        transition: all 0.1s ease-in-out;
      }
    }

    & > span {
      font-size: 20px;
      font-weight: 600;
    }

    &:is(:hover, :focus-visible) {
      & > * {
        & > * {
          fill: ${NEUTRALS.OFF_WHITE};
        }
      }
    }
  }

  & > ul {
    margin-top: calc(8px * 3);

    & > li {
      border-radius: 6px;

      & > a {
        display: flex;
        gap: 12px;

        padding: 16px 24px;
        border-radius: inherit;

        font-weight: 500;
      }
    }
  }

  & > :last-child {
    margin-top: auto;
  }
`
