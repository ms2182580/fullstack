import { NEUTRALS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const ContactUsFormWrapper = styled.div`
  padding: 40px;

  width: 615px;

  & > h1 {
    ${HeaderCSS()};
  }

  & > form {
    margin-top: 8px;

    display: grid;
    gap: 16px;

    & > label {
      display: grid;
      gap: 4px;

      color: ${NEUTRALS.DARK_GREY_2};

      input {
        padding: 12px 16px;

        border-radius: 8px;
        border: 1px solid ${NEUTRALS.DARK_GREY_3};

        font-size: 16px;

        ::placeholder {
          /* font-style: italic; */
        }
      }

      textarea {
        height: 105px;
        resize: none;

        padding: 12px 16px;
        border-radius: 8px;
        border: 1px solid ${NEUTRALS.DARK_GREY_3};

        font-size: 16px;
      }
    }

    & > label[data-label="record-name"] {
      & > input {
        padding: 12px 16px;
      }

      & > div {
        & > :nth-child(2) {
          margin-left: 9px;
        }
      }
    }

    & > :last-child {
      margin-top: 40px;
      ${reusableButton()};
    }
  }
`
