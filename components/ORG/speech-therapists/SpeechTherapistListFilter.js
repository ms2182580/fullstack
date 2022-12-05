import { useReducer, useState } from "react"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../ui/heading_body_text/HeaderFonts.js"
import FilterCheckboxComponent from "./FilterCheckboxComponent.js"
import SpeechTherapistListFilterWrapper from "./styles/SpeechTherapistListFilterWrapper.js"

const reducer = (state, action) => {
  const setFilter = action.payload[0]
  const toUpdate = action.payload[2]

  if (action.payload[1].target.checked) {
    setFilter((prevStatus) => {
      return {
        ...prevStatus,
        [toUpdate]: [...prevStatus[toUpdate], action.type.x]
      }
    })
  } else {
    setFilter((prevStatus) => {
      let shouldStay = prevStatus[toUpdate].filter((x) => x !== action.type.x)

      return {
        ...prevStatus,
        [toUpdate]: [...shouldStay]
      }
    })
  }
  return state
}

const SpeechTherapistListFilter = ({ setFilterData, filterData }) => {
  const [state, dispatch] = useReducer(reducer, filterData)
  const [clearAll, setClearAll] = useState(false)
  
  const handleClearAll = () => {
    setClearAll(true)
  }

  return (
    <SpeechTherapistListFilterWrapper id="topOfSTL">
      <div>
        <H4>Filter by</H4>
        <P onClick={handleClearAll}>Clear all</P>
      </div>

      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        categoriesToDisplay={[
          "0-5 miles",
          "5-10 miles",
          "10-20 miles",
          "20+ miles"
        ]}
        title="Distance"
      />

      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        categoriesToDisplay={["1", "2", "3", "4", "5"]}
        title="Rating"
      />
      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        categoriesToDisplay={[
          "Autism (ASD)",
          "ADHD",
          "Down Syndrome",
          "Cerebral Palsy",
          "Fragile X",
          "Other"
        ]}
        title="Diagnoses"
      />

      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
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

      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        categoriesToDisplay={[
          "English",
          "Spanish",
          "Chinese",
          "Tagalog",
          "French"
        ]}
        title="Languages"
      />

      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        categoriesToDisplay={[
          "1+ Years",
          "3+ Years",
          "5+ Years",
          "7+ Years",
          "10+ Years"
        ]}
        title="Years of Practice"
        toUpdate="yearsOfPractice"
      />

      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        categoriesToDisplay={["Clinic", "Home", "School", "Community"]}
        title="Service Setting"
        toUpdate="serviceSetting"
      />

      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        categoriesToDisplay={[
          "Medicaid",
          "Insurance",
          "Private Pay",
          "DOE approved"
        ]}
        title="Accepts"
      />

      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        categoriesToDisplay={["Virtual", "In-Person"]}
        title="Meeting Format"
        toUpdate="meetingFormat"
      />

      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        categoriesToDisplay={["Individual", "Group"]}
        title="Session Type"
        toUpdate="sessionType"
      />

      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        categoriesToDisplay={[
          "Near Metro",
          "Near Bus",
          "Meter Parking",
          "Street Parking",
          "Parking Lot"
        ]}
        title="Transportation"
      />

      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        clearAll={clearAll}
        setClearAll={setClearAll}
        categoriesToDisplay={["Independent", "Agency-based", "Traveling"]}
        title="Provider Type"
        toUpdate="providerType"
      />
    </SpeechTherapistListFilterWrapper>
  )
}

export default SpeechTherapistListFilter
