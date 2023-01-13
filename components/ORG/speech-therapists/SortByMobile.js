import { Fragment, useState } from "react"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_FetchWithFilters } from "../../../context/ORG_CtxFetchWithFilters_Provider"
import { ORG_SortByOrder } from "../../../utils/ORG_SortByOrder"
import { ORG_Sortyby } from "../../../utils/ORG_Sortyby"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts"
import { CustomC } from "../dropdownFilters/styles/Singledropdown"
import { SortByMobileWrapper } from "./styles/SortByMobileWraper.js"
import { DownArrowSvg, UpArrowSvg } from "../../../assets/Icons/index.js"

export const SortByMobile = ({ title = "Sort By" }) => {
  const { userFetched, setData, filtersST, setFilters, actualSort, setActualSort } = useORG_Ctx_FetchNoFilters()
  const [showDropdown, setShowDropdown] = useState(false)

  const { dataF, setDataF, filtersF, setFiltersF } = useORG_Ctx_FetchWithFilters()

  const handleDropdownClick = (e) => {
    setShowDropdown((prevstate) => !prevstate)
  }

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
  Think how to solve the problem of the variable width. Maybe use the flex property that, when something doesn't fit, go to the next row
  Fix the width that change with every change name
  */

  return (
    <>
      <SortByMobileWrapper
        showDropdown={showDropdown}
        onClick={handleDropdownClick}>
        <span
          // onKeyDown={(e) => {
          //   handleDropdownKey(e)
          // }}
          tabIndex={0}>
          <Caption
            bold
            primary_cta>
            {title}:{" "}
          </Caption>
          <Caption
            bold
            primary_cta>
            {" "}
            {actualSort}
          </Caption>
          <span>{showDropdown ? <UpArrowSvg /> : <DownArrowSvg />}</span>
        </span>
        <div className="dropdownSuggestions">
          {showDropdown && ORG_SortByOrder.length !== 0 && (
            <>
              <div></div>
              {ORG_SortByOrder.map((x) => {
                let highlight = x === actualSort

                return (
                  <Fragment key={x}>
                    {
                      <Fragment>
                        <CustomC
                          highlight={highlight}
                          onClick={(e) => {
                            getSelection(e)
                            handleDropdownClick()
                            // setShowDropdown(false)
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
      </SortByMobileWrapper>
    </>
  )
}
