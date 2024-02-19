import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  selected: number
}
export const WhoYouAreWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  & > :nth-child(${(props) => props.selected}) {
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  }
  & > * {
    display: flex;
    margin-top: 112px;
    min-width: 369px;
    padding: 16px 32px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    border: 2px solid #d3ced5;
    background: #fff;
    & > :nth-child(2) {
      color: #3a343c;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`
