import styled from 'styled-components'
import { NEUTRALS, PRIMARY } from '../../../../../../../../assets/Colors'

export const LT_D_Results_MapWrapper = styled.div`
  height:100vh;
  position: sticky;
  top: 0;
  
  & > :nth-child(2) {
    position: absolute;
    top: 44px;
    left: 45px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding:16px 24px 16px 36px;

    gap: 19px;

    background: ${NEUTRALS.OFF_WHITE};
    border: 1px solid ${PRIMARY.PRIMARY_CTA};
    border-radius: 8px;
    
    & > :nth-child(1){
      & > *{
        fill:${PRIMARY.PRIMARY_CTA};
      }
    }

    & > span {
      font-size: 20px;
      font-weight:500;
      color:${PRIMARY.PRIMARY_CTA};
    }

    @media (width < 1033px) {
      /* gap: 23px; */
    }
  }
  
`