import { useRef, useState } from "react"
import { NavBar_D_HamburgerSvg } from "../../../assets/Icons/index.js"
import { useOutsideHide } from "../../../utils/useOutsideHide.js"
import { NavBar_D_HamburgerComponentDropdown } from "./NavBar_D_HamburgerComponentDropdown.js"
import { NavBar_D_HamburgerComponentWrapper } from "./styles/NavBar_D_HamburgerComponentWrapper.js"

export const NavBar_D_HamburgerComponent = () => {
  const [showDropdown, setShowDropdown] = useState(true)
  const refDropdown = useRef()

  useOutsideHide(refDropdown, setShowDropdown)

  const handleShowDropdown = () => {
    setShowDropdown((prevState) => !prevState)
  }

  return (
    <>
      <NavBar_D_HamburgerComponentWrapper
        onClick={handleShowDropdown}
        showDropdown={showDropdown}>
        <NavBar_D_HamburgerSvg />
      </NavBar_D_HamburgerComponentWrapper>

      {showDropdown && (
        <>
          <NavBar_D_HamburgerComponentDropdown theRef={refDropdown} />
        </>
      )}
    </>
  )
}
