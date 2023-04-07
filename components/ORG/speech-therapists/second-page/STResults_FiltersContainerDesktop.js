import { XDesktopSvg } from "../../../../assets/Icons/index.js"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../context/ORG_Ctx_ShowFiltersMobile"
import { ORG_FiltersCategoriesToDisplay } from "../../../../utils/ORG_FiltersCategoriesToDisplay.js"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { BtnSmall } from "../../../ui/buttons/general/styles/ButtonStyled.js"
import { STResults_FilterCheckboxContainer } from "./STResults_FilterCheckboxContainer"
import { STResults_FilterRangeInput } from "./STResults_FilterRangeInput.js"
import { STResults_FiltersContainerDesktopWrapper } from "./styles/STResults_FiltersContainerDesktopWrapper.js"

export const STResults_FiltersContainerDesktop = ({
  dispatch,
  setFilterData,
  clearAll,
  setClearAll,
  showStateChildren,
  shouldClear,
  setShouldClear,
  handleClearAll,
  title = "Advanced Filters",
  handleShowFilters,
  mustShowFiltersDesktop
}) => {
  const { isMobile } = useWidthWindow1024()
  // console.log('isMobile:', isMobile)

  const { mustShowFiltersMobile, setMustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  // console.log('mustShowFiltersMobile:', mustShowFiltersMobile)

  const handleCloseFilters = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      handleShowFilters()
    }
  }

  return (
    <STResults_FiltersContainerDesktopWrapper
      // isMobile={isMobile}
      // mustShowFiltersMobile={mustShowFiltersMobile}
      mustShowFiltersDesktop={mustShowFiltersDesktop}>
      {/* {title === "Advanced Filters" ? (
        <div>
          <H4>{title}</H4>
          <div
            onClick={handleShowFilters}
            tabIndex={0}
            onKeyDown={handleCloseFilters}>
            <Image
              src={X_Svg}
              alt="Close X to close the filters"
            />
          </div>
        </div>
      ) : (
        <div
          onClick={(e) => handleCloseFilters(e)}
          onKeyDown={(e) => handleCloseFilters(e)}
          tabIndex={0}>
          <XDesktopSvg />
        </div>
      )} */}

      <div
        onClick={(e) => handleCloseFilters(e)}
        onKeyDown={(e) => handleCloseFilters(e)}>
        <XDesktopSvg tabIndex={0} />
      </div>

      <div>
        <STResults_FilterRangeInput
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FiltersCategoriesToDisplay.agesServed}
          max={ORG_FiltersCategoriesToDisplay.agesServed.length - 1}
          title="Ages Served"
          toUpdate="agesServed"
          
        />
        <STResults_FilterRangeInput
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FiltersCategoriesToDisplay.distance}
          max={ORG_FiltersCategoriesToDisplay.distance.length - 1}
          title="Distance"
        />
        <STResults_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FiltersCategoriesToDisplay.diagnosis}
          title="Diagnosis"
        />

        <STResults_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FiltersCategoriesToDisplay.viewOnly}
          title="View Only"
          toUpdate="viewOnly"
        />

        <STResults_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FiltersCategoriesToDisplay.insurance}
          title="Insurance"
        />

        <STResults_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FiltersCategoriesToDisplay.meetingFormat}
          title="Meeting Format"
          toUpdate="meetingFormat"
        />

        <STResults_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FiltersCategoriesToDisplay.serviceSetting}
          title="Service Setting"
          toUpdate="serviceSetting"
        />

        <STResults_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FiltersCategoriesToDisplay.sessionType}
          title="Session Type"
          toUpdate="sessionType"
        />
        <STResults_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FiltersCategoriesToDisplay.languages}
          title="Languages"
        />

        <STResults_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FiltersCategoriesToDisplay.providerType}
          title="Provider Type"
          toUpdate="providerType"
        />
      </div>

      <div>
        <span>
          <BtnSmall secondary>Clear all</BtnSmall>
        </span>
        <span>
          <BtnSmall>Apply</BtnSmall>
        </span>
      </div>
    </STResults_FiltersContainerDesktopWrapper>
  )
}
