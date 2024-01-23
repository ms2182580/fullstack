import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Label = styled.label`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  display: grid;
  gap: 20px;
`

export const Input = styled.input`
  height: 56px;
  border-radius: 12px;
  border: 1px solid rgba(102, 102, 102, 0.35);
  background: #fff;
  width: 100%;
  padding: 0px 20px;
`
export const Home_D_Help_NWrapper = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 2fr 1.3fr;

  grid-template-areas:
    "title ."
    "form form"
    "button .";

  & > :nth-child(1) {
    grid-area: title;
  }

  & > :nth-child(2) {
    grid-area: form;
    margin-top: 16px;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1.3fr;
  }

  & > :nth-child(3) {
    grid-area: button;
    margin-top: 32px;

    margin-left: auto;
    margin-right: 63px;

    ${reusableButton({})}
  }
`
