import { Fragment, useRef, useState } from "react"
import { DownArrowSvg, UpArrowSvg } from "../../../../../assets/Icons/index.js"
import { useORG_Ctx_FetchNoFiltersMobile } from "../../../../../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { useORG_Ctx_FetchWithFiltersMobile } from "../../../../../context/ORG_CtxFetchWithFiltersMobile_Provider.js"
import { ORG_Sortby_Mobile } from "../../../../../utils/ORG_SortByData.js"
import { ORG_SortybyFunction_M } from "../../../../../utils/ORG_SortybyFunction_M.js"
import { useOutsideHide } from "../../../../../utils/useOutsideHide.js"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { CustomC } from "../../../dropdownFilters/styles/Singledropdown.js"
import { ST_M_Results_SortByWrapper } from "./styles/ST_M_Results_SortByWrapper.js"

export const ST_M_Results_SortBy = ({ title = "Sort By" }) => {
  // const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()
  const { userFetched, setUserFetched, filtersST, setFiltersST, actualSort, setActualSort } = useORG_Ctx_FetchNoFiltersMobile()
  const [showDropdown, setShowDropdown] = useState(false)

  const { userFetched: dataF, setUserFetched: setDataF, filtersST: filtersF, setFiltersST: setFiltersF } = useORG_Ctx_FetchWithFiltersMobile()

  const refElement = useRef(null)

  useOutsideHide(refElement, setShowDropdown)

  const handleDropdownClick = () => {
    setShowDropdown((prevstate) => !prevstate)
  }

  const getSelection = (e) => {
    let elementSelected = e.target.textContent

    setActualSort(elementSelected)

    const { newOrderData, newOrderFilters } = ORG_SortybyFunction_M(
      elementSelected,
      filtersST,
      userFetched,
      "CustomDropdownFilters. Fetch no filters"
    )

    setUserFetched((prevState) => ({
      ...prevState,
      allData: newOrderData
    }))
    setFiltersST(newOrderFilters)

    const { newOrderData: newOrderDataF, newOrderFilters: newOrderFiltersF } = ORG_SortybyFunction_M(
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
      <ST_M_Results_SortByWrapper
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
        <div ref={refElement}>
          {showDropdown && ORG_Sortby_Mobile.data.length !== 0 && (
            <>
              <div></div>
              {ORG_Sortby_Mobile.data.map((x) => {
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
      </ST_M_Results_SortByWrapper>

      {/* {mustShowFiltersMobile === false ? (
        <ST_M_Results_SortByWrapper
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
            {showDropdown && ORG_Sortby_Mobile.data.length !== 0 && (
              <>
                <div></div>
                {ORG_Sortby_Mobile.map((x) => {
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
        </ST_M_Results_SortByWrapper>
      ) : null} */}
    </>
  )
}
