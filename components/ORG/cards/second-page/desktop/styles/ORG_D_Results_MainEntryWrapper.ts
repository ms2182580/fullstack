import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

type Props = {
  ORGshowFullMapButton?: boolean
  isFullMap?: boolean
}

export const ORG_D_Results_MainEntryWrapper = styled.div<Props>`
  position: relative;
  background-color: ${NEUTRALS.OFF_WHITE};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header "
    "filterAndMap "
    "btns"
    "breadcrumbsAndUpdate ";

  padding-bottom: 40px;

  & > :nth-child(1) {
    grid-area: header;
    align-self: start;
  }

  & > :nth-child(2) {
    grid-area: filterAndMap;
    display: grid;

    grid-template-columns: ${({ isFullMap }) => (isFullMap ? "1fr" : "2fr 1fr")};
    margin-bottom: ${({ isFullMap }) => (isFullMap ? `318px` : `189px`)};

    & > :nth-child(1) {
      display: ${({ isFullMap }) => (isFullMap ? `none` : ``)};
    }

    margin-left: ${({ isFullMap }) => (isFullMap ? `` : `clamp(16px, calc(10vw - 80px), 96px)`)};
    margin-inline: ${({ isFullMap }) => (isFullMap ? `clamp(16px, calc(10vw - 80px), 96px)` : ``)};
  }

  & > :nth-child(3) {
    grid-area: btns;
    display: ${({ isFullMap }) => (isFullMap ? `none` : ``)};
  }

  & > :nth-child(4) {
    grid-area: breadcrumbsAndUpdate;
  }

  & > :nth-child(3),
  & > :nth-child(4) {
    padding-inline: clamp(16px, calc(10vw - 80px), 96px);
  }
`
