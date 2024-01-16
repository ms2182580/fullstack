import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { useRouter } from "next/router"
import { Fragment, useEffect, useRef, useState } from "react"
import { ArrowDownSvg, ArrowUpSvg } from "../../../assets/icons"
import { useORG_Ctx_FiltersApplyDesktop } from "../../../context/ORG_Ctx_FiltersApplyDesktop"
import { useShouldTab } from "../../../utils/ORG_shouldTab"
import { useOutsideHide } from "../../../utils/useOutsideHide"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { CustomC, SingleDropdownWrapper } from "./styles/Singledropdown"

type CustomDropdownFilters_Props = {
  suggestions: string[] | []
}

export const CustomDropdownFilters = ({
  suggestions = [],
}: CustomDropdownFilters_Props) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const {
    filterAreApply,
    filtersAppliedNewFilters,
    setFiltersAppliedNewFilters,
    defaultWord,
  }: any = useORG_Ctx_FiltersApplyDesktop()

  const [whichTitle, setWhichTitle] = useState(defaultWord)

  const handleDropdownClick = () => {
    setShowDropdown((prevstate) => !prevstate)
  }

  const handleDropdownKey = (e) => {
    // console.log('e:', e.key)
    // if (e.key === "Enter") {
    //   setShowDropdown((prevstate) => !prevstate)
    // }
  }
  const suggestionsValidated =
    suggestions.length === 0 ? "Coming soon" : suggestions

  const getSelection = (e) => {
    // let elementSelected = e.target.textContent
    // setWhichTitle(elementSelected)
    // setActualSort(elementSelected)

    // const { newOrderData, newOrderFilters } = ORG_SortybyFunction_D(elementSelected, filtersST, userFetched, "CustomDropdownFilters. Fetch no filters")

    // setData((prevState) => ({
    //   ...prevState,
    //   allData: newOrderData,
    // }))
    // setFilters(newOrderFilters)

    // const { newOrderData: newOrderDataF, newOrderFilters: newOrderFiltersF } = ORG_SortybyFunction_D(elementSelected, filtersF, dataF, "CustomDropdownFilters. Fetch with filters")

    // setDataF((prevState) => ({
    //   ...prevState,
    //   allData: newOrderDataF,
    // }))
    // setFiltersF(newOrderFiltersF)

    handleDropdownClick()
  }

  /* 
  !FH
  Make it work with onBlur to close when the user click outside. 
  */

  const shouldTab = useShouldTab()

  useEffect(() => {
    setWhichTitle(defaultWord)

    if (filterAreApply === false) {
      setWhichTitle(defaultWord)
    }
  }, [filtersAppliedNewFilters, filterAreApply])

  useEffect(() => {
    setFiltersAppliedNewFilters(false)
  }, [whichTitle])

  const refDropdown = useRef(null)
  useOutsideHide(refDropdown, setShowDropdown)

  const { query } = useRouter()

  return (
    <>
      <SingleDropdownWrapper
        className="SingleDropdownWrapper"
        ref={refDropdown}
        isBackend={Boolean(query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND])}
      >
        <span
          onClick={handleDropdownClick}
          onKeyDown={(e) => {
            handleDropdownKey(e)
          }}
          tabIndex={shouldTab}
        >
          <P>
            {/* primary_cta semibold */}
            {whichTitle}
          </P>
          <span>{showDropdown ? <ArrowDownSvg /> : <ArrowUpSvg />}</span>
        </span>
        <div className="dropdownSuggestions">
          {showDropdown &&
            suggestions.length !== 0 &&
            suggestionsValidated !== "Coming soon" && (
              <>
                <div></div>
                {suggestionsValidated.map((x) => {
                  // let highlight = whichTitle === defaultWord ? false : x === actualSort

                  return (
                    <Fragment key={x}>
                      {
                        <Fragment>
                          <CustomC
                            // highlight={highlight}
                            onClick={(e) => {
                              getSelection(e)
                            }}
                          >
                            {x}
                          </CustomC>
                        </Fragment>
                      }
                    </Fragment>
                  )
                })}
                <div></div>
              </>
            )}
        </div>
      </SingleDropdownWrapper>
    </>
  )
}
