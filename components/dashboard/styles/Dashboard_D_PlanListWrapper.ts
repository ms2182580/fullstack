import styled from "styled-components"

export const Dashboard_D_PlanListWrapper = styled.div`
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid #d5d5d5;
  margin-top: 19px;
  max-width: 921px;
  height: 251px;
  & > :nth-child(1) {
    background-color: #e6e6e6;
    display: grid;
    grid-template-columns: 0.2fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    padding: 14px 0px;
    border-radius: 9px;

    & > :nth-child(1) {
      outline: 2px solid #7c747f;
      appearance: none;
      width: 24px;
      height: 24px;
      margin-left: 10px;
    }
    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4),
    & > :nth-child(5) {
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 171.429% */
    }
  }
  & > :nth-child(2) {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > :nth-child(1) {
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 34px;
    }
  }
`
