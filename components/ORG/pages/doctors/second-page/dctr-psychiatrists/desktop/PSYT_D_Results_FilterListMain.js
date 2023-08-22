import { DATA_CR_D_Filters } from "../../../../../../../utils/ORG/paa/cr/DATA_CR_D_Filters.js"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../../../../../utils/ORG_FiltersCategories.js"
import { ORG_Filters_D_Checkbox } from "../../../../../filters/desktop/ORG_Filters_D_Checkbox.js"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../../filters/desktop/ORG_Filters_D_Checkbox_Isolated.js"
import { ORG_Filters_D_More } from "../../../../../filters/desktop/ORG_Filters_D_More.js"
import { ORG_Filters_D_Range_Isolated } from "../../../../../filters/desktop/ORG_Filters_D_Range_Isolated.js"
import { PSYT_D_Results_FilterListMainWrapper } from "./styles/PSYT_D_Results_FilterListMainWrapper.js"

// const reducer = (state, action) => {
//   const setFilterData = action.payload[0]
//   const setTempState = action.payload[1]

//   if (action.type === "clearAll") {
//     const setFilterAreApply = action.payload[2]
//     const setFiltersAppliedNewFilters = action.payload[3]
//     const setDefaultWord = action.payload[4]
//     const defaultWord = action.payload[5]

//     setFilterData(ORG_INITIAL_VALUES_FILTERS_D)
//     setTempState(ORG_INITIAL_VALUES_FILTERS_D)
//     setFilterAreApply(false)
//     setFiltersAppliedNewFilters(false)
//     setDefaultWord(defaultWord)
//     return ORG_INITIAL_VALUES_FILTERS_D
//   }

//   if (action.type === "addFilters") {
//     const tempState = action.payload[2]
//     const setMustShowFiltersDesktop = action.payload[3]
//     const setORGShowFullMapFilter = action.payload[4]
//     const setFilterAreApply = action.payload[5]

//     setFilterData(tempState)

//     const filterData = action.payload[6]
//     const setFiltersAppliedNewFilters = action.payload[7]

//     const newFilterDataIsEqual = checkTwoObjects(filterData, tempState)

//     const setDefaultWord = action.payload[8]
//     const defaultWord = action.payload[9]

//     if (newFilterDataIsEqual) {
//       setFiltersAppliedNewFilters(false)
//       setDefaultWord(defaultWord)
//     } else {
//       setFiltersAppliedNewFilters(true)
//     }

//     /*
//     !FH
//     Know how to stop the double render. Right now is patched with this setTimeout for user experience purpose.

//     Try to use useCallback hook to fic this
//      */

//     setTimeout(() => {
//       setMustShowFiltersDesktop(false)
//       setORGShowFullMapFilter(false)
//       setFilterAreApply(true)
//     }, 500)

//     return { ...state }
//   }
// }
// const nameToCloseTheFilters = "ShowFiltersDesktop"

const allMoreFilters = {
  range: [
    <ORG_Filters_D_Range_Isolated
      buttonName={DATA_CR_D_Filters.moreFilters.price.buttonName}
      min={DATA_CR_D_Filters.moreFilters.price.minimum}
      max={DATA_CR_D_Filters.moreFilters.price.maximum}
      whichMeasure={DATA_CR_D_Filters.moreFilters.price.whichMeasure}
      addCharacter={DATA_CR_D_Filters.moreFilters.price.addCharacter}
      minSpecialCharacter={DATA_CR_D_Filters.moreFilters.price.minimumSpecialCharacter}
      addCharacterMinSpecialCharacter={false}
    />,

    <ORG_Filters_D_Range_Isolated
      buttonName={DATA_CR_D_Filters.moreFilters.distance.buttonName}
      min={DATA_CR_D_Filters.moreFilters.distance.minimum}
      max={DATA_CR_D_Filters.moreFilters.distance.maximum}
      addCharacter={DATA_CR_D_Filters.moreFilters.distance.addCharacter}
      whichMeasure={DATA_CR_D_Filters.moreFilters.distance.whichMeasure}
    />,

    <ORG_Filters_D_Range_Isolated
      buttonName={DATA_CR_D_Filters.moreFilters.agesServed.buttonName}
      min={DATA_CR_D_Filters.moreFilters.agesServed.minimum}
      max={DATA_CR_D_Filters.moreFilters.agesServed.maximum}
      maxSpecialCharacter={DATA_CR_D_Filters.moreFilters.agesServed.maximumSpecialCharacter}
      addCharacter={DATA_CR_D_Filters.moreFilters.agesServed.addCharacter}
      whichMeasure={DATA_CR_D_Filters.moreFilters.agesServed.whichMeasure}
    />,
  ],
  checkbox: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CR_D_Filters.areasOfLaw.buttonName}
      categoriesToDisplay={DATA_CR_D_Filters.areasOfLaw.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CR_D_Filters.jurisdiction.titleOnModal}
      categoriesToDisplay={DATA_CR_D_Filters.jurisdiction.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CR_D_Filters.professionalExperience.buttonName}
      categoriesToDisplay={DATA_CR_D_Filters.professionalExperience.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CR_D_Filters.languajesSpoken.buttonName}
      categoriesToDisplay={DATA_CR_D_Filters.languajesSpoken.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.diagnosis.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.diagnosis}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CR_D_Filters.moreFilters.operationHours.buttonName}
      categoriesToDisplay={DATA_CR_D_Filters.moreFilters.operationHours.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CR_D_Filters.moreFilters.payment.buttonName}
      categoriesToDisplay={DATA_CR_D_Filters.moreFilters.payment.categoriesToDisplay}
    />,
  ],
}

export const PSYT_D_Results_FilterListMain = ({ refUserViewShowFullMapFilter }) => {
  // const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeftDesktop()

  /*
  !FH
  The problem is the "setFiltersLeftContext" that is making re renders to the context provider "ORG_CtxFiltersLeft_Provider"
  */

  // const [state, dispatch] = useReducer(reducer, filterData)
  // const [tempState, setTempState] = useState(filterData)
  // const [clearAll, setClearAll] = useState(false)
  // const [show, setShow] = useState(false)
  // const [shouldClear, setShouldClear] = useState(false)

  // const [mustShowFiltersDesktop, setMustShowFiltersDesktop] = useState(false)
  // const { ORGShowFullMapFilter, setORGShowFullMapFilter, ORGshowFullMapButton, setORGShowFullMapButton } =
  //   useORG_CtxShowFiltersDesktop()

  // const { setFilterAreApply, setFiltersAppliedNewFilters, setDefaultWord, defaultWord } =
  //   useORG_Ctx_FiltersApplyDesktop()

  // const { modalShowedCtx, setModalShowedCtx } = useCtx_ShowModal()

  // const handleShowFiltersDesktop = () => {
  //   setMustShowFiltersDesktop((prevState) => !prevState)
  //   setORGShowFullMapFilter((prevState) => !prevState)
  //   setModalShowedCtx((prevState) => !prevState)

  //   if (ORGshowFullMapButton) {
  //     setORGShowFullMapButton(false)
  //   }

  //   if (ORGShowFullMapFilter === false) {
  //     const targetY = refUserViewShowFullMapFilter.current.getBoundingClientRect().top + window.pageYOffset - 10

  //     window.scrollTo({ top: targetY })
  //   }
  // }

  // const handleClearAll = (e) => {
  //   if (e.type === "click" || e.key === "Enter" || e === "from useEffect") {
  //     setShouldClear((prevState) => !prevState)
  //     if (show) {
  //       setClearAll(true)
  //     }

  //     dispatch({
  //       type: "clearAll",
  //       payload: [
  //         setFilterData,
  //         setTempState,
  //         setFilterAreApply,
  //         setFiltersAppliedNewFilters,
  //         setDefaultWord,
  //         defaultWord
  //       ]
  //     })
  //   }
  // }

  // useEffect(() => {
  //   handleClearAll("from useEffect")
  // }, [])

  // const { shouldFetchDesktopFilters, setShouldFetchDesktopFilters } = useORG_Ctx_FetchWithFiltersDesktop()

  // useEffect(() => {
  //   /*
  //   !FH
  //   The idea is fetch only if the user click on "addFilters"
  //   */
  //   setShouldFetchDesktopFilters(true)
  // }, [])

  // const handleAddFilters = (e) => {
  //   if (e.type === "click" || e.key === "Enter") {
  //     return dispatch({
  //       type: "addFilters",
  //       payload: [
  //         setFilterData,
  //         setTempState,
  //         tempState,
  //         setMustShowFiltersDesktop,
  //         setORGShowFullMapFilter,
  //         setFilterAreApply,
  //         filterData,
  //         setFiltersAppliedNewFilters,
  //         setDefaultWord,
  //         defaultWord
  //       ]
  //     })
  //   }
  // }

  // const shouldTab = useShouldTab()

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (mustShowFiltersDesktop && !event.target.closest(`.${nameToCloseTheFilters}`)) {
  //       setMustShowFiltersDesktop(false)
  //       setORGShowFullMapFilter(false)
  //       setModalShowedCtx(false)

  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }
  // }, [mustShowFiltersDesktop])

  return (
    <PSYT_D_Results_FilterListMainWrapper>
      <ORG_Filters_D_Checkbox
        buttonName={DATA_CR_D_Filters.areasOfLaw.buttonName}
        categoriesToDisplay={DATA_CR_D_Filters.areasOfLaw.categoriesToDisplay}
      />

      <ORG_Filters_D_Checkbox
        buttonName={DATA_CR_D_Filters.jurisdiction.buttonName}
        titleOnModal={DATA_CR_D_Filters.jurisdiction.titleOnModal}
        categoriesToDisplay={DATA_CR_D_Filters.jurisdiction.categoriesToDisplay}
      />

      <ORG_Filters_D_Checkbox
        buttonName={DATA_CR_D_Filters.professionalExperience.buttonName}
        categoriesToDisplay={DATA_CR_D_Filters.professionalExperience.categoriesToDisplay}
      />

      <ORG_Filters_D_Checkbox
        buttonName={DATA_CR_D_Filters.languajesSpoken.buttonName}
        categoriesToDisplay={DATA_CR_D_Filters.languajesSpoken.categoriesToDisplay}
      />

      <ORG_Filters_D_More
        allCheckboxes={allMoreFilters.checkbox}
        allRanges={allMoreFilters.range}
      />
    </PSYT_D_Results_FilterListMainWrapper>
  )
}
