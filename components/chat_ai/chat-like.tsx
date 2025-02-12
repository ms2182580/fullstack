import { useEffect } from "react"
import { INDEX_ChatAIFetchedDataType } from "."
import { ChatLikeWrapper } from "./styles/chat-like-wrapper"

/* 
!FH0

Keep working on this feature. Expected features:
- Do not make a new query if the actual query is the same as the previous one
- Implement the expected UI

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
    <ChatLikeWrapper>
      <ul>
        {queriesFromUserState.map((query, index) => {
          const forTheKey = new Date().toString()

          const theDataFetched = theDataToUse?.[index]?.["theData"]

          return (
            <li key={query}>
              <p>{query}</p>
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
