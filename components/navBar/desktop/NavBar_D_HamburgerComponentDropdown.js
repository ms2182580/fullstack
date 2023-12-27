import { DATA_ORG_CheckPaths_Search_D, ROUTER_PUSH_SEARCH } from "@/utils/org/DATA_ORG_CheckPaths_Search_D.js"
import { DATA_ORG_D } from "@/utils/org/DATA_ORG_D"
import { ALL_ROUTES } from "@/utils/org/useCheckSlug_ORG"
import { useRouter } from "next/router.js"
import { Fragment, useRef, useState } from "react"
import { NavBar_D_WriteAReviewSvg, Navbar_D_AccessibilityModeSvg } from "../../../assets/icons/index.js"
import { useOutsideHideHover } from "../../../utils/useOutsideHideHover.js"
import { H4 } from "../../ui/heading_body_text/HeaderFonts.js"
import { NavBar_D_HamburgerComponentDropdown_CC } from "./NavBar_D_HamburgerComponentDropdown_CC.js"
import { NavBar_D_HamburgerComponentDropdownWrapper } from "./styles/NavBar_D_HamburgerComponentDropdownWrapper.js"

const LIST = [
  {
    nameJSX: "Community Classes",
    acronym: "pcc",
    nestedDropdown: {
      component: NavBar_D_HamburgerComponentDropdown_CC,
    },
  },
  {
    nameJSX: "Camps",
    acronym: "pcmps",
  },
  {
    nameJSX: "Doctors",
    acronym: "pdctr",
  },
  {
    nameJSX: "Therapeutic Providers & Services",
    acronym: "pst",
  },
  {
    nameJSX: "Vocational & Employment Supports",
    acronym: "pves",
  },
  {
    nameJSX: "Mental Health Services",
    acronym: "pmhss",
  },
  {
    nameJSX: "Public & Private Agencies",
    acronym: "pppas",
  },
  {
    nameJSX: "Residential Programs",
    acronym: "prp",
  },
  {
    nameJSX: "Technology for IDD's",
    acronym: "pat",
  },
  {
    nameJSX: "Schools & Educational Resources",
    acronym: "pses",
  },
  {
    nameJSX: "Attorney and Advocates",
    acronym: "paa",
  },
]

export const NavBar_D_HamburgerComponentDropdown = ({ theRef, setShowDropdown }) => {
  const [showNestedCC, setShowNestedCC] = useState(false)

  const theRefCC = useRef()

  useOutsideHideHover(theRefCC, setShowNestedCC)

  let handleShowHover = () => {
    setShowNestedCC(true)
  }

  let handleHideHover = () => {
    setShowNestedCC(false)
  }

  const router = useRouter()

  let moveUserToORGSearch = (e, acronym) => {
    if (e.type === "click" || e.key === "Enter") {
      const checkExistPath = DATA_ORG_CheckPaths_Search_D.filter((x) => x === acronym)

      if (checkExistPath.length !== 0) {
        setShowDropdown(false)

        let thisIndex = DATA_ORG_D.findIndex((x) => x.acronym === checkExistPath[0])

        router.push(
          {
            pathname: `/${ALL_ROUTES.ORG}`,
            query: { [ROUTER_PUSH_SEARCH.nameJSX]: DATA_ORG_D[thisIndex].nameJSX, [ROUTER_PUSH_SEARCH.componentName]: DATA_ORG_D[thisIndex].nameJSX },
          },
          `/${ALL_ROUTES.ORG}`,
        )
      }
    }
  }

  return (
    <NavBar_D_HamburgerComponentDropdownWrapper ref={theRef}>
      <ul>
        {LIST.map((x, index) => {
          if (index === 0) {
            return (
              <Fragment key={x.nameJSX}>
                <li
                  tabIndex={0}
                  ref={theRefCC}
                  onFocus={handleShowHover}
                  data-content={x.nameJSX}
                  onClick={(e) => moveUserToORGSearch(e, x.acronym)}
                  onKeyDown={(e) => moveUserToORGSearch(e, x.acronym)}>
                  <H4>{x.nameJSX}</H4>
                  {showNestedCC && <x.nestedDropdown.component />}
                </li>
              </Fragment>
            )
          }

          if (index === 1) {
            return (
              <Fragment key={x.nameJSX}>
                <li
                  tabIndex={0}
                  onFocus={handleHideHover}
                  data-content={x.nameJSX}
                  onClick={(e) => moveUserToORGSearch(e, x.acronym)}
                  onKeyDown={(e) => moveUserToORGSearch(e, x.acronym)}>
                  <H4>{x.nameJSX}</H4>
                </li>
              </Fragment>
            )
          }

          return (
            <Fragment key={x.nameJSX}>
              <li
                tabIndex={0}
                onClick={(e) => moveUserToORGSearch(e, x.acronym)}
                onKeyDown={(e) => moveUserToORGSearch(e, x.acronym)}>
                <H4 data-content={x.nameJSX}>{x.nameJSX}</H4>
              </li>
            </Fragment>
          )
        })}
      </ul>

      <ul>
        <li>
          <NavBar_D_WriteAReviewSvg /> <H4 tabIndex={0}>Write a review</H4>
        </li>
        <li>
          <Navbar_D_AccessibilityModeSvg /> <H4 tabIndex={0}>Accessibility Mode</H4>
        </li>
        <li>
          <H4 tabIndex={0}>FAQ</H4>
        </li>
      </ul>
    </NavBar_D_HamburgerComponentDropdownWrapper>
  )
}
