import { XDesktopSvg } from "../../../../assets/Icons/index.js"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../context/ORG_Ctx_ShowFiltersMobile.js"
import { ORG_FILTERS_DATA, ORG_FILTERS_KEYS } from "../../../../utils/ORG_FiltersCategories.js"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024.js"
import { BtnSmall } from "../../../ui/buttons/general/styles/ButtonStyled.js"
import { ST_D_Results_FilterCheckboxContainer } from "./ST_D_Results_FilterCheckboxContainer.js"
import { ST_D_Results_FilterRangeInput } from "./ST_D_Results_FilterRangeInput.js"
import { ST_D_Results_FiltersContainerWrapper } from "./styles/ST_D_Results_FiltersContainerWrapper.js"

export const ST_D_Results_FiltersContainer = ({
  state,
  dispatch,
  tempState,
  setTempState,
  setFilterData,
  clearAll,
  setClearAll,
  showStateChildren,
  shouldClear,
  setShouldClear,
  handleClearAll,
  title = "Advanced Filters",
  handleShowFilters,
  mustShowFiltersDesktop,
  handleAddFilters
}) => {
  const { isMobile } = useWidthWindow1024()

  const { mustShowFiltersMobile, setMustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  const handleCloseFilters = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      handleShowFilters()
    }
  }

  return (
    <ST_D_Results_FiltersContainerWrapper>
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
        <ST_D_Results_FilterRangeInput
          dispatch={dispatch}
          setFilterData={setFilterData}
          tempState={tempState}
          setTempState={setTempState}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA.agesServed}
          max={ORG_FILTERS_DATA.agesServed.length - 1}
          title={ORG_FILTERS_KEYS.agesServed.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS.agesServed.updateState}
          mustShowFiltersDesktop={mustShowFiltersDesktop}
        />
        <ST_D_Results_FilterRangeInput
          dispatch={dispatch}
          setFilterData={setFilterData}
          tempState={tempState}
          setTempState={setTempState}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA.distance}
          max={ORG_FILTERS_DATA.distance.length - 1}
          title={ORG_FILTERS_KEYS.distance.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS.distance.updateState}
          showMiles={true}
          mustShowFiltersDesktop={mustShowFiltersDesktop}
        />
        <ST_D_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          tempState={tempState}
          setTempState={setTempState}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA.diagnosis}
          title={ORG_FILTERS_KEYS.diagnosis.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS.diagnosis.updateState}
        />

        <ST_D_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          tempState={tempState}
          setTempState={setTempState}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA.viewOnly}
          title={ORG_FILTERS_KEYS.viewOnly.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS.viewOnly.updateState}
        />

        <ST_D_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA.insurance}
          title={ORG_FILTERS_KEYS.insurance.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS.insurance.updateState}
        />

        <ST_D_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA.meetingFormat}
          title={ORG_FILTERS_KEYS.meetingFormat.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS.meetingFormat.updateState}
        />

        <ST_D_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA.serviceSetting}
          title={ORG_FILTERS_KEYS.serviceSetting.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS.serviceSetting.updateState}
        />

        <ST_D_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA.sessionType}
          title={ORG_FILTERS_KEYS.sessionType.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS.sessionType.updateState}
        />
        <ST_D_Results_FilterCheckboxContainer
          state={state}
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA.languages}
          title={ORG_FILTERS_KEYS.language.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS.language.updateState}
        />

        <ST_D_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA.providerType}
          title={ORG_FILTERS_KEYS.providerType.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS.providerType.updateState}
        />
      </div>

      <div>
        <span
          onClick={(e) => handleClearAll(e)}
          onKeyDown={(e) => handleClearAll(e)}
          tabIndex={0}>
          <BtnSmall secondary>Clear all</BtnSmall>
        </span>
        <span
          onClick={(e) => handleAddFilters(e)}
          onKeyDown={(e) => handleAddFilters(e)}
          tabIndex={0}>
          <BtnSmall>Apply</BtnSmall>
        </span>
      </div>
    </ST_D_Results_FiltersContainerWrapper>
  )
}
