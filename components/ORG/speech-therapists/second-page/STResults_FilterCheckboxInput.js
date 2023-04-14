import { useEffect, useState } from "react"

export const STResults_FilterCheckboxInput = ({
  type,
  name,
  dispatch,
  setFilterData,
  toUpdateFilters,
  clearAll,
  shouldClear
}) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(false)
  }, [clearAll, shouldClear])

  return (
    <input
      type={type}
      name={name}
      checked={checked}
      onClick={(e) => {
        dispatch({
          type: { x: name },
          payload: [setFilterData, e, toUpdateFilters, ]
        })
      }}
      onChange={() => {
        setChecked((prevState) => !prevState)
      }}
    />
  )
}
