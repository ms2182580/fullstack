import styled from "styled-components"

export const INDEX_ORG_Detail_DWrapper = styled.div`
  position: relative;
  padding-bottom: 8px;

  & > :nth-child(1) {
    margin-top: 26px;
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    margin-inline: clamp(2px, calc(41vw - 416px), 170px);
  }

  & > :nth-child(2) {
    margin-top: 91px;
    padding-bottom: 8px;

    position: relative;

    display: grid;
    grid-template-columns: 700px minmax(0, 1fr);

    align-items: flex-start;

    column-gap: clamp(8px, calc(7.711vw - 72px), 40px);

    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      row-gap: 28px;
    }

    & > :nth-child(2) {
      position: sticky;
      inset: 0;

      display: flex;
      flex-direction: column;

      gap: calc(8px * 1);
    }
  }

  & > :nth-child(4) {
    margin-top: 266px;
    margin-inline: clamp(2px, calc(41vw - 416px), 142px);
  }
`
