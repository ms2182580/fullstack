import { DATA_MH_D_Filters } from "../../../../../../../utils/ORG/pmhss/mh/DATA_MH_D_Filters.js"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../../../../../utils/ORG_FiltersCategories.js"
import { ORG_Filters_D_Checkbox } from "../../../../../filters/desktop/ORG_Filters_D_Checkbox.js"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../../filters/desktop/ORG_Filters_D_Checkbox_Isolated.js"
import { ORG_Filters_D_More } from "../../../../../filters/desktop/ORG_Filters_D_More.js"
import { ORG_Filters_D_Range } from "../../../../../filters/desktop/ORG_Filters_D_Range.js"
import { MH_D_Results_FilterListMainWrapper } from "./styles/MH_D_Results_FilterListMainWrapper.js"

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
      titleOnModal={ORG_FILTERS_KEYS_D.insurance.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_MH_D_Filters.moreFilters.outOfPocketFees.buttonName}
      categoriesToDisplay={DATA_MH_D_Filters.moreFilters.outOfPocketFees.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.inMoreFilters}
      categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.insurance.titleToShowCard}
      categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.serviceSetting}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_MH_D_Filters.moreFilters.providerType.buttonName}
      categoriesToDisplay={DATA_MH_D_Filters.moreFilters.providerType.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.wheelChair.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.wheelChair}
    />,








  ],
}

export const MH_D_Results_FilterListMain = ({ refUserViewShowFullMapFilter }) => {
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
    <MH_D_Results_FilterListMainWrapper>
      <ORG_Filters_D_Checkbox
        buttonName={ORG_FILTERS_KEYS_D.diagnosis.titleToShow}
        categoriesToDisplay={ORG_FILTERS_DATA_D.diagnosis}
      />

      <ORG_Filters_D_Range
        min={ORG_FILTERS_DATA_D.agesServedRange.minimum}
        max={ORG_FILTERS_DATA_D.agesServedRange.maximum}
        buttonName={ORG_FILTERS_KEYS_D.agesServedRange.buttonName}
        addCharacter={ORG_FILTERS_DATA_D.agesServedRange.addCharacter}
        whichMeasure={ORG_FILTERS_DATA_D.agesServedRange.whichMeasure}
      />

      <ORG_Filters_D_Range
        min={ORG_FILTERS_DATA_D.distanceRange.minimum}
        max={ORG_FILTERS_DATA_D.distanceRange.maximum}
        buttonName={ORG_FILTERS_KEYS_D.distanceRange.buttonName}
        addCharacter={ORG_FILTERS_DATA_D.distanceRange.addCharacter}
        whichMeasure={ORG_FILTERS_DATA_D.distanceRange.whichMeasure}
      />


      <ORG_Filters_D_Checkbox
        buttonName={DATA_MH_D_Filters.viewOnly.buttonName}
        categoriesToDisplay={DATA_MH_D_Filters.viewOnly.categoriesToDisplay}
      />


      <ORG_Filters_D_More allCheckboxes={allMoreFilters.checkbox} />
    </MH_D_Results_FilterListMainWrapper>
  )
}
