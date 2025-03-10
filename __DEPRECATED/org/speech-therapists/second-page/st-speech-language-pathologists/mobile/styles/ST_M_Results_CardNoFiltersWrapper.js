import styled from "styled-components"
import { NEUTRALS } from "../../../../../../../../assets/Colors"

export const ST_M_Results_CardNoFiltersWrapper = styled.div`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  width: clamp(288px, 50%, 1000px);
  margin: auto;
  border-radius: 8px;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;

  position: relative;

  & > :nth-child(2) {
    background-color: ${NEUTRALS.OFF_WHITE};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 16px;
  }
`
