import { H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { LanguageIconSvg, NavBar_D_AccessibilityModeSvg } from "../../../assets/Icons/index"
import { NavBar_D_AccessibilityDropdownWrapper } from "./styles/NavBar_D_AccessibilityDropdownWrapper.js"

const LIST = [
  { icon: <LanguageIconSvg />, name: "Accessibility Profile" },
  { icon: <NavBar_D_AccessibilityModeSvg />, name: "Content Adjustments" },
  { icon: <NavBar_D_AccessibilityModeSvg />, name: "Color Adjustments" },
  { icon: <NavBar_D_AccessibilityModeSvg />, name: "Orientation Adjustments" },
  { icon: <NavBar_D_AccessibilityModeSvg />, name: "Multilingual Accessibility" },
]

export const NavBar_D_AccessibilityDropdown = ({ theRef }) => {
  return (
    <NavBar_D_AccessibilityDropdownWrapper ref={theRef}>
      {LIST.map((x, i) => (
        <div
          key={`${x.name}_${i}`}
          tabIndex={0}>
          {x.icon}
          <H4 >{x.name}</H4>
        </div>
      ))}
    </NavBar_D_AccessibilityDropdownWrapper>
  )
}
