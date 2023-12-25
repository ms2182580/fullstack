import { Fragment, useEffect, useRef, useState } from "react"
import { ArrowDownSvg, ArrowUpSvg } from "../../../assets/Icons"
import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { useORG_Ctx_FetchWithFiltersDesktop } from "../../../context/ORG_CtxFetchWithFiltersDesktop_Provider"
import { useORG_Ctx_FiltersApplyDesktop } from "../../../context/ORG_Ctx_FiltersApplyDesktop"
import { ORG_SortybyFunction_D } from "../../../utils/ORG_SortybyFunction_D"
import { useShouldTab } from "../../../utils/ORG_shouldTab"
import { useOutsideHide } from "../../../utils/useOutsideHide"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { CustomC, SingleDropdownWrapper } from "./styles/Singledropdown"

export const CustomDropdownFilters = ({ suggestions = [], noIcon = false }) => {
  const { userFetched, setUserFetched: setData, filtersST, setFiltersST: setFilters, actualSort, setActualSort, pagination } = useORG_Ctx_FetchNoFiltersDesktop()
  const [showDropdown, setShowDropdown] = useState(false)

  const { filterAreApply, filtersAppliedNewFilters, setFiltersAppliedNewFilters, defaultWord } = useORG_Ctx_FiltersApplyDesktop()

  const [whichTitle, setWhichTitle] = useState(defaultWord)

  const { userFetched: dataF, setUserFetched: setDataF, filtersST: filtersF, setFiltersST: setFiltersF } = useORG_Ctx_FetchWithFiltersDesktop()

  const handleDropdownClick = (e) => {
    setShowDropdown((prevstate) => !prevstate)
  }

  const handleDropdownKey = (e) => {
    // console.log('e:', e.key)
    // if (e.key === "Enter") {
    //   setShowDropdown((prevstate) => !prevstate)
    // }
  }
  const suggestionsValidated = suggestions.length === 0 ? "Coming soon" : suggestions

  const getSelection = (e) => {
    let elementSelected = e.target.textContent
    setWhichTitle(elementSelected)
    setActualSort(elementSelected)

    const { newOrderData, newOrderFilters } = ORG_SortybyFunction_D(elementSelected, filtersST, userFetched, "CustomDropdownFilters. Fetch no filters")

    setData((prevState) => ({
      ...prevState,
      allData: newOrderData,
    }))
    setFilters(newOrderFilters)

    const { newOrderData: newOrderDataF, newOrderFilters: newOrderFiltersF } = ORG_SortybyFunction_D(elementSelected, filtersF, dataF, "CustomDropdownFilters. Fetch with filters")

    setDataF((prevState) => ({
      ...prevState,
      allData: newOrderDataF,
    }))
    setFiltersF(newOrderFiltersF)

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
  }, [filtersAppliedNewFilters, filterAreApply, pagination])

  useEffect(() => {
    setFiltersAppliedNewFilters(false)
  }, [whichTitle])

  const refDropdown = useRef(null)
  useOutsideHide(refDropdown, setShowDropdown)

  return (
    <>
      <SingleDropdownWrapper
        className="SingleDropdownWrapper"
        ref={refDropdown}>
        <span
          onClick={handleDropdownClick}
          onKeyDown={(e) => {
            handleDropdownKey(e)
          }}
          tabIndex={shouldTab}>
          <P
            primary_cta
            semibold>
            {whichTitle}
          </P>
          <span>{showDropdown ? <ArrowDownSvg /> : <ArrowUpSvg />}</span>
        </span>
        <div className="dropdownSuggestions">
          {showDropdown && suggestions.length !== 0 && (
            <>
              <div></div>
              {suggestionsValidated.map((x) => {
                let highlight = whichTitle === defaultWord ? false : x === actualSort

                return (
                  <Fragment key={x}>
                    {
                      <Fragment>
                        <CustomC
                          highlight={highlight}
                          onClick={(e) => {
                            getSelection(e)
                          }}>
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
