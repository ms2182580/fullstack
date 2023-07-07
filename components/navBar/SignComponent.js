import { useRef, useState } from "react"
import { LanguageIconSvg, ProfileIconSvg } from "../../assets/Icons"
import { useOutsideHide } from '../../utils/useOutsideHide'
import { SignComponentDropdown } from "./SignComponentDropdown.js"
import { SignComponentWrapper } from "./styles/SignComponentWrapper.js"

export const SignComponent = () => {
  const [showDropdown, setShowDropdown] = useState(true)
  const refDropdown = useRef()

  useOutsideHide(refDropdown, setShowDropdown)

  const handleShowDropdown = () => {
    setShowDropdown((prevState) => !prevState)
  }

  return (
    <>
      <SignComponentWrapper onClick={handleShowDropdown}>
        <span>
          <LanguageIconSvg />
        </span>
        <span>
          <ProfileIconSvg />
        </span>
      </SignComponentWrapper>

      {showDropdown && <SignComponentDropdown theRef={refDropdown} />}
    </>
  )
}
