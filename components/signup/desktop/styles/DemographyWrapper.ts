import styled from "styled-components"

export const DemographyWrapper = styled.div`
  padding: 0px 80px;

  & > :nth-child(1) {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  & > :nth-child(2) {
    margin-bottom: 24px;
  }

  & > :nth-child(3) {
    display: grid;
    gap: 16px;

    max-width: 550px;

    & > * {
      input {
        height: 48px;
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid #908395;
        background: white;
      }
    }

    & > *:not(:last-child) {
      display: flex;
      flex-direction: column;
    }

    label:nth-of-type(2) {
      position: relative;

      & > :nth-child(2) {
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    & > :last-child {
      display: flex;
      gap: 16px;
    }
  }
`
