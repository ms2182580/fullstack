import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const ORG_D_Detail_MainCardWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-items: stretch;

  border: 1px solid ${NEUTRALS.LIGHT_GREY};
  border-radius: 8px;

  grid-template-columns: 450px 1fr;
`
