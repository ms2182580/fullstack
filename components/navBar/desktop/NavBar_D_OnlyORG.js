import { ALL_ROUTES } from "@/utils/org/useCheckSlug_ORG"
import Link from "next/link.js"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { ChatAILogo } from "../../../assets/icons/index"
import { useActiveElement } from "../../../utils/useActiveElement"
import { useCloseNotActiveElementAnymore } from "../../../utils/useCloseNotActiveElementAnymore.js"
import { useOutsideHide } from "../../../utils/useOutsideHide"
import { H2, H4 } from "../../ui/heading_body_text/HeaderFonts"
import { NavBar_D_Accessibility } from "./NavBar_D_Accessibility.js"
import { NavBar_D_GTSDropdown } from "./NavBar_D_GTSDropdown.js"
import { NavBar_D_HamburgerComponent } from "./NavBar_D_HamburgerComponent.js"
import { NavBar_D_SignComponent } from "./NavBar_D_SignComponent.js"
import { NavBar_D_OnlyORGWrapper } from "./styles/NavBar_D_OnlyORGWrapper.js"

export const NavBar_D_OnlyORG = () => {
  const route = useRouter()

  const handleNavigateHome = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      route.push("/")
    }
  }

  const [infoDropdownStateGTS, setInfoDropdownStateGTS] = useState(false)
  const refGTS = useRef()
  useOutsideHide(refGTS, setInfoDropdownStateGTS)
  const handleToggleGTSDropdown = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setInfoDropdownStateGTS((prevState) => !prevState)
    }
  }

  useEffect(() => {
    if (infoDropdownStateGTS) {
      let handleCloseDropdownGTS = (e) => {
        if (e.key === "Escape") {
          setInfoDropdownStateGTS(false)
        }
      }

      window.addEventListener("keydown", handleCloseDropdownGTS)

      return () => {
        window.removeEventListener("keydown", handleCloseDropdownGTS)
      }
    }
  }, [])

  const classNameToFocusLogic = "HamburgerComponent"
  const { focusedElement } = useActiveElement()
  useCloseNotActiveElementAnymore(focusedElement, setInfoDropdownStateGTS, ["li", "h4"], classNameToFocusLogic)

  return (
    <NavBar_D_OnlyORGWrapper>
      <div>
        <span
          tabIndex={0}
          onKeyDown={handleNavigateHome}
          onClick={handleNavigateHome}>
          {" "}
          <H2>Inclusive</H2>
          <ChatAILogo />
        </span>

        <div>
          <span>
            <NavBar_D_HamburgerComponent />
          </span>

          <ul>
            <li className={/[org]\/\w|[org]/.test(route.pathname) ? "active" : null}>
              <H4>
                <Link href={`/${ALL_ROUTES.ORG}`}>Resource Directory</Link>
              </H4>
            </li>

            <li
              onClick={handleToggleGTSDropdown}
              onKeyDown={handleToggleGTSDropdown}
              tabIndex={0}
              className={classNameToFocusLogic}>
              <H4>Guide to Services</H4>

              {infoDropdownStateGTS && <NavBar_D_GTSDropdown theRef={refGTS} />}
            </li>

            <li>
              <H4>Ask a Question</H4>
            </li>
          </ul>
        </div>

        <div>
          <NavBar_D_Accessibility />

          <NavBar_D_SignComponent />
        </div>
      </div>
    </NavBar_D_OnlyORGWrapper>
  )
}
