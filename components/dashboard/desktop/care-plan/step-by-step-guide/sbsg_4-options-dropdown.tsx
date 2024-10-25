import SVGArrowClockWise from "@/assets/icons/arrow-clock-wise.svg"
import SVGMenuDropdown from "@/assets/icons/menu-dropdown.svg"
import SVGTrash from "@/assets/icons/trash.svg"
import SVGUserCircle from "@/assets/icons/user-circle.svg"
import { useOutsideHide } from "@/utils/useOutsideHide"
import { useEffect, useRef, useState } from "react"
import { SBSG_4OptionsDropdownWrapper } from "./styles/SBSG_4OptionsDropdownWrapper"

export const SBSG_4OptionsDropdown = () => {
  const [shouldShow, setShouldShow] = useState(false)

  const handleShouldShow = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShouldShow(true)
    }
  }

  useEffect(() => {
    console.log("shouldShow:", shouldShow)
  }, [shouldShow])

  const theDivContainer = useRef<HTMLDivElement>(null)
  const theDropdownSelect = useRef<HTMLDivElement>(null)

  useOutsideHide([theDivContainer, theDropdownSelect], setShouldShow)

  /* 
  !FH0
  - Finish the logic and styles of the dropdown
  - Create the "Search the directory instead" logic
  - Create the "show the 3° page of ORG when the user click or press keydown enter on some card" logic
  */

  return (
    <SBSG_4OptionsDropdownWrapper
      shouldShow={shouldShow}
      tabIndex={0}
      onClick={handleShouldShow}
      onKeyDown={handleShouldShow}
      ref={theDivContainer}
    >
      <SVGMenuDropdown />

      <div ref={theDropdownSelect}>
        <p tabIndex={0}>
          <SVGUserCircle /> View profile
        </p>
        <p tabIndex={0}>
          <SVGTrash />
          Remove suggestion
        </p>
        <p tabIndex={0}>
          <SVGArrowClockWise />
          Regenerate results
        </p>
      </div>
    </SBSG_4OptionsDropdownWrapper>
  )
}
