import styled from "styled-components"
import { NEUTRALS, PRIMARY, SEMANTICS } from "../../../../../../assets/Colors"

export const ORG_D_Detail_HelpfulWebResourcesWrapper = styled.section`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &:has(details[open]) {
    border-radius: 8px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  }

  &:has(details:not([open])) {
    box-shadow: none;
  }

  details {
    & > :nth-child(1) {
      list-style: none;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      padding: 24px;
      background-color: ${PRIMARY.PRIMARY_BACKGROUND};

      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 46px;

      & > :nth-child(2) {
        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${NEUTRALS.OFF_WHITE};

        outline: 2px solid ${PRIMARY.PRIMARY_CTA};
        border-radius: 8px;
      }

      &:hover,
      &:focus-visible {
        background-color: hsl(282.9, 41.2%, 94.3%);
      }
    }

    &[open] {
      border-radius: 8px;

      summary {
        background-color: hsl(282.9, 41.2%, 91.3%);

        & > :nth-child(2) {
          transform: rotate(180deg);
        }
      }
    }

    & > :nth-child(2) {
      margin-inline: 46px;
      padding-bottom: 84px;

      position: relative;
      padding: 16px;

      & > :nth-child(1) {
        display: flex;

        position: relative;
        margin-bottom: 59px;
        margin-top: 80px;
        gap: 25%;

        //Icon SearchBar
        & > :nth-child(1) {
          position: absolute;
          left: 16px;
          top: 0;
          bottom: 0;
          margin: auto;
        }

        & > :nth-child(2) {
          width: 100%;
          padding: 10px 10px 10px 60px;

          background: ${NEUTRALS.OFF_WHITE};
          border: 1px solid ${NEUTRALS.BLACK};
          border-radius: 16px;
          border: 0.5px solid var(--Black, #00080b);

          &[type="text"]:focus {
            border: 1px solid transparent;
          }
        }
      }
    }
  }

  .Button {
    display: flex;
    width: 191px;
    height: 48px;
    padding: 8px 40px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 2px solid var(--Dark-Gray, #6c6c6c);
    background: var(--Light-Gray, #d3d6d7);

    color: #6c6c6c;

    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.24px;
  }

  .ViewAllLink {
    display: flex;
    margin-left: auto;
    align-items: flex-start;
    padding-bottom: 30px;
    cursor: pointer;

    & > * {
      text-decoration: underline;
      color: ${SEMANTICS.HYPERLINK_NORMAL};
      font-weight: 600;
    }
  }

  .Link {
    overflow: hidden;
    color: var(--Hyperlink---Normal, #36c);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.16px;
    text-decoration-line: underline;
    display: block;
  }

  .WebDescription {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--Black, #00080b);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.16px;
  }

  .CardsTitle {
    padding-bottom: 32px;
  }

  & > :nth-child(3) {
    margin-bottom: 100px;
  }
  & > :nth-last-child(1) {
  }

  .HelpfulWebElementsWrapper {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 3.5rem;
    padding-right: 30.28px;
    padding-top: 55px;
    padding-bottom: 43px;
    gap: 40px;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    justify-content: center;
  }

  .ImageColumn {
    height: 100%;
    position: relative;
    max-width: 420px;
  }

  .DescriptionColumn {
    width: 130%;
  }

  .ButtonColumn {
    margin-left: auto;
  }

  .BottomBorderRow {
    border-bottom: 1px solid hsl(0, 0%, 88.6%);
  }
`
