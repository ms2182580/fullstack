import styled from "styled-components"
type Props = {
  isCreatePlan: boolean
}
export const INDEX_D_DashboardWrapper = styled.div<Props>`
  padding-top: ${(props) => (props.isCreatePlan ? "0px" : "42px")};
  padding-left: ${(props) => (props.isCreatePlan ? "0px" : "136px")};
  width: 100%;
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px;
  }

  & > :nth-child(2) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
`
