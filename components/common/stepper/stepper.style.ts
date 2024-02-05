import styled from "styled-components"

export const Stepper_Wrapper = styled.div`
  position: relative;
  max-width: 350px;
  min-height: 672px;
  padding-top: 16px;
  background-color: #ffffff;
  border: 1px solid #d3ced5;
  border-radius: 5px;
  .back_icon {
    margin-left: 16px;
  }
  .stepper_footer {
    padding: 0px 16px;
  }
`
export const Tabs_Wrapper = styled.div`
  display: flex;
`
export const StepTab = styled.div<{ isActive: boolean; isClickable: boolean }>`
  flex: 1;
  padding: 10px;
  text-align: center;
  position: relative;
  cursor: ${({ isActive, isClickable }) =>
    isActive && isClickable ? "pointer" : "default"};
  background-color: ${({ isActive }) => (isActive ? "#6E3A82" : "#F2EAF6")};
  border-right: 1px solid #f2eaf6;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1px;
    width: 100%;
    height: 100%;
    background-color: ${({ isActive }) => (isActive ? "#6E3A82" : "#F2EAF6")};
    z-index: -1;
  }
`
export const Footer_Wrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
  align-items: center;
  margin-top: 20px;
  > :first-child {
    color: #6e3a82;
    text-decoration: underline;
  }
`
export const ProgressBar = styled.div<{
  activeStep: number
  stepsLength: number
}>`
  height: 9px;
  width: ${(props) => ((props.activeStep + 1) / props.stepsLength) * 100}%;
  background-color: #6e3a82;
  transition: width 0.3s ease-in-out;
`

export const ProgressBarWrapper = styled.div`
  margin-top: 16px;
  height: 9px;
  background-color: #e0e0e0;
`
export const Steps_Count = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #746779;
  margin-top: 10px;
`
