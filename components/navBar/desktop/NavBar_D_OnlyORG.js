import Link from "next/link.js"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { ChatAILogo, Navbar_AccessibilitySvg } from "../../../assets/Icons/index"
import { useActiveElement } from "../../../utils/useActiveElement"
import { useCloseNotActiveElementAnymore } from "../../../utils/useCloseNotActiveElementAnymore.js"
import { useOutsideHide } from "../../../utils/useOutsideHide"
import { H2, H4 } from "../../ui/heading_body_text/HeaderFonts"
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

  useEffect(() => {
    if (infoDropdownStateInfo) {
      let handleCloseDropdownInfo = (e) => {
        if (e.key === "Escape") {
          setInfoDropdownStateInfo(false)
        }
      }

      window.addEventListener("keydown", handleCloseDropdownInfo)

      return () => {
        window.removeEventListener("keydown", handleCloseDropdownInfo)
      }
    }

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
            <li className={/[ORG]\/\w|[ORG]/.test(route.pathname) ? "active" : null}>
              <H4>
                <Link href="/ORG">Resource Directory</Link>
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
          <Navbar_AccessibilitySvg tabIndex={0} />

          <NavBar_D_SignComponent />
        </div>
      </div>
    </NavBar_D_OnlyORGWrapper>
  )
}
