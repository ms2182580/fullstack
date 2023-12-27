import { Navbar_AccessibilitySvg } from "@/assets/icons/index.js"
import { useActiveElement } from "@/utils/useActiveElement.js"
import { useCloseNotActiveElementAnymore } from "@/utils/useCloseNotActiveElementAnymore.js"
import { useOutsideHide } from "@/utils/useOutsideHide.js"
import { useEffect, useRef, useState } from "react"
import { NavBar_D_AccessibilityDropdown } from "./NavBar_D_AccessibilityDropdown.js"
import { NavBar_D_AccessibilityWrapper } from "./styles/NavBar_D_AccessibilityWrapper.js"

export const NavBar_D_Accessibility = () => {
  const [showDropdownAccessibility, setShowDropdownAccessibility] = useState(false)

  const refDropdownAccessibility = useRef()

  useOutsideHide(refDropdownAccessibility, setShowDropdownAccessibility)

  let handleToggleShowDropdownAccessibility = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShowDropdownAccessibility((prevState) => !prevState)
    }
  }

  useEffect(() => {
    if (showDropdownAccessibility) {
      let handleCloseDropdownInfo = (e) => {
        if (e.key === "Escape") {
          setShowDropdownAccessibility(false)
        }
      }

      window.addEventListener("keydown", handleCloseDropdownInfo)

      return () => {
        window.removeEventListener("keydown", handleCloseDropdownInfo)
      }
    }
  }, [])

  const classNameToFocusLogic = "Accessibility"
  const { focusedElement } = useActiveElement()
  useCloseNotActiveElementAnymore(focusedElement, setShowDropdownAccessibility, ["span", "ul", "li"], classNameToFocusLogic)

  return (
    <NavBar_D_AccessibilityWrapper>
      <span
        onClick={handleToggleShowDropdownAccessibility}
        onKeyDown={handleToggleShowDropdownAccessibility}
        tabIndex={0}
        className={classNameToFocusLogic}>
        <Navbar_AccessibilitySvg />
      </span>

      {showDropdownAccessibility && (
        <>
          <NavBar_D_AccessibilityDropdown
            theRef={refDropdownAccessibility}
            showDropdownAccessibility={showDropdownAccessibility}
          />
        </>
      )}
    </NavBar_D_AccessibilityWrapper>
  )
}
