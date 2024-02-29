import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const LeftSide_N_Wrapper = styled.aside`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 290px;
  min-height: 100vh;

  padding: 0px 16px;

  border-radius: 0px 24px 0px 0px;
  background: ${PRIMARY.PRIMARY_CTA};

  padding-top: 32px;

  h3 {
    margin-top: 112px;
    color: #f3f1f3;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 54px;
  }
  p {
    color: #f3f1f3;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
`
