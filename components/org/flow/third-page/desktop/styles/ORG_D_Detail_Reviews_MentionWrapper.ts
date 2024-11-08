import styled from "styled-components"

export const ORG_D_Detail_Reviews_MentionWrapper = styled.div`
  padding-bottom: 24px;
  position: relative;

  & > h3 {
    font-size: 16px;
  }

  & > ul {
    margin-top: 33px;
    list-style: none;

    display: grid;
    gap: 16px;

    & > * {
      display: flex;
      gap: 8px;

      & > * {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 4px;

        padding: 8px;
        border-radius: 4px;

        font-size: 14px;
        font-weight: 600;
      }

      & > :nth-child(1) {
        background-color: #deffdb;
      }

      & > :nth-child(2) {
        background-color: #ffea8080;
      }
      & > *:not(:nth-child(1)):not(:nth-child(2)) {
        background-color: #f3f1f3;
      }
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;
    background-color: #908395;
  }
`
