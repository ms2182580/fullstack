import { Fragment } from "react"
import { StartEmptySvg, StartFullSvg } from "../../../assets/Icons"
import { CustomCheckboxInput } from "./CustomCheckboxInput"
import {
  StarsWrapper
} from "./styles/FilterCheckboxComponentWrapper"

export const FilterLeftRating = ({
  categoriesToDisplay,
  dispatch,
  setFilterData,
  toUpdateFilters,
}) => {
  return categoriesToDisplay?.map((x) => {
    let ratingPattern = Array(5)
      .fill(0)
      .map((xMap, i) => {
        if (x - 1 < i) {
          return "empty"
        }
        return "fully"
      })
    return (
      <li key={x}>
        <label>
          <StarsWrapper>
            {ratingPattern.map((x, i) => {
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
          </StarsWrapper>

          <CustomCheckboxInput
            type="checkbox"
            name={x}
            dispatch={dispatch}
            setFilterData={setFilterData}
            toUpdateFilters={toUpdateFilters}
          />

          <span></span>
        </label>
      </li>
    )
  })
}
