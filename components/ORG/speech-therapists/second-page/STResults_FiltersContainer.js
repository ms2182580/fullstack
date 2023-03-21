import Image from "next/image"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../ui/heading_body_text/HeaderFonts"
import { STResults_FilterCheckboxContainer } from "./STResults_FilterCheckboxContainer"
import { STResults_FiltersContainerWrapper } from "./styles/STResults_FiltersContainerWrapper"

export const STResults_FiltersContainer = ({
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
  isMobile = false,
  mustShowFiltersMobile = false
}) => {
  const handleCloseFilters = (e) => {
    if (e.key === "Enter") {
      handleShowFilters()
    }
  }

  return (
    <STResults_FiltersContainerWrapper
      isMobile={isMobile}
      mustShowFiltersMobile={mustShowFiltersMobile}>
      {title === "Advanced Filters" ? (
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
        <div>
          <H4>{title}</H4>
          <P
            onClick={(e) => handleClearAll(e)}
            onKeyDown={(e) => handleClearAll(e)}
            tabIndex={0}>
            Clear all
          </P>
        </div>
      )}

      <STResults_FilterCheckboxContainer
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        showStateChildren={showStateChildren}
        shouldClear={shouldClear}
        setShouldClear={setShouldClear}
        categoriesToDisplay={["0-5", "5-10", "10-20", "20+"]}
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
        categoriesToDisplay={["1", "2", "3", "4", "5"]}
        title="Rating"
      />
      <STResults_FilterCheckboxContainer
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        showStateChildren={showStateChildren}
        shouldClear={shouldClear}
        setShouldClear={setShouldClear}
        categoriesToDisplay={["Autism (ASD)", "ADHD", "Down Syndrome", "Cerebral Palsy", "Fragile X", "Other"]}
        title="Diagnoses"
      />
      <STResults_FilterCheckboxContainer
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        showStateChildren={showStateChildren}
        shouldClear={shouldClear}
        setShouldClear={setShouldClear}
        categoriesToDisplay={[
          "0-18 months",
          "2-3 years",
          "4-5 years",
          "6-11 years",
          "12-21 years",
          "22-40 years",
          "41-64 years",
          "65+ years"
        ]}
        title="Ages Served"
        toUpdate="agesServed"
      />
      <STResults_FilterCheckboxContainer
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        showStateChildren={showStateChildren}
        shouldClear={shouldClear}
        setShouldClear={setShouldClear}
        categoriesToDisplay={["English", "Spanish", "Chinese", "Tagalog", "French"]}
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
        categoriesToDisplay={["1+ Years", "3+ Years", "5+ Years", "7+ Years", "10+ Years"]}
        title="Years of Practice"
        toUpdate="yearsOfPractice"
      />

      <STResults_FilterCheckboxContainer
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        showStateChildren={showStateChildren}
        shouldClear={shouldClear}
        setShouldClear={setShouldClear}
        categoriesToDisplay={["Clinic", "Home", "School", "Community"]}
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
        categoriesToDisplay={["Medicaid", "Insurance", "Private Pay", "DOE approved"]}
        title="Accepts"
      />
      <STResults_FilterCheckboxContainer
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        showStateChildren={showStateChildren}
        shouldClear={shouldClear}
        setShouldClear={setShouldClear}
        categoriesToDisplay={["Virtual", "In-Person"]}
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
        categoriesToDisplay={["Individual", "Group"]}
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
        categoriesToDisplay={["Near Metro", "Near Bus", "Meter Parking", "Street Parking", "Parking Lot"]}
        title="Transportation"
      />
      <STResults_FilterCheckboxContainer
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        showStateChildren={showStateChildren}
        shouldClear={shouldClear}
        setShouldClear={setShouldClear}
        categoriesToDisplay={["Independent", "Agency-based", "Traveling"]}
        title="Provider Type"
        toUpdate="providerType"
      />
    </STResults_FiltersContainerWrapper>
  )
}
