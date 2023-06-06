import styled from "styled-components"
import { PRIMARY } from "../../../../../assets/Colors"
import { device } from "../../../../../assets/screenSizes/ScreenSizes"

export const STDetail_Reviews_IndividualComponentWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${PRIMARY.PRIMARY_BACKGROUND};
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  padding: 12px 16px 16px 16px;
  display: grid;
  gap: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  & > :first-child > div > *:not(:last-child) {
    margin-right: 8px;
  }

  & > :first-child > :first-child {
    display: flex;
    align-items: center;
    height: 24px;
  }

  .STDetail_Reviews_IndividualComponent_noModal {
    & > :nth-child(2) {
      margin-bottom: 8px;
    }

    & > :last-child {
      display: flex;
      align-items: end;
    }
  }

  .STDetail_Reviews_IndividualComponent_Modal {
    gap:10px;
    display: flex;
    
    flex-direction: column;
    
    & > :nth-child(2) {
      display: flex;
      align-items: end;
    }

    & > :last-child {
      margin-bottom: 8px;
    }
  }

  @media (${device.laptop}) {
    grid-template-columns: 264px;
  }
`
