import styled from "styled-components"

type Props = {
  isCreatePlan: boolean
}
export const INDEX_D_DashboardHeaderWrapper = styled.div<Props>`
  display: flex;
  width: 100%;
  height: 66px;
  padding: 0px 24px;
  justify-content: ${(props) =>
    props.isCreatePlan ? "flex-start;" : "flex-end;"};
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 1px 10px 0px rgba(123, 123, 123, 0.25);
  & > :nth-child(2) {
    display: flex;
    gap: 16px;
    align-items: center;
    & > :nth-child(1) {
      display: flex;
      width: 40px;
      height: 40px;
      padding: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 26px;
      background: #e6e6e6;
    }
  }
  .plan {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > :nth-child(1) {
      display: flex;
      align-items: center;
      gap: 16px;
      & > :nth-child(1) {
        cursor: pointer;
      }
      & > :nth-child(2) {
        border: none;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 34px; /* 170% */
      }
    }

    & > :nth-child(2) {
      display: flex;
      align-items: center;
      gap: 26px;
      & > :nth-child(1) {
        display: flex;
        gap: 10px;
      }
    }
  }
`
