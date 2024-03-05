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
    color: #3a343c;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }

  & > :nth-child(3) {
    display: grid;
    gap: 16px;

    max-width: 560px;

    & > * {
      input {
        width: 100%;
      }
    }

    label {
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
      justify-content: center;
      gap: 16px;

      & > * {
        flex: 1;
      }
    }
  }

  .react-tagsinput {
    height: 48px;
    padding: 8px 16px;

    border-radius: 8px;
    border: 1px solid #908395;
    background: white;
  }

  .react-tagsinput-tag {
    padding: 4px 8px;
    gap: 4px;
    border-radius: 12px;
    background: #ffe7db;
    border: none;
    color: #3a343c;
  }
`
