import { useEffect, useState } from "react"

export const STResults_FilterCheckboxInput = ({
  type,
  name,
  // dispatch,
  // tempState,
  setTempState,
  // setFilterData,
  toUpdateFilters,
  clearAll,
  shouldClear
}) => {
  const [checked, setChecked] = useState(false)
  // console.log('💦tempState:', tempState)

  useEffect(() => {
    setChecked(false)
  }, [clearAll, shouldClear])

  return (
    <input
      type={type}
      name={name}
      checked={checked}
      onClick={() => {

        if (checked === false) {
          setTempState((prevState) => {
            return {
              ...prevState,
              [toUpdateFilters]: [...prevState[toUpdateFilters], name]
            }
          })
        } else {
          setTempState((prevState) => {
            return {
              ...prevState,
              [toUpdateFilters]: [...prevState[toUpdateFilters].filter((x) => x !== name)]
            }
          })
        }
      }}
      onChange={() => {
        setChecked((prevState) => !prevState)
      }}
    />
  )
}
