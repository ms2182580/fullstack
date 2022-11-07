const FilterCheckboxComponent = ({
  dispatch,
  setFilterData,
  categoriesToDisplay = ["nothing here"],
  title,
  toUpdate = undefined
}) => {
  let toUpdateFilters =
    typeof toUpdate !== undefined ? toUpdate : title.toLowerCase()

  // console.log(
  //   dispatch,
  //   "\n",
  //   setFilterData,
  //   "\n",
  //   categoriesToDisplay,
  //   "\n",
  //   title,
  //   "\n",
  //   toUpdate)
  // console.log('title:', title.toLowerCase())

  // console.log('toUpdateFilters:', typeof toUpdateFilters)
  // console.log('toUpdateFilters:', toUpdateFilters)
  // console.log('toUpdateFilters:', toUpdateFilters)

  return (
    <>
      <h3>{title}</h3>

      <ul>
        {categoriesToDisplay?.map((x) => {
          // console.log('x:', x)

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
