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
        /* margin-inline: clamp(16px, calc(18vw - 100px), 170px); */
        /* margin-inline: clamp(8px, calc(38vw - 368px), 170px); */
        margin-inline: clamp(2px, calc(41vw - 416px), 170px);
        /* margin-inline: 162px; */
      }
    }

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
