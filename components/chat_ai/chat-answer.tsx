import { ChatAnswerWrapper } from "./styles/chat-answer-wrapper"

export const ChatAnswer = ({ theDataFetched, forTheKey }: any) => {
  return (
    <ChatAnswerWrapper>
      {theDataFetched !== undefined &&
        theDataFetched.map(([theKey, value], index2) => {
          const {
            "Years In Database": years,
            City: city,
            ...all
          } = value["mongo"]

          return (
            <li key={`${forTheKey}_${index2}`}>
              <p>
                Results from the database (only keys for now):{" "}
                <strong>{theKey}</strong>
              </p>
            </li>
          )
        })}
    </ChatAnswerWrapper>
  )
}
