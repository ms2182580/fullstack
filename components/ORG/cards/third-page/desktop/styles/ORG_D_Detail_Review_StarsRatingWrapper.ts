import { Classes_ORG_D_Detail_IsModal } from "@/utils/org/third-page/IsModal"
import styled from "styled-components"

export const ORG_D_Detail_Review_StarsRatingWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :nth-child(1) {
    margin-right: 8px;
  }

  & > :nth-child(2) {
    margin-right: 11px;
  }

  & > span {
    color: #939090;
  }

  &.${Classes_ORG_D_Detail_IsModal.IS_MODAL} {
    display: flex;
    gap: 12px;

    & > :nth-child(1) {
      font-size: 40px;
    }

    & > :nth-child(3) {
      font-size: 20px;
    }
  }
`
