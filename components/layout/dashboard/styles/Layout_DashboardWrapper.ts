import styled from "styled-components"
import { defaultWidthWebsite } from "../../index/styles/DefaultWidthWebsite"

type Props = {
  isCreatePlan: boolean
}
export const Layout_DashboardWrapper = styled.main<Props>`
  ${defaultWidthWebsite()};
  display: flex;

  & > :nth-child(1) {
    display: flex;
    width: ${(props) => (props.isCreatePlan ? "64px" : "240px")};
    height: 100vh;
    padding: 16px 0px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
  }

  & > :nth-child(2) {
    width: 1376px;
  }
`
