import { useRef, useState } from "react"
import { LanguageIconSvg, ProfileIconSvg } from "../../../assets/Icons"
import { useOutsideHide } from "../../../utils/useOutsideHide"
import { NavBar_D_LanguageComponentDropdown } from "./NavBar_D_LanguageComponentDropdown.js"
import { NavBar_D_SignComponentDropdown } from "./NavBar_D_SignComponentDropdown.js"
import { NavBar_D_SignComponentWrapper } from "./styles/NavBar_D_SignComponentWrapper.js"

export const NavBar_D_SignComponent = () => {
  const [showDropdownProfile, setShowDropdownProfile] = useState(false)
  const refDropdownProfile = useRef()

  useOutsideHide(refDropdownProfile, setShowDropdownProfile)

  const handleShowDropdownProfile = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShowDropdownLanguage(false)
      setShowDropdownProfile((prevState) => !prevState)
    }
  }

  const [showDropdownLanguage, setShowDropdownLanguage] = useState(false)
  const refDropdownLanguage = useRef()

  useOutsideHide(refDropdownLanguage, setShowDropdownLanguage)

  const handleShowDropdownLanguage = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShowDropdownProfile(false)
      setShowDropdownLanguage((prevState) => !prevState)
    }
  }

  return (
    <>
      <NavBar_D_SignComponentWrapper>
        <span
          onClick={handleShowDropdownLanguage}
          onKeyDown={handleShowDropdownLanguage}
          tabIndex={0}>
          <LanguageIconSvg />
        </span>
        <span
          onClick={handleShowDropdownProfile}
          onKeyDown={handleShowDropdownProfile}
          tabIndex={0}>
          <ProfileIconSvg />
        </span>
      </NavBar_D_SignComponentWrapper>

      {showDropdownLanguage && (
        <>
          <NavBar_D_LanguageComponentDropdown
            theRef={refDropdownLanguage}
            showDropdownLanguage={showDropdownLanguage}
          />
        </>
      )}

      {showDropdownProfile && (
        <>
          <NavBar_D_SignComponentDropdown
            theRef={refDropdownProfile}
            showDropdownProfile={showDropdownProfile}
            setShowDropdown={setShowDropdownProfile}
          />
        </>
      )}
    </>
  )
}
