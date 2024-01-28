import styled from "styled-components"

export const AIChat_ConversationWrapper = styled.div`
  margin: 0px 135px;
  height: 75vh;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 0px;
    border: 1px solid black;
  }
  & > :nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`
type MessageContainerProps = {
  isSender: boolean
}
export const MessageContainer = styled.div<MessageContainerProps>`
  align-self: ${(props) => (props) =>
    props.isSender ? "flex-end" : "flex-start"};
`
