import { ChatAILogo } from "@/assets/icons/index.js"
import { NavBar_D_InfoDropdown } from "@/components/navBar/desktop/NavBar_D_InfoDropdown.js"
import { NavBar_D_SearchComponent } from "@/components/navBar/desktop/NavBar_D_SearchComponent"
import { H2, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES } from "@/utils/org/useCheckSlug_ORG"
import { useActiveElement } from "@/utils/useActiveElement.js"
import { useCloseNotActiveElementAnymore } from "@/utils/useCloseNotActiveElementAnymore.js"
import { useOutsideHide } from "@/utils/useOutsideHide.js"
import Link from "next/link.js"
import { useRouter } from "next/router.js"
import { useRef, useState } from "react"
import { NavBar_D_Accessibility } from "./NavBar_D_Accessibility.js"
import { NavBar_D_GTSDropdown } from "./NavBar_D_GTSDropdown.js"
import { NavBar_D_HamburgerComponent } from "./NavBar_D_HamburgerComponent.js"
import { NavBar_D_SignComponent } from "./NavBar_D_SignComponent"
import { NavBar_D_OnlyDefaultWrapper } from "./styles/NavBar_D_OnlyDefaultWrapper.js"

export const NavBar_D_OnlyDefault = () => {
  const route = useRouter()
  const handleNavigateHome = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      route.push("/")
    }
  }

  const [infoDropdownStateInfo, setInfoDropdownStateInfo] = useState(false)
  const refInfo = useRef()
  useOutsideHide(refInfo, setInfoDropdownStateInfo)
  const handleToggleInfoDropdown = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setInfoDropdownStateGTS(false)
      setInfoDropdownStateInfo((prevState) => !prevState)
    }
  }

  const [infoDropdownStateGTS, setInfoDropdownStateGTS] = useState(false)
  const refGTS = useRef()
  useOutsideHide(refGTS, setInfoDropdownStateGTS)
  const handleToggleGTSDropdown = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setInfoDropdownStateInfo(false)
      setInfoDropdownStateGTS((prevState) => !prevState)
    }
  }

  const classNameToFocusLogic_GTS = "GTS"
  const { focusedElement: focusedElement_GTS } = useActiveElement()
  useCloseNotActiveElementAnymore(
    focusedElement_GTS,
    setInfoDropdownStateGTS,
    ["h4"],
    classNameToFocusLogic_GTS
  )

  const classNameToFocusLogic_INFO = "INFO"
  const { focusedElement: focusedElement_INFO } = useActiveElement()
  useCloseNotActiveElementAnymore(
    focusedElement_INFO,
    setInfoDropdownStateInfo,
    ["h4"],
    classNameToFocusLogic_INFO
  )

  return (
    <NavBar_D_OnlyDefaultWrapper>
      <div>
        <NavBar_D_SearchComponent />
      </div>

      <div>
        <span
          tabIndex={0}
          onKeyDown={handleNavigateHome}
          onClick={handleNavigateHome}
        >
          {" "}
          <H2>Inclusive</H2>
          <ChatAILogo />
        </span>

        <div>
          <span>
            <NavBar_D_HamburgerComponent />
          </span>

          <ul>
            <li
              className={
                /[org]\/\w|[org]/.test(route.pathname) ? "active" : null
              }
            >
              <H4>
                <Link href={`/${ALL_ROUTES.ORG}`}>Resource Directory</Link>
              </H4>
            </li>
            <li
              onClick={handleToggleGTSDropdown}
              onKeyDown={handleToggleGTSDropdown}
              tabIndex={0}
              className={classNameToFocusLogic_GTS}
            >
              <H4>Guide to Services</H4>
              {infoDropdownStateGTS && <NavBar_D_GTSDropdown theRef={refGTS} />}
            </li>
            <li>
              <H4>Ask a Question</H4>
            </li>
            <li
              onClick={handleToggleInfoDropdown}
              onKeyDown={handleToggleInfoDropdown}
              tabIndex={0}
              className={classNameToFocusLogic_INFO}
            >
              <H4>Info</H4>
              {infoDropdownStateInfo && (
                <NavBar_D_InfoDropdown theRef={refInfo} />
              )}
            </li>
          </ul>
        </div>

        <span>
          <NavBar_D_Accessibility />

          <NavBar_D_SignComponent />
        </span>
      </div>
    </NavBar_D_OnlyDefaultWrapper>
  )
}
