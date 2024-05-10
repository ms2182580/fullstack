import styled from "styled-components"
import { SECONDARY_ORG_PLUS } from "../../../../assets/Colors"

export const Highlights_DWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  text-transform: capitalize;

  & > * {
    background-color: ${SECONDARY_ORG_PLUS.PINK_2};
    border-radius: 4px;
    padding: 8px 12px;

    p {
      font-size: 12px;
      line-height: 12px;
    }
  }
`
