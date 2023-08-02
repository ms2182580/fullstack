import { useEffect, useState } from "react"

export const ORG_Filters_D_Checkbox_Input = ({
  type,
  name,
  // dispatch,
  // tempState,

  /* setTempState, */

  // setFilterData,

  /* toUpdateFilters,
  clearAll,
  shouldClear */
  shouldClearAllOptions
}) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(false)
  }, [shouldClearAllOptions])

  return (
    <input
      type={type}
      name={name}
      checked={checked}
      // onClick={() => {

      //   if (checked === false) {
      //     setTempState((prevState) => {
      //       return {
      //         ...prevState,
      //         [toUpdateFilters]: [...prevState[toUpdateFilters], name]
      //       }
      //     })
      //   } else {
      //     setTempState((prevState) => {
      //       return {
      //         ...prevState,
      //         [toUpdateFilters]: [...prevState[toUpdateFilters].filter((x) => x !== name)]
      //       }
      //     })
      //   }
      // }}
      onChange={() => {
        setChecked((prevState) => !prevState)
      }}
    />
  )
}
