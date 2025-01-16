import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const IndexWrapper = styled.div`
  margin-inline: clamp(16px, 26.988vw - 260.624px, 128px);

  display: grid;
  gap: 24px;

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

    & > li {
      flex: 1 1 430px;
    }

    @media screen and (max-width: 1344px) {
      & > * {
        & > :nth-child(1) {
          padding-block: calc(8px * 4);
          & > :nth-child(1) {
            & > :nth-child(3) {
              margin-left: auto;
            }
          }
        }
      }
    }
  }
`
