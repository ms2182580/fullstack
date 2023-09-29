import { useRouter } from "next/router.js"
import { useEffect } from 'react'
import {
  NavBar_D_AAQSvg,
  NavBar_D_AccessibilityModeSvg,
  NavBar_D_ContrastSvg,
  NavBar_D_DictionarySvg,
  NavBar_D_HelpSvg,
  NavBar_D_SettingsSvg,
  NavBar_D_TooltipSvg,
  NavBar_D_UpgradeSvg,
  NavBar_D_UserDashboardSvg,
} from "../../../assets/Icons/index.js"
import { ButtonSmall } from "../../ui/buttons/general/index.js"
import { H4 } from "../../ui/heading_body_text/HeaderFonts.js"
import { NavBar_D_SignComponentDropdownWrapper } from "./styles/NavBar_D_SignComponentDropdownWrapper.js"

export const NavBar_D_SignComponentDropdown = ({ theRef, setShowDropdown, showDropdownProfile }) => {
  const { push } = useRouter()
  const handlePushToSignup = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      push("/signup")
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    if (showDropdownProfile) {
      theRef.current.focus()
    }
  }, [showDropdownProfile])

  return (
    <NavBar_D_SignComponentDropdownWrapper ref={theRef} tabIndex={0}>
      <div>
        <span
          onClick={handlePushToSignup}
          onKeyDown={handlePushToSignup}
          tabIndex={0}>
          <ButtonSmall preventFocus={-1} secondary>Sign Up</ButtonSmall>
        </span>
        <span>
          <ButtonSmall>Sign In</ButtonSmall>
        </span>
      </div>

      <div tabIndex={0}>
        <NavBar_D_AAQSvg />
        <H4
          medium
          darkGrey>
          Ask a question
        </H4>
      </div>

      <div tabIndex={0}>
        <NavBar_D_UpgradeSvg />
        <H4
          medium
          darkGrey>
          Upgrade to premium
        </H4>
      </div>

      <div tabIndex={0}>
        <NavBar_D_UserDashboardSvg />
        <H4
          medium
          darkGrey>
          User dashboard
        </H4>
      </div>

      <span className="separator"></span>

      <div tabIndex={0}>
        <NavBar_D_HelpSvg />
        <H4
          medium
          darkGrey>
          Help/Contact us
        </H4>
      </div>

      <div tabIndex={0}>
        <NavBar_D_SettingsSvg />
        <H4
          medium
          darkGrey>
          Settings
        </H4>
      </div>

      <div tabIndex={0}>
        <NavBar_D_ContrastSvg />
        <H4
          medium
          darkGrey>
          Contrast
        </H4>
      </div>

      <div tabIndex={0}>
        <NavBar_D_DictionarySvg />
        <H4
          medium
          darkGrey>
          Dictionary
        </H4>
      </div>

      <div tabIndex={0}>
        <NavBar_D_TooltipSvg />
        <H4
          medium
          darkGrey>
          Tooltip
        </H4>
      </div>

      <div tabIndex={0}>
        <NavBar_D_AccessibilityModeSvg />
        <H4
          medium
          darkGrey>
          Accesibility mode
        </H4>
      </div>
    </NavBar_D_SignComponentDropdownWrapper>
  )
}
