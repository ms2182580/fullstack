import { SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_MainCardLeftPhotosWrapper = styled.div`
  cursor: default;

  & > * {
    color: ${SEMANTICS.HYPERLINK_NORMAL};

    margin-inline: auto;
    font-size: 14px;
    color: ${SEMANTICS.HYPERLINK_NORMAL};
    text-decoration: underline;
    margin-bottom: 24px;
  }

  &:hover,
  &:focus-visible {
    filter: brightness(120%);
  }
`
