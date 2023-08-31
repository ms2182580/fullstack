import { XDesktopSvg } from "../../../../../../assets/Icons/index.js"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../../../../utils/ORG_FiltersCategories.js"
import { BtnSmall } from "../../../../../ui/buttons/general/styles/ButtonStyled.js"
import { ST_D_Results_FilterCheckboxContainer } from "./ST_D_Results_FilterCheckboxContainer.js"
import { ST_D_Results_FilterRangeInput } from "./ST_D_Results_FilterRangeInput.js"
import { ST_D_Results_FiltersContainerWrapper } from "./styles/ST_D_Results_FiltersContainerWrapper.js"



export const ST_D_Results_FiltersContainer = ({
  clearAll,
  dispatch,
  handleAddFilters,
  handleClearAll,
  handleShowFilters,
  setClearAll,
  setFilterData,
  setShouldClear,
  setTempState,
  shouldClear,
  showStateChildren,
  tempState,
}) => {
  const handleCloseFilters = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      handleShowFilters()
    }
  }

  return (
    <ST_D_Results_FiltersContainerWrapper>
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
          categoriesToDisplay={ORG_FILTERS_DATA_D.agesServed}
          max={ORG_FILTERS_DATA_D.agesServed.length - 1}
          title={ORG_FILTERS_KEYS_D.agesServed.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_D.agesServed.updateState}
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
          categoriesToDisplay={ORG_FILTERS_DATA_D.distance}
          max={ORG_FILTERS_DATA_D.distance.length - 1}
          title={ORG_FILTERS_KEYS_D.distance.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_D.distance.updateState}
          showMiles={true}
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
          categoriesToDisplay={ORG_FILTERS_DATA_D.diagnosis}
          title={ORG_FILTERS_KEYS_D.diagnosis.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_D.diagnosis.updateState}
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
          categoriesToDisplay={ORG_FILTERS_DATA_D.viewOnly}
          title={ORG_FILTERS_KEYS_D.viewOnly.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_D.viewOnly.updateState}
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
          categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
          title={ORG_FILTERS_KEYS_D.insurance.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_D.insurance.updateState}
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
          categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
          title={ORG_FILTERS_KEYS_D.meetingFormat.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_D.meetingFormat.updateState}
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
          categoriesToDisplay={ORG_FILTERS_DATA_D.serviceSetting}
          title={ORG_FILTERS_KEYS_D.serviceSetting.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_D.serviceSetting.updateState}
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
          categoriesToDisplay={ORG_FILTERS_DATA_D.sessionType}
          title={ORG_FILTERS_KEYS_D.sessionType.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_D.sessionType.updateState}
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
          categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
          title={ORG_FILTERS_KEYS_D.language.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_D.language.updateState}
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
          categoriesToDisplay={ORG_FILTERS_DATA_D.providerType}
          title={ORG_FILTERS_KEYS_D.providerType.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_D.providerType.updateState}
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
