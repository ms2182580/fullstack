import { useState } from "react"
import { ST_D_Detail_FAQS_VoteArroDownSvg, ST_D_Detail_FAQS_VoteArroUpSvg } from "../../../../../assets/Icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Detail_FAQS_VoteQuestionsAnswersWrapper } from "./styles/ST_D_Detail_FAQS_VoteQuestionsAnswersWrapper.js"

export const ST_D_Detail_FAQS_VoteQuestionsAnswers = ({ votes, questions, answers, allUserNames, month }) => {
  const [votesState, setVotesState] = useState(Number(votes))
  const [alreadyVoteUp, setAlreadyVoteUp] = useState(false)
  const [alreadyVoteDown, setAlreadyVoteDown] = useState(false)

  const handleUpVote = () => {
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

  const handleDownVote = () => {
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

  return (
    <ST_D_Detail_FAQS_VoteQuestionsAnswersWrapper
      alreadyVoteUp={alreadyVoteUp}
      alreadyVoteDown={alreadyVoteDown}>
      <div>
        <span onClick={handleUpVote}>
          <ST_D_Detail_FAQS_VoteArroUpSvg />
        </span>

        <P semibold>{votesState}</P>
        <P semibold>votes</P>

        <span onClick={handleDownVote}>
          <ST_D_Detail_FAQS_VoteArroDownSvg />
        </span>
      </div>

      <div>
        <div>
          <P semibold>Q: </P>
          <P semibold>{questions}</P>
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
              <P semibold>A:</P>
              <div>
                <P>{answers}</P>
                <div>
                  <P
                    dark_gray
                    semibold>
                    By {allUserNames} <span>{month} 2022</span>
                  </P>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ST_D_Detail_FAQS_VoteQuestionsAnswersWrapper>
  )
}
