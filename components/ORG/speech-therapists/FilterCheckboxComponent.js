import FilterCheckboxComponentWrapper from "./styles/FilterCheckboxComponentWrapper.js"

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
      <div>
        <p>Filter by</p>
        <p>Clear all</p>
      </div>

      <FilterCheckboxComponentWrapper>
        <div>
          <h3>{title}</h3>
          <span>ICON</span>
        </div>

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
      </FilterCheckboxComponentWrapper>
    </>
  )
}

export default FilterCheckboxComponent
