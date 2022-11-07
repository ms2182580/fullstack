const FilterCheckboxComponent = ({
  dispatch,
  setFilterData,
  categoriesToDisplay,
  title,
  toUpdate = undefined
  
}) => {
  const toUpdateFilters = toUpdate || title.toLowerCase()

  return (
    <>
      <h3>{title}</h3>
      <ul>
        {categoriesToDisplay.map((x) => (
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
        ))}
      </ul>
    </>
  )
}

export default FilterCheckboxComponent
