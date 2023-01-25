import styled from "styled-components"
import { SECONDARY_BG_BIGBLOCKS_TEXT } from "../../../../assets/Colors"

export const FriendlyDiagnosesWrapper = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  gap: 8px;
  /* margin-right: 24px; */
  margin-right: ${x => x.isMobile ? "0px" : "24px"};

  & > * {
    background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.PINK};
    border-radius: 8px;
    padding: 5px 10px;
  }
`
