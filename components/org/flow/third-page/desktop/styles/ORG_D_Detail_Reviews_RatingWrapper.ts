import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_Reviews_RatingWrapper = styled.div`
  & > ul {
    list-style: none;
    display: flex;

    & > *:not(:last-child) {
      border-right: 1px solid ${NEUTRALS.DARK_GREY};
    }

    & > li {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 8px;

      flex: 1;

      & > :nth-child(1) {
        text-transform: lowercase;

        &::first-letter {
          text-transform: capitalize;
        }
      }
    }
  }
`
