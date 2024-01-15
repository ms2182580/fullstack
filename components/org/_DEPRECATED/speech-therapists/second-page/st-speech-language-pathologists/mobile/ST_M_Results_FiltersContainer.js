import { XDesktopSvg } from "../../../../../../../assets/icons/index.js"
import {
  ORG_FILTERS_DATA_M,
  ORG_FILTERS_KEYS_M,
} from "../../../../../../../utils/ORG_FiltersCategories"
import { BtnSmall } from "../../../../../../ui/buttons/general/styles/ButtonStyled"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_M_Results_FilterCheckboxContainer } from "./ST_M_Results_FilterCheckboxContainer.js"
import { ST_M_Results_FiltersContainerWrapper } from "./styles/ST_M_Results_FiltersContainerWrapper.js"

export const ST_M_Results_FiltersContainer = ({
  clearAll,
  dispatch,
  handleAddFilters,
  handleClearAll,
  handleShowFilters,
  mustShowFiltersMobile,
  setClearAll,
  setFilterData,
  setShouldClear,
  setTempState,
  shouldClear,
  showStateChildren,
  state,
  tempState,
}) => {
  const handleCloseFilters = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      handleShowFilters()
    }
  }

  return (
    <ST_M_Results_FiltersContainerWrapper
      mustShowFiltersMobile={mustShowFiltersMobile}
    >
      <div
        onClick={(e) => handleCloseFilters(e)}
        onKeyDown={(e) => handleCloseFilters(e)}
      >
        <P semibold>Advanced Filters</P>
        <XDesktopSvg tabIndex={0} />
      </div>

      <div>
        <ST_M_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          tempState={tempState}
          setTempState={setTempState}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA_M.distance}
          max={ORG_FILTERS_DATA_M.distance.length - 1}
          title={ORG_FILTERS_KEYS_M.distance.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.distance.updateState}
          showMiles={true}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />
        <ST_M_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          tempState={tempState}
          setTempState={setTempState}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA_M.rating}
          max={ORG_FILTERS_DATA_M.rating.length - 1}
          title={ORG_FILTERS_KEYS_M.rating.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.rating.updateState}
          showMiles={true}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />

        <ST_M_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          tempState={tempState}
          setTempState={setTempState}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA_M.diagnosis}
          title={ORG_FILTERS_KEYS_M.diagnosis.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.diagnosis.updateState}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />

        <ST_M_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          tempState={tempState}
          setTempState={setTempState}
          clearAll={clearAll}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA_M.agesServed}
          max={ORG_FILTERS_DATA_M.agesServed.length - 1}
          title={ORG_FILTERS_KEYS_M.agesServed.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.agesServed.updateState}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />

        <ST_M_Results_FilterCheckboxContainer
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
          categoriesToDisplay={ORG_FILTERS_DATA_M.languages}
          title={ORG_FILTERS_KEYS_M.language.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.language.updateState}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />

        <ST_M_Results_FilterCheckboxContainer
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
          categoriesToDisplay={ORG_FILTERS_DATA_M.yearsOfPractice}
          title={ORG_FILTERS_KEYS_M.yearsOfPractice.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.yearsOfPractice.updateState}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />

        <ST_M_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA_M.serviceSetting}
          title={ORG_FILTERS_KEYS_M.serviceSetting.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.serviceSetting.updateState}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />

        <ST_M_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA_M.insurance}
          title={ORG_FILTERS_KEYS_M.insurance.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.insurance.updateState}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />

        <ST_M_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA_M.meetingFormat}
          title={ORG_FILTERS_KEYS_M.meetingFormat.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.meetingFormat.updateState}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />

        <ST_M_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA_M.sessionType}
          title={ORG_FILTERS_KEYS_M.sessionType.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.sessionType.updateState}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />

        <ST_M_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA_M.transportation}
          title={ORG_FILTERS_KEYS_M.transportation.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.transportation.updateState}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />

        <ST_M_Results_FilterCheckboxContainer
          dispatch={dispatch}
          setFilterData={setFilterData}
          clearAll={clearAll}
          tempState={tempState}
          setTempState={setTempState}
          setClearAll={setClearAll}
          showStateChildren={showStateChildren}
          shouldClear={shouldClear}
          setShouldClear={setShouldClear}
          categoriesToDisplay={ORG_FILTERS_DATA_M.providerType}
          title={ORG_FILTERS_KEYS_M.providerType.titleToShow}
          toUpdateFilters={ORG_FILTERS_KEYS_M.providerType.updateState}
          mustShowFiltersMobile={mustShowFiltersMobile}
        />
      </div>

      <div>
        <span
          onClick={(e) => handleAddFilters(e)}
          onKeyDown={(e) => handleAddFilters(e)}
          tabIndex={0}
        >
          <BtnSmall>Apply</BtnSmall>
        </span>

        <span
          onClick={(e) => handleClearAll(e)}
          onKeyDown={(e) => handleClearAll(e)}
          tabIndex={0}
        >
          <BtnSmall secondary>Clear all</BtnSmall>
        </span>
      </div>
    </ST_M_Results_FiltersContainerWrapper>
  )
}
