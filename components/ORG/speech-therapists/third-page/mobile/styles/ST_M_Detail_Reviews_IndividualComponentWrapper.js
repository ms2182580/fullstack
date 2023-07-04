import styled from "styled-components"
import { SECONDARY_BG_BIGBLOCKS_TEXT, SECONDARY_ORG_PLUS } from "../../../../../../assets/Colors"

export const ST_M_Detail_Reviews_IndividualComponentWrapper = styled.div`
  border: 1px solid ${SECONDARY_ORG_PLUS.ASH_BLUE};
  border-radius: 8px;
  background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE};
  padding: 16px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  min-width: 232px;
  
  & > :last-child {
    display: flex;
    gap:8px;
    flex-wrap: wrap;
    margin-top: auto;
  }

`

