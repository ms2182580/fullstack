import { useEffect } from "react"
import { INDEX_ChatAIFetchedDataType } from "."
import { ChatAnswer } from "./chat-answer"
import { ChatLikeWrapper } from "./styles/chat-like-wrapper"
import { UserPrompt } from "./user-prompt"

/* 
!FH0

Keep working on this feature. Expected features:
- Implement the expected UI
  + Loader should not make a Layout Shift
  + Think how much space should use the chat response taking in mind the header and the bottom component

- Do not make a new query if the actual query is the same as the previous one

*/
export const ChatLike = ({
  theDataToUse,
  isFetching,
  queriesFromUserState,
}: {
  theDataToUse: INDEX_ChatAIFetchedDataType[]
  isFetching: boolean
  queriesFromUserState: string[]
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <ChatLikeWrapper isFetching={isFetching}>
      <ul>
        {queriesFromUserState.map((query, index) => {
          const forTheKey = new Date().toString()

          const theDataFetched = theDataToUse?.[index]?.["theData"]

          return (
            <li key={query}>
              <UserPrompt>{query}</UserPrompt>
              <ChatAnswer
                theDataFetched={theDataFetched}
                forTheKey={forTheKey}
              />
            </li>
          )
        })}
      </ul>
      {isFetching && <div />}
    </ChatLikeWrapper>
  )
}
