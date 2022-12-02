import Image from "next/image.js"
import { Fragment, useState } from "react"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { CustomP, SingleDropdownWrapper } from "./styles/Singledropdown"
import ArrowUp from "../../../assets/Icons/ArrowUp.png"
import ArrowDown from "../../../assets/Icons/ArrowDown.png"
import { ORG_Sortyby } from "../../../utils/ORG_Sortyby"
import { useORG_Ctx_PaginationAndHowMuchShow } from "../../../context/ORG_Ctx_PaginationAndHowMuchShow"

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
    setActualSort
  } = useORG_Ctx_PaginationAndHowMuchShow()
  const [showDropdown, setShowDropdown] = useState(false)

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
      "CustomDropdownFilters"
    )

    setData((prevState) => ({
      ...prevState,
      allData: newOrderData
    }))
    setFilters(newOrderFilters)

    handleDropdownClick()
  }

  return (
    <>
      <SingleDropdownWrapper noIcon={noIcon} className="SingleDropdownWrapper">
        <span
          onClick={handleDropdownClick}
          onKeyDown={(e) => {
            handleDropdownKey(e)
          }}
          tabIndex={0}
        >
          <P bold>{title}</P>
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
                        <CustomP
                          highlight={highlight}
                          onClick={(e) => {
                            getSelection(e)
                          }}
                        >
                          {x}
                        </CustomP>
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
