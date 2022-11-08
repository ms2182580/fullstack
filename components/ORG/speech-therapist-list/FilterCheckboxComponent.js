import { useState } from "react"
import { useEffect } from "react"

const FilterCheckboxComponent = ({
  dispatch,
  setFilterData,
  categoriesToDisplay = ["nothing here"],
  title,
  toUpdate = undefined
}) => {
  let toUpdateFilters = toUpdate === undefined ? title.toLowerCase() : toUpdate
  


  return (
    <>
      <h3>{title}</h3>

      <ul>
        {categoriesToDisplay?.map((x) => {

          return (
            <li key={x}>
              <input
                type="checkbox"
                name={x}
                onClick={(e) => {
                  dispatch({
                    type: { x },
                    payload: [setFilterData, e, toUpdateFilters]
                  })
                }}
              />
              {x}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default FilterCheckboxComponent
