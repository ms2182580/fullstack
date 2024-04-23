import styled from "styled-components"

export const INDEX_ORG_Detail_DWrapper = styled.div`
  position: relative;
  padding-bottom: 8px;

  & > :nth-child(1) {
    padding-top: 56px;
    padding-bottom: 8px;

    position: relative;

    & > * {
      &:not(:nth-child(1)),
      &:nth-child(1) > *:not(ul) {
        margin-inline: clamp(16px, calc(10vw - 80px), 96px);
      }
    }

    /*
    & > * {
      margin-inline: clamp(16px, calc(10vw - 80px), 96px);

      border: 2px solid green;

      &:not(:nth-child(1)) {
        border: 2px solid red;

        &:not(:nth-child(2)) {
          border: 2px solid black;
        }
      }
    }
    */

    & > :nth-child(1) {
      margin-bottom: 16px;
    }

    & > *:not(:nth-child(1)):not(:nth-last-child(1)):not(:nth-last-child(2)) {
      margin-bottom: 24px;
    }

    & > :nth-last-child(2) {
      margin-bottom: 44px;
    }

    & > :last-child {
      position: sticky;
      top: 0;
      left: 0;
    }
  }
`
