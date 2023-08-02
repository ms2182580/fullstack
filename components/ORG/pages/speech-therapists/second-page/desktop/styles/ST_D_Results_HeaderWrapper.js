import styled from 'styled-components'
import { NEUTRALS, PRIMARY } from '../../../../../../assets/Colors'
import { device } from '../../../../../../assets/screenSizes/ScreenSizes'

export const ST_D_Results_HeaderWrapper = styled.div`
  
  margin-right: 40px;
  margin-right: ${({ isDetail }) => isDetail ? `0` : `40px`};
  
  padding-top: 34px;
  margin-bottom: ${({ isDetail }) => isDetail ? `8px` : ``};
  

  & > span:nth-child(1) > :nth-child(1) {
    display: flex;
    align-items: center;
    & > :nth-child(1) {
      margin-right: 10px;
    }

    margin-bottom: 45px;
  }

  & > p:nth-child(1) {
    margin-bottom: 14px;
  }

  & > div:nth-child(2) {
    margin-bottom: 2.25rem;
  }

  & > ul {
    display: flex;
    gap: 88px;
    margin-top: 64px;
    margin-bottom: 24px;

    & > li {
      list-style: none;
      & > h3 > a {
        text-decoration: none;
        color: ${NEUTRALS.BLACK};
        cursor: pointer;
        border-bottom: 4px solid transparent;
        &:hover {
          border-bottom: 4px solid ${PRIMARY.PRIMARY_HOVER};
        }
      }
    }
  }

  @media (${device.laptop}) {
    margin: 0;

    & > div:nth-child(1) {
      margin-top: 28px;
      margin-left: 14px;
      margin-bottom: 12px;
    }
  }

  
`