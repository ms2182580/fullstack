import { NEUTRALS } from "@/assets/Colors"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const IndexWrapper = styled.div`
  margin-inline: clamp(16px, 26.988vw - 260.624px, 128px);

  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > :nth-child(1) {
      & > h1 {
        ${HeaderCSS()};
        font-size: 28px;
      }
    }
  }

  & > :nth-child(2) {
    list-style: none;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 16px;

    width: 100%;

    & > li {
      flex: 1 1 430px;
    }
    /* border: 2px solid green; */
  }
`

export const CardWrapper = styled.article`
  padding-block: 54px;
  padding-inline: 24px;
  box-shadow: 0px 4px 10px 0px #f0eef1;
  border-radius: 24px;

  & > article {
    & > :nth-child(1) {
      display: flex;
      align-items: center;

      gap: 12px;

      font-size: 28px;

      &:has() & > :nth-child(1) {
        & > * {
          & > * {
            fill: ${NEUTRALS.DARK_GREY_2};
          }
        }
      }

      & > :nth-child(2) {
        text-wrap: nowrap;
      }

      & > :nth-child(3) {
        width: 48px;
        aspect-ratio: 1/1;
      }
    }
  }
`
