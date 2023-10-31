import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_D_Detail_Reviews_IndividualComponentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  & > * {
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
  }
`
