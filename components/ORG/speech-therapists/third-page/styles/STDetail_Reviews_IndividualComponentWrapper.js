import styled from 'styled-components'
import { PRIMARY } from '../../../../../assets/Colors'
import { device } from '../../../../../assets/screenSizes/ScreenSizes'

export const STDetail_Reviews_IndividualComponentWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${PRIMARY.PRIMARY_BACKGROUND};
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  padding: 12px 16px 16px 16px;
  display: grid;
  gap:8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  & > div > *:not(:last-child) {
    margin-right: 8px;
  }

  & > :first-child {
    display: flex;
    align-items: center;
    height: 24px;
    
  }

  & > :nth-child(2) {
    margin-bottom: 8px;
  }

  & > :last-child {
    display: flex;
    align-items: end;
  }

  @media (${device.laptop}) {
    grid-template-columns: 264px;
  }

`