import { INDEX_ChatAIFetchedDataType } from "."
import { ChatLikeWrapper } from "./styles/chat-like-wrapper"

/* 
!FH0

Keep working on this feature. Expected features:
- The chat should not refresed for data that is already displayed
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
  console.log(
    "queriesFromUserState, theDataToUse:",
    queriesFromUserState,
    theDataToUse,
    isFetching
  )
  return (
    <ChatLikeWrapper>
      <ul>
        {queriesFromUserState.map((query, index) => {
          const forTheKey = new Date().toString()

          const theDataFetched = theDataToUse?.[index]?.["theData"]

          return (
            <li key={query}>
              <p>
                Typed by user: <strong>{query}</strong>
              </p>
              <ul>
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
              </ul>
            </li>
          )
        })}
      </ul>
      {isFetching && <p className="loader"></p>}
    </ChatLikeWrapper>
  )
}
