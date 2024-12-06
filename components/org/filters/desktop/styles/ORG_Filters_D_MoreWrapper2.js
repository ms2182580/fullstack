import styled from "styled-components"

export const ORG_Filters_D_MoreWrapper2 = styled.div`
  & > :nth-child(1) {
    & > :nth-child(1) {
      padding-top: 8px;
      padding-bottom: 8px;
      padding-inline: 16px;

      text-transform: capitalize;
    }
  }

  & > :nth-child(2) {
    position: absolute;
    top: calc(88px + 32px + 24px);
    left: clamp(16px, calc(10vw - 80px), 96px);
    right: clamp(16px, calc(10vw - 80px), 96px);

    z-index: calc(99 + 1);
    background-color: white;

    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    padding: 48px;

    visibility: ${({ mustShowFilter }) =>
      mustShowFilter ? `visible` : `hidden`};

    @media (max-width: 1277px) {
      top: calc(88px + 48px + 32px + 24px);
    }

    & > :nth-child(1) {
      cursor: default;
      position: absolute;
      top: 16px;
      right: 13px;

      &:hover,
      &:focus-visible {
        filter: drop-shadow(1px 1px 1px hsla(0, 0%, 0%, 0.25));
      }
    }

    /* All Filters here */
    & > :nth-child(2) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 30px;
      column-gap: 128px;
      padding-bottom: 30px;
    }

    & > *:not(:first-child) {
      & > * {
        text-transform: capitalize;
      }
    }

    .checkboxesMoreFilters {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
      column-gap: 48px;
      row-gap: 30px;
    }

    & > :last-child {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 40px;
      width: fit-content;
      margin-left: auto;

      & > * {
        & > * {
          padding: 8px 48px;
        }
      }
    }
  }
`
