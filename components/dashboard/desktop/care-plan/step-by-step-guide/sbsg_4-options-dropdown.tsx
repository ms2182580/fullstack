import { useRef, useState } from "react"
import { SBSG_4OptionsDropdownWrapper } from "./styles/SBSG_4OptionsDropdownWrapper"

import SVGMenuDropdown from "@/assets/icons/menu-dropdown.svg"
import { useOutsideHide } from "@/utils/useOutsideHide"

export const SBSG_4OptionsDropdown = () => {
  const [shouldShow, setShouldShow] = useState(false)

  const handleShouldShow = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShouldShow(true)
      console.log("🔰")
    }
  }

  const theDivContainer = useRef<HTMLDivElement>(null)
  const theDropdownSelect = useRef<HTMLDivElement>(null)

  const allRefs = [theDivContainer, theDropdownSelect]
  useOutsideHide([theDivContainer, theDropdownSelect], setShouldShow)

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
        <p>View Profile</p>
        <p>Remove Suggestion</p>
        <p>Regenerate Results</p>
      </div>
    </SBSG_4OptionsDropdownWrapper>
  )
}
