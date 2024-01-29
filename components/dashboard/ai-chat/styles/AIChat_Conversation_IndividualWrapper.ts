import styled from "styled-components"
type Props = {
  isSender?: boolean
}
export const AIChat_Conversation_IndividualWrapper = styled.div<Props>`
  position: relative;

  .response-group {
    display: flex;
    justify-content: ${(props) => (props.isSender ? "start" : "end")};
    visibility: hidden;
    gap: 17px;

    & > :nth-child(1),
    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4),
    & > :nth-child(5),
    & > :nth-child(6) {
      cursor: pointer;
    }
  }

  .message {
    margin-bottom: 16px;
    margin-right: 100px;
    display: flex;
    justify-content: ${(props) => (props.isSender ? "start" : "end")};
    margin-right: 0px;
    & > span {
      padding: 16px;
      border-radius: 10px;
      background: ${(props) => (props.isSender ? "#efefef" : "#cacaca")};
    }
  }
  &:hover {
    .response-group {
      visibility: ${(props) => (props.isSender ? "visible" : "hidden")};
    }
  }
`
