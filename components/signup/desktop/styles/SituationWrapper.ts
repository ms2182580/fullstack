import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const SituationWrapper = styled.div`
  padding: 0px 80px;

  & > :nth-child(1) {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  & > :nth-child(2) {
    color: #3a343c;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }

  & > :nth-child(3) {
    & > :nth-child(3) {
      margin-top: 16px;
      position: relative;
      display: flex;
      flex-direction: column;
      & > :nth-child(2) {
        position: absolute;
        top: 0px;
        left: 510px;
        z-index: 1;
      }
    }
    & > :nth-child(1) {
      margin-top: 16px;
      display: flex;
    }
    & > :nth-child(4) {
      margin-top: 48px;
      margin-bottom: 24px;
    }
    & > :nth-child(5) {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      width: 70%;
      /* & > * {
        display: flex;
        height: 48px;
        min-width: 130px;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 999px;
        border: 1px solid #6e3a82;
        background: #fff;
      } */
    }
  }
`
type SituationProps = {
  isSelected: boolean
}
export const SituationSpan = styled.span<SituationProps>`
  cursor: pointer;
  display: flex;
  height: 48px;
  min-width: 130px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid ${PRIMARY.PRIMARY_CTA};
  background: ${(props) =>
    props.isSelected ? `${PRIMARY.PRIMARY_CTA}` : "white"};
  color: ${(props) => (props.isSelected ? "white" : `${PRIMARY.PRIMARY_CTA}`)};
`
