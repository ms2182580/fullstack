import styled from "styled-components"

type Props = {
  isSender: boolean
}
export const AIChat_Conversation_IndividualPdfWrapper = styled.div<Props>`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 10px;
  background: ${(props) => (props.isSender ? "#CACACA" : "#EFEFEF")};
  max-width: 290px;
  & > :nth-child(2) {
    display: flex;
    align-items: center;
    gap: 16px;
    & > a {
      color: black;
    }
  }
`
