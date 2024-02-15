import styled from "styled-components"

export const DemographyWrapper = styled.div`
  padding: 80px 80px;

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
    & > :nth-child(3) {
      margin-top: 16px;
      position: relative;
      display: flex;
      flex-direction: column;
      & > :nth-child(2) {
        position: absolute;
        top: 0px;
        left: 510px;
        z-index: 1;
      }
    }

    & > :nth-child(1),
    & > :nth-child(4),
    & > :nth-child(6) {
      margin-top: 16px;
      display: flex;
    }

    & > :nth-child(8) {
      margin-top: 16px;
      display: flex;
      align-items: center;
      gap: 16px;
      & > :nth-child(1),
      & > :nth-child(2) {
        & > :nth-child(2) {
          display: flex;
          width: 260px;
        }
      }
    }
  }

  .react-tagsinput {
    position: relative;
    display: flex;
    height: 48px;
    padding: 12px 16px;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #908395;
    background: white;
    width: 535px;
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
