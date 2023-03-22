import styled from 'styled-components'
import { device } from '../../../../../assets/screenSizes/ScreenSizes'

export const STDetail_Reviews_IndividualWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 32px;

  @media (${device.laptop}) {
    margin-top: 24px;
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: 16px;
  }
`