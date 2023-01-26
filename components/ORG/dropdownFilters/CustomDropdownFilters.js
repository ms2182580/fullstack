import Image from "next/image.js"
import { Fragment, useState } from "react"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { CustomC, SingleDropdownWrapper } from "./styles/Singledropdown"
import ArrowUp from "../../../assets/Icons/ArrowUp.png"
import ArrowDown from "../../../assets/Icons/ArrowDown.png"
import { ORG_Sortyby } from "../../../utils/ORG_Sortyby"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_FetchWithFilters } from "../../../context/ORG_CtxFetchWithFilters_Provider"

export const CustomDropdownFilters = ({
  icon = "no icon found",
  title = "no title",
  suggestions = [],
  noIcon = false
}) => {
  const {
    userFetched,
    setData,
    filtersST,
    setFilters,
    actualSort,
    setActualSort,
  } = useORG_Ctx_FetchNoFilters()
  const [showDropdown, setShowDropdown] = useState(false)

  
  const {
    dataF,
    setDataF,
    filtersF,
    setFiltersF,
  } = useORG_Ctx_FetchWithFilters()

  const handleDropdownClick = (e) => {
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
    let elementSelected = e.target.textContent
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

    const { newOrderData: newOrderDataF, newOrderFilters: newOrderFiltersF } =
      ORG_Sortyby(
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
  Make it work with onBlur to close when the user clock outside. 
  */

  return (
    <>
      <SingleDropdownWrapper noIcon={noIcon} className="SingleDropdownWrapper">
        <span
          onClick={handleDropdownClick}
          onKeyDown={(e) => {
            handleDropdownKey(e)
          }}
          tabIndex={0}>
          <Caption bold>{title}</Caption>
          <span>
            {showDropdown ? (
              <Image src={ArrowUp} alt="" />
            ) : (
              <Image src={ArrowDown} alt="" />
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
