import { SEMANTICS } from "@/assets/Colors"
import styled, { css } from "styled-components"

type Props = {
  isVES_Like?: boolean
  howFarExist?: boolean
}

export const ORG_D_Results_CardLocationWrapper = styled.div<Props>`
  & > :nth-child(2) {
    & > :not(:last-child) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 8px;
    }

    & > :last-child {
      ${({ howFarExist }) =>
        howFarExist &&
        css`
          font-weight: 500;
          color: ${SEMANTICS.HYPERLINK_NORMAL};
          text-decoration: underline;
        `}
    }
  }
`
