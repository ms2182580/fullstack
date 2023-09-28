import { useRef, useState } from "react"
import { NavBar_D_WriteAReviewSvg, Navbar_D_AccessibilityModeSvg } from "../../../assets/Icons/index.js"
import { useOutsideHideHover } from "../../../utils/useOutsideHideHover.js"
import { H4 } from "../../ui/heading_body_text/HeaderFonts.js"
import { NavBar_D_HamburgerComponentDropdown_CC } from "./NavBar_D_HamburgerComponentDropdown_CC.js"
import { NavBar_D_HamburgerComponentDropdownWrapper } from "./styles/NavBar_D_HamburgerComponentDropdownWrapper.js"

export const NavBar_D_HamburgerComponentDropdown = ({ theRef }) => {
  const [showNestedCC, setShowNestedCC] = useState(false)

  const theRefCC = useRef()

  useOutsideHideHover(theRefCC, setShowNestedCC)

  let handleShowHover = () => {
    setShowNestedCC(true)
  }

  let handleHideHover = () => {
    setShowNestedCC(false)
  }

  return (
    <NavBar_D_HamburgerComponentDropdownWrapper ref={theRef}>
      <ul>
        <li
          ref={theRefCC}
          tabIndex={0}
          onFocus={handleShowHover}>
          <H4 medium>Community Classes</H4>
          {showNestedCC && <NavBar_D_HamburgerComponentDropdown_CC />}
        </li>

        <li
          tabIndex={0}
          onFocus={handleHideHover}>
          <H4 medium>Camps</H4>
        </li>
        <li tabIndex={0}>
          <H4 medium>Doctors</H4>
        </li>
        <li tabIndex={0}>
          <H4 medium>Therapeutic Services</H4>
        </li>
        <li tabIndex={0}>
          <H4 medium>Mental Health Services</H4>
        </li>
        <li tabIndex={0}>
          <H4 medium>Public & Private Agencies</H4>
        </li>
        <li tabIndex={0}>
          <H4 medium>Residential Programs</H4>
        </li>
        <li tabIndex={0}>
          <H4 medium>Technology for IDD’s</H4>
        </li>
        <li tabIndex={0}>
          <H4 medium>Special Education Schools</H4>
        </li>
        <li tabIndex={0}>
          <H4 medium>Attorneys & Advocates</H4>
        </li>
      </ul>

      <ul>
        <li>
          <NavBar_D_WriteAReviewSvg /> <H4 tabIndex={0}>Write a review</H4>
        </li>
        <li>
          <Navbar_D_AccessibilityModeSvg /> <H4 tabIndex={0}>Accessibility Mode</H4>
        </li>
        <li>
          <H4 tabIndex={0}>FAQ</H4>
        </li>
      </ul>
    </NavBar_D_HamburgerComponentDropdownWrapper>
  )
}
