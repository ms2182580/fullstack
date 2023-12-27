import FLAG_CHINA from "@/assets/icons/nav-bar/FLAG_CHINA.png"
import FLAG_EGIPT from "@/assets/icons/nav-bar/FLAG_EGIPT.png"
import FLAG_FRANCE from "@/assets/icons/nav-bar/FLAG_FRANCE.png"
import FLAG_ITALY from "@/assets/icons/nav-bar/FLAG_ITALY.png"
import FLAG_JAPAN from "@/assets/icons/nav-bar/FLAG_JAPAN.png"
import FLAG_RUSSIA from "@/assets/icons/nav-bar/FLAG_RUSSIA.png"
import FLAG_SPAIN from "@/assets/icons/nav-bar/FLAG_SPAIN.png"
import FLAG_USA from "@/assets/icons/nav-bar/FLAG_USA.png"
import { LanguageIconSvg, NavBar_D_AccessibilityModeSvg } from "@/assets/icons2/index.js"
import { H4 } from "@/components/ui/heading_body_text/HeaderFonts.js"
import Image from "next/image.js"
import { useEffect } from "react"
import { NavBar_D_LanguageComponentDropdownWrapper } from "./styles/NavBar_D_LanguageComponentDropdownWrapper.js"

const displayLanguages = [
  {
    flag: FLAG_USA,
    languageName: "English",
  },
  {
    flag: FLAG_SPAIN,
    languageName: "Español",
  },
  {
    flag: FLAG_FRANCE,
    languageName: "Français",
  },
  {
    flag: FLAG_CHINA,
    languageName: "中国人",
  },
  {
    flag: FLAG_EGIPT,
    languageName: "اللغة العربية",
  },
  {
    flag: FLAG_RUSSIA,
    languageName: "русский язык",
  },
  {
    flag: FLAG_ITALY,
    languageName: "Italiano",
  },
  {
    flag: FLAG_JAPAN,
    languageName: "日本語",
  },
]

export const NavBar_D_LanguageComponentDropdown = ({ theRef, showDropdownLanguage }) => {
  useEffect(() => {
    if (showDropdownLanguage) {
      theRef.current.focus()
    }
  }, [showDropdownLanguage])

  return (
    <NavBar_D_LanguageComponentDropdownWrapper
      ref={theRef}
      tabIndex={0}>
      <H4>
        {" "}
        <LanguageIconSvg /> Select Language
      </H4>

      <ul>
        {displayLanguages.map((xDisplayLanguages, index) => (
          <li
            key={xDisplayLanguages.languageName}
            tabIndex={index === 0 ? 0 : -1}>
            <Image src={xDisplayLanguages.flag} />
            <H4>{xDisplayLanguages.languageName}</H4>
          </li>
        ))}
      </ul>

      <div>
        <H4>
          <NavBar_D_AccessibilityModeSvg />
          Multilingual Accessibility
        </H4>
      </div>
    </NavBar_D_LanguageComponentDropdownWrapper>
  )
}
