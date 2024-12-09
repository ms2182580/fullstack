/* 
!FH1
Change this component to work without javascript. Source: https://x.com/midudev/status/1817920581389406465

// HTML
<div class="dropdown">
  <input
    id="dropdown-toggle"
    type="checkbox"
    aria-hidden="true"
    hidden
  />
  
  <label
    for="dropdown-toggle"
    aria-haspopup="true"
    aria-expanded="false">
    Show menu
  </label>
  
  <nav class="dropdown-content" aria-label="submenu">
    <a href="#" role="menuitem">Item 1</a>
    <a href="#" role="menuitem">Item 2</a>
    <a href="#" role="menuitem">Item 3</a>
  </nav>
</div>

//CSS
.dropdown{
  position: relative;
}
  
  .dropdown-content{
    display:none;
    position: absolute;
  }
  
  .dropdown input[type="checkbox"]:checked ~ .dropdown-content{
    display: block;
  }
*/

import { ArrowDownSvg, ArrowUpSvg } from "@/assets/icons"
import { useORG_Ctx_FiltersApplyDesktop } from "@/context/ORG_Ctx_FiltersApplyDesktop"
import { useShouldTab } from "@/utils/ORG_shouldTab"
import { useOutsideHide } from "@/utils/useOutsideHide"
import { Fragment, useEffect, useRef, useState } from "react"
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

  return (
    <SingleDropdownWrapper ref={refDropdown} showDropdown={showDropdown}>
      <div
        onClick={getSelection}
        onKeyDown={handleDropdownKey}
        tabIndex={shouldTab}
      >
        <p>{whichTitle}</p>
        <span>{showDropdown ? <ArrowDownSvg /> : <ArrowUpSvg />}</span>

        <>
          {showDropdown &&
            suggestions.length !== 0 &&
            suggestionsValidated !== "Coming soon" && (
              <div>
                <div></div>
                {suggestionsValidated.map((x) => {
                  return (
                    <Fragment key={x}>
                      {
                        <Fragment>
                          <CustomC
                            // highlight={highlight}
                            onClick={(e) => {
                              getSelection(e)
                              handleDropdownClick() /* //!FH2 This is a bug because I need to use «handleDropdownClick()» here and inside «getSelection(e)»  */
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
              </div>
            )}
        </>

        {/* <div>
          {showDropdown &&
            suggestions.length !== 0 &&
            suggestionsValidated !== "Coming soon" && (
              <>
                <div></div>
                {suggestionsValidated.map((x) => {
                  return (
                    <Fragment key={x}>
                      {
                        <Fragment>
                          <CustomC
                            // highlight={highlight}
                            onClick={getSelection}
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
        </div> */}
      </div>
      {/* <div>
        {showDropdown &&
          suggestions.length !== 0 &&
          suggestionsValidated !== "Coming soon" && (
            <>
              <div></div>
              {suggestionsValidated.map((x) => {
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
      </div> */}
    </SingleDropdownWrapper>
  )
}
