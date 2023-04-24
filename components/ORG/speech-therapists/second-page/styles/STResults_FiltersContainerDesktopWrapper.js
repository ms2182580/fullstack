import styled from "styled-components"
import { device } from "../../../../../assets/screenSizes/ScreenSizes"

export const STResults_FiltersContainerDesktopWrapper = styled.div`
  position: relative;

  & > *:not(:first-child) {
    margin-inline: ${(x) => (x.isMobile ? "44px 44px" : "")};
  }

  & > :nth-child(1) {
    position: absolute;
    top: 16px;
    right: 16px;

    & > :nth-child(1) {
      cursor: pointer;
    }
  }

  & > :nth-child(2) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "agesServed agesServed distance distance"
      "diagnosis viewOnly insurance meetingFormat"
      "setting sessionType languages providerType";

    gap: 33px;
    padding: 48px;
  }

  & > :nth-child(2) > :nth-child(1) {
    grid-area: agesServed;
    margin-bottom: calc(80px - 33px);
  }

  & > :nth-child(2) > :nth-child(2) {
    grid-area: distance;
  }

  & > :nth-child(2) > :nth-child(3) {
    grid-area: diagnosis;
    margin-bottom: calc(80px - 33px);
  }

  & > :nth-child(2) > :nth-child(4) {
    grid-area: viewOnly;
  }

  & > :nth-child(2) > :nth-child(5) {
    grid-area: insurance;
  }

  & > :nth-child(2) > :nth-child(6) {
    grid-area: meetingFormat;
  }

  & > :nth-child(2) > :nth-child(7) {
    grid-area: setting;
  }

  & > :nth-child(2) > :nth-child(8) {
    grid-area: sessionType;
  }

  & > :nth-child(2) > :nth-child(9) {
    grid-area: languages;
  }

  & > :nth-child(2) > :nth-child(10) {
    grid-area: providerType;
  }

  & > :nth-child(3) {
    margin-bottom: 48px;
    display: flex;
    gap: 40px;
    justify-content: flex-end;
    margin-right: 48px;

    & > span > button {
      padding-inline: 48px;
    }
  }

  @media (${device.laptop}) {
    & > :nth-last-child(3) {
      margin-bottom: 40px;
    }

    & > :nth-last-child(2) > button,
    & > :nth-last-child(1) > button {
      margin-inline: 16px;
      width: calc(100vw - 32px);
    }

    & > :nth-last-child(2) > button {
      margin-bottom: 16px;
    }
  }
`
