import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const INDEX_D_RecommendedWrapped = styled.div`
  max-width: 1440px;
  margin-top: 132px;
  margin-inline: auto;
  //h1
  & > :nth-child(1) {
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 82px; /* 170.833% */
  }

  //1 P
  //2 P
  & > :nth-child(2),
  & > :nth-child(3) {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 168.75% */
  }
  & > :nth-child(3) {
    margin-top: 20px;
  }

  /* button */
  & > :nth-child(5) {
    margin-inline: auto;
    margin-bottom: 54.6px;
  }
`
