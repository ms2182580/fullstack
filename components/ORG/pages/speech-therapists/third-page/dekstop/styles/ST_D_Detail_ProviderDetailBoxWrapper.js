import styled from 'styled-components'
import { SECONDARY_ORG_PLUS } from '../../../../../../assets/Colors'

export const ST_D_Detail_ProviderDetailBoxWrapper = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  gap: 8px;

  & > * {
    background-color: ${SECONDARY_ORG_PLUS.ASH_BLUE};
    border-radius: 8px;
    padding: 5px 10px;
  }
  
`