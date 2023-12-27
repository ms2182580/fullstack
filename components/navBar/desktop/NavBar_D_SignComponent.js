import { useActiveElement } from "@/utils/useActiveElement"
import { useCloseNotActiveElementAnymore } from "@/utils/useCloseNotActiveElementAnymore"
import { useRef, useState } from "react"
import { LanguageIconSvg, ProfileIconSvg } from "../../../assets/icons2"
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

  const classNameToFocusLogic_LANG = "Language"
  const { focusedElement: focusedElement_LANG } = useActiveElement()
  useCloseNotActiveElementAnymore(focusedElement_LANG, setShowDropdownLanguage, ["span", "div", "ul", "li"], classNameToFocusLogic_LANG)

  const classNameToFocusLogic_SIGN = "SIGN_IN"
  const { focusedElement: focusedElement_SIGN } = useActiveElement()
  useCloseNotActiveElementAnymore(focusedElement_SIGN, setShowDropdownProfile, ["span", "div", "button"], classNameToFocusLogic_SIGN)

  return (
    <>
      <NavBar_D_SignComponentWrapper
        showDropdownProfile={showDropdownProfile}
        showDropdownLanguage={showDropdownLanguage}>
        <span
          onClick={handleShowDropdownLanguage}
          onKeyDown={handleShowDropdownLanguage}
          tabIndex={0}
          className={classNameToFocusLogic_LANG}>
          <LanguageIconSvg />
        </span>
        <span
          onClick={handleShowDropdownProfile}
          onKeyDown={handleShowDropdownProfile}
          tabIndex={0}
          className={classNameToFocusLogic_SIGN}>
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
