import styled from "styled-components"

export const FinishLayout = styled.div`
  margin-top: 120px;
  margin-left: 120px;

  & > :nth-child(2) {
    color: #1d1a1e;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  & > :nth-child(3) {
    margin-top: 8px;
    margin-bottom: 32px;
    color: #3a343c;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    & > strong {
      color: #3a343c;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px;
    }
  }
  & > :nth-child(4) {
    display: flex;
    gap: 5px;
    color: #3a343c;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    & > strong {
      color: #3a343c;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px;
    }
  }
`
