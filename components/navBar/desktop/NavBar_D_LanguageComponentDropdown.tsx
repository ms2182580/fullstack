import {
  LanguageIconSvg,
  NavBar_D_AccessibilityModeSvg,
} from "@/assets/icons/index"
import FLAG_CHINA from "@/assets/icons/nav-bar/FLAG_CHINA.png"
import FLAG_EGIPT from "@/assets/icons/nav-bar/FLAG_EGIPT.png"
import FLAG_FRANCE from "@/assets/icons/nav-bar/FLAG_FRANCE.png"
import FLAG_ITALY from "@/assets/icons/nav-bar/FLAG_ITALY.png"
import FLAG_JAPAN from "@/assets/icons/nav-bar/FLAG_JAPAN.png"
import FLAG_RUSSIA from "@/assets/icons/nav-bar/FLAG_RUSSIA.png"
import FLAG_SPAIN from "@/assets/icons/nav-bar/FLAG_SPAIN.png"
import FLAG_USA from "@/assets/icons/nav-bar/FLAG_USA.png"
import { H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image from "next/image.js"
import { useRouter } from "next/router.js"
import { RefObject, useEffect } from "react"
import { NavBar_D_LanguageComponentDropdownWrapper } from "./styles/NavBar_D_LanguageComponentDropdownWrapper"

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

type Props = {
  theRef: RefObject<HTMLDivElement>
  showDropdownLanguage: boolean
  isORG: boolean
}

export const NavBar_D_LanguageComponentDropdown = ({
  theRef,
  showDropdownLanguage,
  isORG,
}: Props) => {
  useEffect(() => {
    if (showDropdownLanguage) {
      theRef?.current?.focus()
    }
  }, [showDropdownLanguage])

  const { pathname } = useRouter()
  // console.log("pathname:", pathname)

  return (
    <NavBar_D_LanguageComponentDropdownWrapper
      ref={theRef}
      tabIndex={0}
      isORG={isORG}
    >
      <H4>
        {" "}
        <LanguageIconSvg /> Select Language
      </H4>

      <ul>
        {displayLanguages.map((xDisplayLanguages, index) => (
          <li
            key={xDisplayLanguages.languageName}
            tabIndex={index === 0 ? 0 : -1}
          >
            <Image
              src={xDisplayLanguages.flag}
              alt={`image of a flag. Language of this flag: ${xDisplayLanguages.languageName}`}
            />
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
