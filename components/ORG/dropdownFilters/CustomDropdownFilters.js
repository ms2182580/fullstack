import { Fragment, useState } from "react"
import { ArrowDownSvg, ArrowUpSvg } from "../../../assets/Icons"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_FetchWithFilters } from "../../../context/ORG_CtxFetchWithFilters_Provider"
import { ORG_Sortyby } from "../../../utils/ORG_Sortyby"
import { useShouldTab } from "../../../utils/ORG_shouldTab"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { CustomC, SingleDropdownWrapper } from "./styles/Singledropdown"

export const CustomDropdownFilters = ({ suggestions = [], noIcon = false, defaultWord }) => {
  const { userFetched, setData, filtersST, setFilters, actualSort, setActualSort } = useORG_Ctx_FetchNoFilters()
  const [showDropdown, setShowDropdown] = useState(false)

  const [whichTitle, setWhichTitle] = useState(defaultWord)

  const { dataF, setDataF, filtersF, setFiltersF } = useORG_Ctx_FetchWithFilters()

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

    const { newOrderData, newOrderFilters } = ORG_Sortyby(
      elementSelected,
      filtersST,
      userFetched,
      "CustomDropdownFilters. Fetch no filters"
    )

    setData((prevState) => ({
      ...prevState,
      allData: newOrderData
    }))
    setFilters(newOrderFilters)

    const { newOrderData: newOrderDataF, newOrderFilters: newOrderFiltersF } = ORG_Sortyby(
      elementSelected,
      filtersF,
      dataF,
      "CustomDropdownFilters. Fetch with filters"
    )

    setDataF((prevState) => ({
      ...prevState,
      allData: newOrderDataF
    }))
    setFiltersF(newOrderFiltersF)

    handleDropdownClick()
  }

  /* 
  !FH
  Make it work with onBlur to close when the user click outside. 
  */
 
  const shouldTab = useShouldTab()
  

  return (
    <>
      <SingleDropdownWrapper
        noIcon={noIcon}
        className="SingleDropdownWrapper">
        <span
          onClick={handleDropdownClick}
          onKeyDown={(e) => {
            handleDropdownKey(e)
          }}
          tabIndex={shouldTab}>
          <P primary_cta semibold>{whichTitle}</P>
          <span>
            {showDropdown ? (
              <ArrowDownSvg/>
            ) : (
              <ArrowUpSvg/>
            )}
          </span>
        </span>
        <div className="dropdownSuggestions">
          {showDropdown && suggestions.length !== 0 && (
            <>
              <div></div>
              {suggestionsValidated.map((x) => {
                let highlight = x === actualSort

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
