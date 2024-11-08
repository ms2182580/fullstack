import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_ShareModalButtonWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 8px;

  &:hover {
    & > :nth-child(2) {
      color: ${PRIMARY.PRIMARY_HOVER};
    }
  }
`
