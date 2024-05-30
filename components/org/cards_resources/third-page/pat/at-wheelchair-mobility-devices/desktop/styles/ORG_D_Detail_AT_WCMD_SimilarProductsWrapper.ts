import { PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_AT_WCMD_SimilarProductsWrapper = styled.aside`
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

  & > :nth-child(1) {
    padding: 8px 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    border-radius: 8px 8px 0 0;
  }

  & > :nth-child(2) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    grid-template-areas:
      "card card card"
      "specifications specifications specifications";

    padding: 32px 0;
    font-size: 18px;

    & > :nth-child(1) {
      grid-area: card;

      display: flex;
      gap: 52px;
      justify-content: center;

      padding-inline: 45px;

      margin-bottom: 30px;
    }

    .KEYS {
      grid-area: specifications;
      display: flex;
      flex-direction: column;

      & > :nth-child(odd) {
        background-color: #f6f7f7;
      }

      & > li {
        padding-top: 16px;
        padding-bottom: 16px;
        padding-inline: 8px;

        display: grid;
        grid-template-columns: 180px 1fr 1fr 1fr;
        grid-template-areas: "keys specification specification specification";
        align-items: center;

        & > :nth-child(1) {
          grid-area: keys;
          font-weight: 700;
          color: ${PRIMARY.PRIMARY_HOVER};

          width: 180px;
        }

        & > :nth-child(2) {
          grid-area: specification;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 8px;
        }
      }
    }
  }

  & > :nth-child(3) {
    display: grid;
    justify-content: flex-end;
    margin-right: 29px;
    padding-bottom: 72px;

    & > p {
      color: ${SEMANTICS.HYPERLINK_NORMAL};
      text-decoration: underline;
      font-weight: 600;
      text-transform: capitalize;
      cursor: pointer;
    }
  }
`
