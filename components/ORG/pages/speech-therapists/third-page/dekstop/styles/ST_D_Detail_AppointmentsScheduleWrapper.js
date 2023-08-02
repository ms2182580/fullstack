import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ST_D_Detail_AppointmentsScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  & > :nth-child(1) {
    margin-bottom: 16px;
  }
  & > :nth-child(2) {
    margin-bottom: 32px;
  }

  & > :nth-child(3) {
    display: grid;
    gap: 24px;
    margin-bottom: 24px;
    width: 100%;

    & > * {
      background-color: ${NEUTRALS.OFF_WHITE};
      border-radius: 8px;
      padding-top: 16px;
      padding-bottom: 16px;
      height: 64px;
      text-align: center;
    }

    & > *:not(.noDateAvailable) {
      cursor: pointer;
    }

    .isClicked {
      background-color: ${PRIMARY.PRIMARY_HOVER};
      color: ${NEUTRALS.OFF_WHITE};
    }

    .noDateAvailable {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${NEUTRALS.LIGHT_GREY};
      color: #151a26;
    }
  }

  & > :nth-child(4) {
    background-color: ${NEUTRALS.OFF_WHITE};
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }
  }
`
