import { useRef, useState } from "react"
import { useOutsideHideHover } from "../../../utils/useOutsideHideHover.js"
import { H4 } from "../../ui/heading_body_text/HeaderFonts.js"
import { NavBar_D_HamburgerComponentDropdown_CC } from "./NavBar_D_HamburgerComponentDropdown_CC.js"
import { NavBar_D_HamburgerComponentDropdownWrapper } from "./styles/NavBar_D_HamburgerComponentDropdownWrapper.js"

/* 
!FH0
Finish this styles
*/

export const NavBar_D_HamburgerComponentDropdown = ({ theRef }) => {
  const [showNestedCC, setShowNestedCC] = useState(false)

  const theRefCC = useRef()

  useOutsideHideHover(theRefCC, setShowNestedCC)

  return (
    <NavBar_D_HamburgerComponentDropdownWrapper ref={theRef}>
      <ul>
        <li ref={theRefCC}>
          <H4 medium>Community Classes</H4>
          {showNestedCC && <NavBar_D_HamburgerComponentDropdown_CC />}
        </li>

        <li>
          <H4 medium>Camps</H4>
        </li>
        <li>
          <H4 medium>Doctors</H4>
        </li>
        <li>
          <H4 medium>Therapeutic Services</H4>
        </li>
        <li>
          <H4 medium>Mental Health Services</H4>
        </li>
        <li>
          <H4 medium>Public & Private Agencies</H4>
        </li>
        <li>
          <H4 medium>Residential Programs</H4>
        </li>
        <li>
          <H4 medium>Technology for IDD’s</H4>
        </li>
        <li>
          <H4 medium>Special Education Schools</H4>
        </li>
        <li>
          <H4 medium>Attorneys & Advocates</H4>
        </li>
      </ul>
    </NavBar_D_HamburgerComponentDropdownWrapper>
  )
}
