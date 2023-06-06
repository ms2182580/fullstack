import { useState } from "react"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { STDetail_Review_Modal_DetailRatingWrapper } from "./styles/STDetail_Review_Modal_DetailRatingWrapper.js"

let fullFillRatingFunc = (arr) => {
  let finalArr = []
  let ammount = []
  for (let x of arr) {
    let createArr = Array(x).fill("full")
    let howMuchLeft = 5 - x
    let emptyArr = Array(howMuchLeft).fill("empty")
    finalArr.push([...createArr, ...emptyArr])
    ammount.push(x)
  }

  return { ammount, finalArr }
}

const formatRatingFunc = (rating) => {
  let toReturn = Array(4).fill(rating)
  if (rating === 1 || rating === 5) {
    return fullFillRatingFunc(toReturn)
  }

  let finalArr = [toReturn[0] + 1, toReturn[0] - 1, toReturn[0] - 1, toReturn[0] + 1]

  return fullFillRatingFunc(finalArr)
}

export const STDetail_Review_Modal_DetailRating = ({ rating }) => {
  // let formatRating = formatRatingFunc(Number(rating))
  const [formatRating, setFormatRating] = useState(formatRatingFunc(Number(rating)))

  return (
    <STDetail_Review_Modal_DetailRatingWrapper>
      <div>
        <H4>Appointment Scheduling</H4>
        <div>
          {formatRating.finalArr[0].map((x) => {
            if (x === "full") {
              return <div className="STDetail_Review_Modal_DetailRating_Full"></div>
            } else {
              return <div className="STDetail_Review_Modal_DetailRating_Empty"></div>
            }
          })}
        </div>
        <H3>{formatRating.ammount[0]}.0</H3>
      </div>
      <div>
        <H4>Office Environment</H4>
        <div>
          {formatRating.finalArr[1].map((x) => {
            if (x === "full") {
              return <div className="STDetail_Review_Modal_DetailRating_Full"></div>
            } else {
              return <div className="STDetail_Review_Modal_DetailRating_Empty"></div>
            }
          })}
        </div>
        <H3>{formatRating.ammount[1]}.0</H3>
      </div>
      <div>
        <H4>Wait Times</H4>
        <div>
          {formatRating.finalArr[2].map((x) => {
            if (x === "full") {
              return <div className="STDetail_Review_Modal_DetailRating_Full"></div>
            } else {
              return <div className="STDetail_Review_Modal_DetailRating_Empty"></div>
            }
          })}
        </div>
        <H3>{formatRating.ammount[2]}.0</H3>
      </div>
      <div>
        <H4>Provider Feedback</H4>
        <div>
          {formatRating.finalArr[3].map((x) => {
            if (x === "full") {
              return <div className="STDetail_Review_Modal_DetailRating_Full"></div>
            } else {
              return <div className="STDetail_Review_Modal_DetailRating_Empty"></div>
            }
          })}
        </div>
        <H3>{formatRating.ammount[3]}.0</H3>
      </div>
    </STDetail_Review_Modal_DetailRatingWrapper>
  )
}
