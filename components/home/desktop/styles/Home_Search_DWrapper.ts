import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  display: grid;
  gap: 4px;
`

export const Input = styled.input`
  height: 56px;
  border-radius: 8px;
  border: 1px solid #908395;
  width: 100%;
  padding: 0px 20px;
`
export const Home_Search_DWrapper = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 16px;

  /* padding-bottom: 48px; */

  grid-template-areas:
    "title ."
    "leftInput rightInput"
    "button .";

  & > :nth-child(1) {
    grid-area: title;
    margin-bottom: 16px;
  }

  & > :nth-child(2) {
    grid-area: leftInput;
  }

  & > :nth-child(3) {
    grid-area: rightInput;
  }

  & > :last-child {
    grid-area: button;

    margin-top: 32px;
    margin-left: auto;

    ${reusableButton({})}
  }
`
