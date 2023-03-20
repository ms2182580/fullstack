import { STFilterSortbyMobileWrapper } from "./styles/STFilterSortbyMobileWrapper"

export const STFilterSorbyHeaderMobile = () => {
  return (
    <>
      <STFilterSortbyMobileWrapper mustShowFiltersMobile={mustShowFiltersMobile}>
            <FiltersMobile
              dispatch={dispatch}
              setFilterData={setFilterData}
              clearAll={clearAll}
              setClearAll={setClearAll}
              showStateChildren={setShow}
              shouldClear={shouldClear}
              setShouldClear={setShouldClear}
              handleClearAll={handleClearAll}
            />
            <SortByMobile />
          </STFilterSortbyMobileWrapper>
    </>
  )
}