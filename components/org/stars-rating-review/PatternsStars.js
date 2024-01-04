import { Fragment, useState } from "react"
import { StartEmptyBigSvg, StartEmptySvg, StartFullBigSvg, StartFullSvg } from "../../../assets/icons"
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

export const PatternStars = ({ rating, modal = false }) => {
  const [thePattern, setThePattern] = useState(ratingPatternFunc(rating))
  return (
    <PatternStarsWrapper modal={modal}>
      <div>
        {thePattern.map((x, i) => {
          if (x === "fully") {
            return <Fragment key={`${x}${i}`}>{modal ? <StartFullBigSvg /> : <StartFullSvg />}</Fragment>
          } else {
            return <Fragment key={`${x}${i}`}>{modal ? <StartEmptyBigSvg /> : <StartEmptySvg />}</Fragment>
          }
        })}
      </div>
    </PatternStarsWrapper>
  )
}
