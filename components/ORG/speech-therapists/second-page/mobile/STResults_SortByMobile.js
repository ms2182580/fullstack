import { Fragment, useState } from "react"
import { DownArrowSvg, UpArrowSvg } from "../../../../../assets/Icons/index.js"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../../context/ORG_CtxFetchNoFiltersMobile_Provider"
import { useORG_Ctx_FetchWithFiltersMobile } from "../../../../../context/ORG_CtxFetchWithFiltersMobile_Provider"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../../context/ORG_Ctx_ShowFiltersMobile"
import { ORG_SortByOrder } from "../../../../../utils/ORG_SortByOrder"
import { ORG_Sortyby } from "../../../../../utils/ORG_Sortyby"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { CustomC } from "../../../dropdownFilters/styles/Singledropdown"
import { STResults_SortByMobileWrapper } from "./styles/STResults_SortByMobileWrapper.js"

export const STResults_SortByMobile = ({ title = "Sort By"}) => {
  
  const {mustShowFiltersMobile} = useORG_Ctx_ShowFiltersMobile()
  const { userFetched, setData, filtersST, setFilters, actualSort, setActualSort } = useORG_Ctx_FetchNoFiltersMobile()
  const [showDropdown, setShowDropdown] = useState(false)

  const { dataF, setDataF, filtersF, setFiltersF } = useORG_Ctx_FetchWithFiltersMobile()

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
  Make it work with onBlur to close when the user clock outside. 
  */

  return (
    <>
      {mustShowFiltersMobile === false ? (
        <STResults_SortByMobileWrapper
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
        </STResults_SortByMobileWrapper>
      ) : null}
    </>
  )
}
