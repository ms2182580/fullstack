import { ORG_D_Results_CardWrapper } from "@/components/org/flow/second-page/desktop/styles/ORG_D_Results_CardWrapper"
import styled from "styled-components"

export const OrgOnTabsInheritWrapper = styled(ORG_D_Results_CardWrapper)`
  & > :nth-child(1) {
    padding: clamp(8px, 3.855vw - 31.52px, 24px);

    min-width: 100%;
    width: clamp(185px, 25px + 16vw, 250px);
  }

  & > :nth-child(2) {
    padding-block: clamp(8px, 3.855vw - 31.52px, 24px);
    padding-inline: clamp(16px, 6.747vw - 53.152px, 44px);

    width: clamp(275px, 35vw - 84px, 420px);
  }

  & > :nth-child(3) {
    grid-area: bottomButtons;
  }
`
