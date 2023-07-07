import { useRef, useState } from "react"
import { LanguageIconSvg, ProfileIconSvg } from "../../../assets/Icons"
import { useOutsideHide } from '../../../utils/useOutsideHide'
import { NavBar_D_SignComponentDropdown } from '../desktop/NavBar_D_SignComponentDropdown'

import { NavBar_D_SignComponentWrapper } from "./styles/NavBar_D_SignComponentWrapper.js"

export const NavBar_D_SignComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const refDropdown = useRef()

  useOutsideHide(refDropdown, setShowDropdown)

  const handleShowDropdown = () => {
    setShowDropdown((prevState) => !prevState)
  }

  return (
    <>
      <NavBar_D_SignComponentWrapper onClick={handleShowDropdown}>
        <span>
          <LanguageIconSvg />
        </span>
        <span>
          <ProfileIconSvg />
        </span>
      </NavBar_D_SignComponentWrapper>

      {showDropdown && <NavBar_D_SignComponentDropdown theRef={refDropdown} />}
    </>
  )
}
