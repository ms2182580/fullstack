import { Fragment } from "react"
import { StartEmptySvg, StartFullSvg } from "../../../assets/Icons"
import { PatternStarsWrapper } from "./styles/PatternStarsWrapper"

let ratingPatternFunc = (rating) => {
  return Array(5)
    .fill(0)
    .map((x, i) => {
      if (rating - 1 < i) {
        return "empty"
      }
      return "fully"
    })
}

export const PatternStars = ({ rating }) => {
  let thePattern = ratingPatternFunc(rating)
  return (
    <PatternStarsWrapper>
      <div>
        {thePattern.map((x, i) => {
          if (x === "fully") {
            return (
              <Fragment key={`${x}${i}`}>
                <StartFullSvg />
              </Fragment>
            )
          } else {
            return (
              <Fragment key={`${x}${i}`}>
                <StartEmptySvg />
              </Fragment>
            )
          }
        })}
      </div>
    </PatternStarsWrapper>
  )
}