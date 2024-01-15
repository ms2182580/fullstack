import { blurEffect } from "@/components/ui/blur/blur"
import styled from "styled-components"

type Props = {
  howIsMap?: null | {}
  isBackend?: boolean
}

export const enum ORG_D_Detail_MapComponent_CLASSES {
  FIRST_MAP = "FIRST_MAP",
  SECOND_MAP = "SECOND_MAP",

  AS_TWO_MAPS = "AS_TWO_MAPS",
}

export const ORG_D_Detail_MapComponentWrapper = styled.div<Props>`
  margin-top: 32px;

  display: ${({ howIsMap }) => (howIsMap === null ? "none" : "grid")};

  cursor: default;

  position: relative;
  padding: 24px;

  ${blurEffect({})}

  & > :nth-child(1) {
    border-radius: 8px;
  }

  .${ORG_D_Detail_MapComponent_CLASSES.FIRST_MAP} {
    & > :nth-child(1) {
      border-radius: 8px;
    }

    &:hover {
      filter: brightness(90%);
    }
  }

  .${ORG_D_Detail_MapComponent_CLASSES.SECOND_MAP} {
    & > :nth-child(1) {
      border-radius: 8px;
    }

    &:hover {
      filter: brightness(90%);
    }
  }

  &.${ORG_D_Detail_MapComponent_CLASSES.AS_TWO_MAPS} {
    & > :nth-child(1) {
      margin-bottom: 25px;
    }

    & > :nth-child(2) {
      margin-bottom: 10px;
      margin-left: 22px;
    }
  }
`
