import styled from "styled-components"

export const ST_M_Detail_ContactWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  scroll-margin-top: ${({ scrollMarginTopState }) => scrollMarginTopState && `${scrollMarginTopState}`};

  & > :nth-child(1) {
    margin-bottom: 12px;
  }

  & > :nth-child(2) {
    margin-bottom: 24px;
  }

  & > :nth-child(3) {
    margin-bottom: 20px;
  }

  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;

    & > :nth-child(2) {
      overflow: hidden;

      & > * {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  & > *:not(:first-child):not(:last-child) {
    margin-left: 16px;
  }
`
