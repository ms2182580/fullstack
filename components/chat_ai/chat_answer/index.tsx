2
import { useState } from "react"
import { ChatAnswerWrapper } from "./styles/chat-answer-wrapper"

export const ChatAnswer = ({ theDataFetched, forTheKey }: any) => {
  const [showAll, setShowAll] = useState(false)

  return (
    <ChatAnswerWrapper>
      <li>
        <section>
          {theDataFetched !== undefined && (
            <header>
              <h2>We think results from these categories could help:</h2>
            </header>
          )}
          <article>
            {theDataFetched !== undefined &&
              theDataFetched.map(([theKey, value], index2) => {
                const {
                  "Years In Database": years,
                  City: city,
                  ...all
                } = value["mongo"]
                return (
                  <div key={`${forTheKey}_${index2}`}>
                    <p>
                      Results from the database (only keys for now):{" "}
                      <strong>{theKey}</strong>
                    </p>
                  </div>
                )
              })}
          </article>
        </section>
      </li>
    </ChatAnswerWrapper>
  )
}
