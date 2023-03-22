import styled from 'styled-components'
import { SECONDARY_BG_BIGBLOCKS_TEXT, SECONDARY_ORG_PLUS } from '../../../../../assets/Colors'
import { device } from '../../../../../assets/screenSizes/ScreenSizes'

export const STDetail_Reviews_IndividualComponentWrapper = styled.div`
  
  border-radius: 16px;
  border: 1px solid ${SECONDARY_ORG_PLUS.ASH_BLUE};
  background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE};
  padding: 16px;
  display: grid;

  & > div > *:not(:last-child) {
    margin-right: 8px;
  }

  & > :first-child {
    display: flex;
    align-items: center;
    height: 24px;
    margin-bottom: 8px;
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