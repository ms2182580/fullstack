import { SECONDARY_ORG_PLUS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const ORG_D_Detail_AT_WCMD_WhereToBuy_SectionWrapper = styled.div`
  /* display: grid;
  grid-auto-flow: column; */
  display: flex;
  /* flex-direction: column; */

  padding-top: 65px;
  padding-bottom: 65px;
  padding-inline: clamp(16px, 10vw - 50px, 65px);
  /* gap: 102px; */
  gap: clamp(16px, 21vw - 197px, 102px);

  & > :nth-child(1) {
    display: grid;
  }

  & > :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 26px;
    /* 
    flex-shrink: 0;
    flex-basis: 200px; */

    flex-wrap: wrap;

    & > :nth-child(1) {
      font-weight: 800;
    }

    & > :nth-child(2) {
      list-style: none;
      display: flex;
      gap: 8px;

      button {
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        border-radius: 8px;
        border: none;

        padding: 5px 10px;

        background-color: ${SECONDARY_ORG_PLUS.ASH_BLUE};
      }
    }

    & > :nth-child(3) {
      text-decoration: none;

      ${reusableButton({ secondary: true })};

      width: 100%;
    }
  }
`
