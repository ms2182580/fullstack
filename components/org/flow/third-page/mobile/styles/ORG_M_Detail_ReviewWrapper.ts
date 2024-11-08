import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const ORG_M_Detail_ReviewsWrapper = styled.aside`
  & > :nth-child(1) {
    & > :nth-child(1) {
      color: ${PRIMARY.PRIMARY_CTA};
      font-size: 17px;
      font-weight: 600;
    }
  }
  & > :nth-child(5) {
    margin-top: 20px;
    border-radius: 10px;
    background: #6e3a82;
    color: white;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    padding: 7px;
  }
`
