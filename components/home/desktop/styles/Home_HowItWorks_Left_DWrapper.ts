import { PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Home_HowItWorks_Left_DWrapper = styled.div`
  header {
    & > :nth-child(1) {
      display: flex;
      align-items: center;
      gap: 16px;

      margin-bottom: 12px;

      h4 {
        letter-spacing: 2px;
        text-transform: uppercase;

        color: ${PRIMARY.PRIMARY_CTA};
      }
    }

    h5 {
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;

      margin-bottom: 4px;
    }
  }

  p {
    line-height: 27px;
    color: #3a343c;

    margin-bottom: 56px;
  }

  button {
    ${reusableButton({})};
    padding: 10px 16px;
  }
`
