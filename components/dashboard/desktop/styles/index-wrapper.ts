import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const INDEX_D_DashboardWrapper = styled.div`
  padding-inline: clamp(16px, 33vw - 336px, 142px);

  display: grid;
  gap: 16px;

  h2,
  h3 {
    text-transform: none;
  }

  & > header {
    h3 {
      ${HeaderCSS({ fontSize: "h3" })};

      text-transform: none;

      display: flex;
      align-items: center;
      gap: 12px;
    }

    p {
      ${Paragraph({ color: "dark_maroon" })}
      margin-top: 10px;
    }
  }

  & > article {
    border: 1px solid ${NEUTRALS.BORDER};
    border-radius: 12px;
    padding: 32px 64px;
  }

  & > article:nth-of-type(1) {
    display: grid;
    grid-template-columns: minmax(auto, 579px) 205px;
    justify-content: space-between;

    h2 {
      font-weight: 600;
      font-size: 28px;
      line-height: 42px;
    }

    p {
      ${Paragraph({ color: "dark_maroon" })};
      margin-top: 16px;
    }

    span {
      display: flex;
      gap: 24px;
      margin-top: 24px;

      & > button {
        display: flex;
        gap: 8px;
      }

      & > :nth-child(1) {
        ${reusableButton()};
        & > svg {
          & > * {
            fill: ${NEUTRALS.OFF_WHITE};
          }
        }
      }

      & > :nth-child(2) {
        ${reusableButton({ secondary: true })}

        &:hover,
        &:focus-visible {
          & > svg {
            & > * {
              transition: fill 0.1s ease-in-out;
              fill: ${NEUTRALS.OFF_WHITE};
            }
          }
        }
      }
    }
  }

  & > article:nth-of-type(2) {
    display: grid;
    gap: 24px;

    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    }

    div {
      display: flex;
      justify-content: space-between;
      gap: 16px;

      input {
        width: 100%;
        border-radius: 8px;
        border: 1px solid ${NEUTRALS.DARK_GREY_3};
        padding: 10px 16px;
      }

      button {
        ${reusableButton()}
        width: 130px;
      }
    }
  }

  & > section:nth-of-type(1) {
    & > header {
      display: flex;
      justify-content: space-between;

      h3 {
        ${HeaderCSS({ fontSize: "h3" })}
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        color: ${PRIMARY.PRIMARY_CTA};
        text-decoration: underline;

        & > :nth-child(1) {
          rotate: -90deg;
          & > * {
            stroke: white;
          }
        }
      }
    }

    & > div {
      display: grid;
      place-items: center;

      h4 {
        ${HeaderCSS({ fontSize: "h4" })}
      }

      p {
        ${Paragraph({ color: "black" })}
      }

      img {
        margin-top: 16px;
      }
    }
  }
`
