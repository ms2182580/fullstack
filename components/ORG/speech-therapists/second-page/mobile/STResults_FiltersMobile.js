import { ORG_Mobile_FilterIcon } from "../../../../../assets/Icons"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../../context/ORG_Ctx_ShowFiltersMobile"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { STResults_FiltersContainerWrapper } from "../styles/STResults_FiltersContainerWrapper"
import { STResults_SortByMobileWrapper } from "./styles/STResults_SortByMobileWrapper"

export const STResults_FiltersMobile = ({
  dispatch,
  setFilterData,
  clearAll,
  setClearAll,
  showStateChildren,
  shouldClear,
  setShouldClear,
  handleClearAll
}) => {
  const { mustShowFiltersMobile, setMustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  const handleShowFilters = () => {
    setMustShowFiltersMobile((prevState) => !prevState)
  }

  const handleCloseFilters = (e) => {
    console.log("e:", e)
    if (e.key === "Enter") {
      handleShowFilters()
    }
  }

  const handleClearAllWithKey = (e) => {
    if (e.key === "Enter") {
      handleClearAll(e)
      setMustShowFiltersMobile(false)
    }
  }

  return (
    <>
      {mustShowFiltersMobile === false ? (
        <STResults_SortByMobileWrapper
          onClick={handleShowFilters}
          tabIndex={0}
          onKeyDown={handleCloseFilters}>
          <Caption
            bolder
            primary_cta>
            Advanced Filters
          </Caption>
          <ORG_Mobile_FilterIcon />
        </STResults_SortByMobileWrapper>
      ) : null}

      <STResults_FiltersContainerWrapper
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        showStateChildren={showStateChildren}
        shouldClear={shouldClear}
        setShouldClear={setShouldClear}
        handleClearAll={handleClearAll}
        handleShowFilters={handleShowFilters}
        isMobile={true}
        mustShowFiltersMobile={mustShowFiltersMobile}
      />

      <span
        onClick={(e) => handleShowFilters(e)}
        onKeyDown={(e) => handleCloseFilters(e)}
        tabIndex={0}>
        <ButtonSmall preventFocus={-1}>Apply Filters</ButtonSmall>
      </span>
      <span
        onClick={(e) => {
          handleClearAll(e)
          handleShowFilters(e)
        }}
        onKeyDown={(e) => {
          handleClearAllWithKey(e)
        }}
        tabIndex={0}>
        <ButtonSmall
          secondary
          preventFocus={-1}>
          Clear All Filters
        </ButtonSmall>
      </span>
    </>
  )
}
