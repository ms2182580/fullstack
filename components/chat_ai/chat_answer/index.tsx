import SVGArrow from "@/assets/icons/arrow_up.svg"
import Link from "next/link"
import { useState } from "react"
import { Card } from "./card"
import { ChatAnswerWrapper } from "./styles/chat-answer-wrapper"

/* 

!FH0 Handle errors from the server

*/

export const ChatAnswer = ({ theDataFetched, forTheKey }: any) => {
  const [showAll, setShowAll] = useState(false)

  const handleShowAll = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      setShowAll(true)
    }
  }

  if (theDataFetched == undefined) return null

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
                  "NAICS 1 Description": naicsDesc1,
                  "NAICS 1": naicsNumber1,
                  ...all
                } = value["mongo"]

                if (!showAll) {
                  while (index2 < 2) {
                    return (
                      <div key={`${forTheKey}_${index2}`}>
                        <Card
                          naicsDesc1={naicsDesc1}
                          naicsNumber1={naicsNumber1}
                        />
                      </div>
                    )
                  }
                }

                return (
                  <div key={`${forTheKey}_${index2}`}>
                    <Card naicsDesc1={naicsDesc1} naicsNumber1={naicsNumber1} />
                  </div>
                )
              })}
            {showAll && <p>End of results</p>}
            {!showAll ? (
              <p onClick={handleShowAll}>Show more results</p>
            ) : (
              <p>Show all results</p>
            )}
            <Link href={`/teams/new-search/resources/first`}>
              <p>Search selected categories for resources</p> <SVGArrow />
            </Link>
          </article>
        </section>
      </li>
    </ChatAnswerWrapper>
  )
}
