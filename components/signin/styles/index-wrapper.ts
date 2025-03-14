import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import styled from "styled-components"

export const IndexWrapper = styled.div`
  form {
    margin-top: 20px;

    & > :nth-child(1),
    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4),
    & > :nth-child(5) {
      margin-top: 16px;
      display: block;
    }

    & > :nth-child(4),
    & > :nth-child(5) {
      position: relative;
      margin-bottom: 16px;

      & > :nth-child(2) {
        position: absolute;
        top: 38px;
        right: 10px;
        & > :nth-child(1) {
          cursor: pointer;
        }
      }
      & > :nth-child(3) {
        position: absolute;
        top: 0px;
        right: 0px;
      }
      & > :nth-child(4) {
        margin-top: 10px;
        display: flex;
      }
      & > :nth-child(5) {
        color: #3a343c;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 27px;
      }
    }
    & > :nth-child(6) {
      margin-top: 24px;
      margin-bottom: 16px;
      display: flex;
      gap: 10px;
      & > :nth-child(1) {
        width: 24px;
        height: 24px;
      }
    }
    & > :nth-child(3) {
      width: 100%;
      margin-bottom: 10px;

      ${reusableButton({})}
    }
  }

  & > :nth-child(3) {
    & > :nth-child(1) {
      margin-top: 32px;
      margin-bottom: 32px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      & > :nth-child(1) {
        height: 2px;
        width: 100%;
        background: #f5f5f5;
      }
      & > :nth-child(3) {
        height: 2px;
        width: 100%;
        background: #f5f5f5;
      }
    }
  }

  & > :nth-child(4),
  & > :nth-child(5) {
    margin: 16px 0px;
    width: 100%;
    border-radius: 8px;
    border: 2px solid #3a343c;
    gap: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-block: 8px;

    background: #fff;

    & > p {
      ${Paragraph({ color: "black" })};
    }

    &:is(:hover, :focus-visible) {
      background: #f5f5f5;
    }
  }

  .icons {
    margin-right: 6px;
  }
`

export const Label = styled.label`
  color: #3a343c;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
`
export const Input = styled.input`
  position: relative;
  display: flex;
  height: 48px;
  padding: 12px 16px;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #908395;
  background: white;
  width: 535px;
`
