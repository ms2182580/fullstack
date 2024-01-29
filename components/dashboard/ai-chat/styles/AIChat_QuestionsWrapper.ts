import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const AIChat_QuestionsWrapper = styled.div`
  display: flex;
  padding: 16px;
  gap: 10px;
  border-radius: 10px;
  background: #efefef;
  flex-direction: column;
  max-width: 660px;
  & > :nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`

type AIChat_QuestionsWrapper_TitleProps = {
  isSelected: boolean
}
export const AIChat_QuestionsWrapper_Title = styled.span<AIChat_QuestionsWrapper_TitleProps>`
  display: flex;
  padding: 9px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: ${(props) => (props.isSelected ? PRIMARY.PRIMARY_CTA : "white")};
  color: ${(props) => (props.isSelected ? "white" : "#000")};
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
`
