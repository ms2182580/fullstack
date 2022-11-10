import { useReducer } from "react"
import FilterCheckboxComponent from "../../../components/ORG/speech-therapist-list/FilterCheckboxComponent"

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
      // console.log('prevStatus:', prevStatus)
      let shouldStay = prevStatus[toUpdate].filter((x) => x !== action.type.x)
      // console.log('shouldStay:', shouldStay)
      // console.log("toUpdate:", toUpdate)
      // console.log("shouldStay:", shouldStay)

      return {
        ...prevStatus,
        [toUpdate]: [...shouldStay]
      }
    })
    // return state
  }
  return state
}

// const initial = [{
//   distance:[],
//   rating:[]
// }]

const SpeechTherapistListFilter = ({ setFilterData, filterData }) => {
  // console.log('🍅filterData:', filterData)
  const [state, dispatch] = useReducer(reducer, filterData)
  // console.log("🍅state:", state)

  // console.log("🔰Render")

  const handleDistance = (e) => {
    if (e.target.checked) {
      setFilterData((prevStatus) => {
        return {
          ...prevStatus,
          distance: [...prevStatus.distance, e.target.name]
        }
      })
    } else {
      setFilterData((prevStatus) => {
        let shouldStay = prevStatus.distance.filter((x) => x !== e.target.name)

        return {
          ...prevStatus,
          distance: [...shouldStay]
        }
      })
    }
  }

  const handleDiagnoses = (e) => {
    if (e.target.checked) {
      setFilterData((prevStatus) => {
        return {
          ...prevStatus,
          diagnoses: [...prevStatus.diagnoses, e.target.name]
        }
      })
    } else {
      setFilterData((prevStatus) => {
        let shouldStay = prevStatus.diagnoses.filter((x) => x !== e.target.name)

        return {
          ...prevStatus,
          diagnoses: [...shouldStay]
        }
      })
    }
  }

  return (
    <div>
      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
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
        categoriesToDisplay={[
          "1 star",
          "2 star",
          "3 star",
          "4 star",
          "5 star",
        ]}
        title="Rating"
      />
      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
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
        categoriesToDisplay={[
          "0-18 months",
          "2-3 years",
          "4-5 years",
          "6-11 years",
          "12-21 years",
          "22-40 years",
          "41-64 years",
          "65+ years",
        ]}
        title="Ages Served"
        toUpdate="agesServed"
      />
      
      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        categoriesToDisplay={[
          "English",
          "Spanish",
          "Chinese",
          "Tagalog",
          "French",
        ]}
        title="Languages"
      />
      
      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        categoriesToDisplay={[
          "1+ Years",
          "3+ Years",
          "5+ Years",
          "7+ Years",
          "10+ Years",
        ]}
        title="Years of Practice"
        toUpdate="yearsOfPractice"
      />
      
      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        categoriesToDisplay={[
          "Clinic",
          "Home",
          "School",
          "Community",
        ]}
        title="Service Setting"
        toUpdate="serviceSetting"
      />
      
      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        categoriesToDisplay={[
          "Medicaid",
          "Insurance",
          "Private Pay",
          "DOE approved",
        ]}
        title="Accepts"
      />
      
      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        categoriesToDisplay={[
          "Virtual",
          "In-Person",
        ]}
        title="Meeting Format"
        toUpdate="meetingFormat"
      />
      
      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        categoriesToDisplay={[
          "Individual",
          "Group",
        ]}
        title="Session Type"
        toUpdate="sessionType"
      />
      
      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        categoriesToDisplay={[
          "Near Metro",
          "Near Bus",
          "Meter Parking",
          "Street Parking",
          "Parking Lot",
        ]}
        title="Transportation"
      />
      
      <FilterCheckboxComponent
        dispatch={dispatch}
        setFilterData={setFilterData}
        categoriesToDisplay={[
          "Independent",
          "Agency-based",
          "Traveling",
        ]}
        title="Provider Type"
        toUpdate="providerType"
      />
      
      

    </div>
  )
}

export default SpeechTherapistListFilter
