import { useActiveElement } from "@/utils/useActiveElement"
import { useCloseNotActiveElementAnymore } from "@/utils/useCloseNotActiveElementAnymore"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import { LanguageIconSvg, ProfileIconSvg } from "../../../assets/icons"
import { useOutsideHide } from "../../../utils/useOutsideHide"
import { NavBar_D_LanguageComponentDropdown } from "./NavBar_D_LanguageComponentDropdown"
import { NavBar_D_SignComponentDropdown } from "./NavBar_D_SignComponentDropdown"
import { NavBar_D_SignComponentWrapper } from "./styles/NavBar_D_SignComponentWrapper"

export const NavBar_D_SignComponent = () => {
  const [showDropdownProfile, setShowDropdownProfile] = useState(false)
  const refDropdownProfile = useRef<HTMLDivElement>(null)

  useOutsideHide(refDropdownProfile, setShowDropdownProfile)

  const handleShowDropdownProfile = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShowDropdownLanguage(false)
      setShowDropdownProfile((prevState) => !prevState)
    }
  }

  const [showDropdownLanguage, setShowDropdownLanguage] = useState(false)
  const refDropdownLanguage = useRef<HTMLDivElement>(null)

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

  const { pathname } = useRouter()

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
            isORG={pathname === "/org"}
          />
        </>
      )}

      {showDropdownProfile && (
        <>
          <NavBar_D_SignComponentDropdown
            theRef={refDropdownProfile}
            showDropdownProfile={showDropdownProfile}
            setShowDropdown={setShowDropdownProfile}
            isORG={pathname === "/org"}
          />
        </>
      )}
    </>
  )
}
