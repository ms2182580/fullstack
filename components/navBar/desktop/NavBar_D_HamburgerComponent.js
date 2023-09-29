import { useActiveElement } from "@/utils/useActiveElement.js"
import { useCloseNotActiveElementAnymore } from "@/utils/useCloseNotActiveElementAnymore.js"
import { useRef, useState } from "react"
import { NavBar_D_HamburgerSvg } from "../../../assets/Icons/index.js"
import { useOutsideHide } from "../../../utils/useOutsideHide.js"
import { NavBar_D_HamburgerComponentDropdown } from "./NavBar_D_HamburgerComponentDropdown.js"
import { NavBar_D_HamburgerComponentWrapper } from "./styles/NavBar_D_HamburgerComponentWrapper.js"

const classNameToFocusLogic = "HamburgerComponent"

export const NavBar_D_HamburgerComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const refDropdown = useRef()

  useOutsideHide(refDropdown, setShowDropdown)

  const handleShowDropdown = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShowDropdown((prevState) => !prevState)
    }
  }

  const { focusedElement } = useActiveElement()
  useCloseNotActiveElementAnymore(focusedElement, setShowDropdown, ["li", "h4"], classNameToFocusLogic)

  return (
    <>
      <NavBar_D_HamburgerComponentWrapper
        onKeyDown={handleShowDropdown}
        onClick={handleShowDropdown}
        tabIndex={0}
        showDropdown={showDropdown}
        className={classNameToFocusLogic}>
        <NavBar_D_HamburgerSvg />
      </NavBar_D_HamburgerComponentWrapper>

      {showDropdown && (
        <>
          <NavBar_D_HamburgerComponentDropdown
            theRef={refDropdown}
            setShowDropdown={setShowDropdown}
          />
        </>
      )}
    </>
  )
}
