import { useState } from "react"
import {
  ORG_D_Detail_FAQS_VoteArrowDownSvg,
  ORG_D_Detail_FAQS_VoteArrowUpSvg,
} from "../../../../../assets/icons/index"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_FAQS_VoteQuestionsAnswersWrapper } from "./styles/ORG_D_Detail_FAQS_VoteQuestionsAnswersWrapper"

export const ORG_D_Detail_FAQS_VoteQuestionsAnswers = ({
  votes,
  questions,
  answers,
  allUserNames,
  month,
}) => {
  const [votesState, setVotesState] = useState(Number(votes))
  const [alreadyVoteUp, setAlreadyVoteUp] = useState(false)
  const [alreadyVoteDown, setAlreadyVoteDown] = useState(false)

  const handleUpVote = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      if (!alreadyVoteUp) {
        setVotesState((prevState) => {
          if (votesState === Number(votes)) {
            return prevState + 1
          } else {
            return prevState + 2
          }
        })
        setAlreadyVoteUp(true)
        setAlreadyVoteDown(false)
      } else {
        setVotesState(Number(votes))
        setAlreadyVoteUp(false)
      }
    }
  }

  const handleDownVote = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      if (!alreadyVoteDown) {
        setVotesState((prevState) => {
          if (votesState === Number(votes)) {
            return prevState - 1
          } else {
            return prevState - 2
          }
        })
        setAlreadyVoteDown(true)
        setAlreadyVoteUp(false)
      } else {
        setVotesState(Number(votes))
        setAlreadyVoteDown(false)
      }
    }
  }

  return (
    <ORG_D_Detail_FAQS_VoteQuestionsAnswersWrapper
      alreadyVoteUp={alreadyVoteUp}
      alreadyVoteDown={alreadyVoteDown}
    >
      <div>
        <span onClick={handleUpVote} onKeyDown={handleUpVote} tabIndex={0}>
          <ORG_D_Detail_FAQS_VoteArrowUpSvg />
        </span>

        <div>
          <P semibold>{votesState}</P>
          <P semibold>votes</P>
        </div>

        <span onClick={handleDownVote} onKeyDown={handleDownVote} tabIndex={0}>
          <ORG_D_Detail_FAQS_VoteArrowDownSvg />
        </span>
      </div>

      <div>
        <div>
          <P bold>Q: </P>
          <P bold>{questions}</P>
        </div>
        <div>
          {answers === "" ? (
            <>
              <div className="shouldIndent">
                <P>
                  No Response yet. What’s your <span>answer</span> ?
                </P>
              </div>
            </>
          ) : (
            <>
              <P bold>A:</P>
              <div>
                <P>{answers}</P>
                <div>
                  <P dark_gray semibold>
                    By {allUserNames} <span>{month} 2023</span>
                  </P>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ORG_D_Detail_FAQS_VoteQuestionsAnswersWrapper>
  )
}
