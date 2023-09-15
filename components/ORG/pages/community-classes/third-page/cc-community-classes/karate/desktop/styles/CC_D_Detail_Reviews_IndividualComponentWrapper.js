import styled from "styled-components"
import { PRIMARY } from "../../../../../../../../../assets/Colors"

export const CC_D_Detail_Reviews_IndividualComponentWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${PRIMARY.PRIMARY_BACKGROUND};
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  padding: 12px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  & > :last-child {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: auto;
  }
`
