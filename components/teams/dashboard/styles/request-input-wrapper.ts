import { NEUTRALS, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const RequestInputWrapper = styled.div`
  display: grid;
  gap: 24px;

  padding: 32px 64px;

  box-shadow: 0 4px 20px var(--box-shadow-color, #f0eef1);
  border-radius: 10px;

  & > :nth-child(1) {
    list-style: none;

    display: flex;
    gap: 12px;

    & > li {
      padding: 12px;
      cursor: pointer;

      & > svg {
        & > * {
          fill: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};
        }
      }

      :is(:hover, :focus-visible) {
        opacity: 0.8;
      }
    }
  }

  & > :nth-child(2) {
    display: grid;
    gap: 24px;

    ${HeaderCSS()};
    text-wrap: balance;
    font-size: 24px;
    font-weight: 600;

    & > div {
      position: relative;
      & > input {
        width: 100%;
        padding: 12px 16px;

        border: 1px solid ${NEUTRALS.DARK_GREY_3};
        border-radius: 8px;

        &::placeholder {
          color: transparent;
        }

        &:focus + span {
          visibility: hidden;
        }
      }

      & > span {
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
        pointer-events: none;
        color: #999;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  & > :nth-child(3) {
    display: flex;
    gap: 16px;

    & > :nth-child(1) {
      ${reusableButton()}
    }
    & > :nth-child(2) {
      ${reusableButton({ secondary: true })}
    }
  }

  :is(:hover, :focus-within) {
    --box-shadow-color: ${NEUTRALS.BORDER_HOVER};
  }
`
