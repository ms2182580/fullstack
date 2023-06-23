import styled from "styled-components"
import { SEMANTICS } from "../../../../../assets/Colors"

export const Breadcrumbs_DWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :nth-child(2) > p,
  & > a > * {
    margin-right: 12px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 22px;
  }

  & > a > p.underline {
    text-decoration-line: underline;
    color: ${SEMANTICS.HYPERLINK_NORMAL};
  }
`
