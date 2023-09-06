import { DATA_LT_D_Filters } from "../../../../../../../utils/ORG/prp/lt/DATA_LT_D_Filters.js"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../../../../../utils/ORG_FiltersCategories.js"
import { ORG_Filters_D_Checkbox } from "../../../../../filters/desktop/ORG_Filters_D_Checkbox.js"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../../filters/desktop/ORG_Filters_D_Checkbox_Isolated.js"
import { ORG_Filters_D_More } from "../../../../../filters/desktop/ORG_Filters_D_More.js"
import { ORG_Filters_D_Range } from "../../../../../filters/desktop/ORG_Filters_D_Range.js"
import { LT_D_Results_FilterListMainWrapper } from "./styles/LT_D_Results_FilterListMainWrapper.js"

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
  checkbox: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_LT_D_Filters.moreFilters.specialties.buttonName}
      categoriesToDisplay={DATA_LT_D_Filters.moreFilters.specialties.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,

  ],
}

export const LT_D_Results_FilterListMain = ({ refUserViewShowFullMapFilter }) => {
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
    <LT_D_Results_FilterListMainWrapper>
      <ORG_Filters_D_Range
        buttonName={DATA_LT_D_Filters.priceRange.buttonName}
        labelName={DATA_LT_D_Filters.priceRange.nameOnCard}
        min={DATA_LT_D_Filters.priceRange.minimum}
        max={DATA_LT_D_Filters.priceRange.maximum}
        whichMeasure={DATA_LT_D_Filters.priceRange.whichMeasure}
        addCharacter={DATA_LT_D_Filters.priceRange.addCharacter}
        maxSpecialCharacter={DATA_LT_D_Filters.priceRange.maxSpecialCharacter}
        addCharacterMaxSpecialCharacter={true}
      />

      <ORG_Filters_D_Range
        buttonName={ORG_FILTERS_KEYS_D.agesServedRange.buttonName}
        labelName={ORG_FILTERS_KEYS_D.agesServedRange.buttonOnMoreFilter}
        min={ORG_FILTERS_DATA_D.agesServedRange.minimum + 3}
        max={ORG_FILTERS_DATA_D.agesServedRange.maximum}
        whichMeasure={ORG_FILTERS_DATA_D.agesServedRange.whichMeasure}
        addCharacter={ORG_FILTERS_DATA_D.agesServedRange.addCharacter}
      />

      <ORG_Filters_D_Range
        min={ORG_FILTERS_DATA_D.distanceRange.minimum}
        max={ORG_FILTERS_DATA_D.distanceRange.maximum}
        buttonName={ORG_FILTERS_KEYS_D.distanceRange.buttonName}
        addCharacter={ORG_FILTERS_DATA_D.distanceRange.addCharacter}
        whichMeasure={ORG_FILTERS_DATA_D.distanceRange.whichMeasure}
      />

      <ORG_Filters_D_Range
        buttonName={DATA_LT_D_Filters.duration.buttonName}
        min={DATA_LT_D_Filters.duration.minimum}
        max={DATA_LT_D_Filters.duration.maximum}
        addCharacter={DATA_LT_D_Filters.duration.addCharacter}
        whichMeasure={DATA_LT_D_Filters.duration.whichMeasure}

        minSpecialCharacter={DATA_LT_D_Filters.duration.minSpecialCharacter}
        maxSpecialCharacter={DATA_LT_D_Filters.duration.maxSpecialCharacter}
        addCharacterMaxSpecialCharacter={DATA_LT_D_Filters.duration.addCharacterMaxSpecialCharacter}
        addCharacterMinSpecialCharacter={DATA_LT_D_Filters.duration.addCharacterMinSpecialCharacter}

      />


      <ORG_Filters_D_Checkbox
        buttonName={DATA_LT_D_Filters.houseType.buttonName}
        titleOnModal={DATA_LT_D_Filters.houseType.buttonOnCard}
        categoriesToDisplay={DATA_LT_D_Filters.houseType.categoriesToDisplay}
      />

      <ORG_Filters_D_Checkbox
        buttonName={DATA_LT_D_Filters.accommodations.buttonName}
        categoriesToDisplay={DATA_LT_D_Filters.accommodations.categoriesToDisplay}
      />

      <ORG_Filters_D_More
        allCheckboxes={allMoreFilters.checkbox}
      />
    </LT_D_Results_FilterListMainWrapper>
  )
}
