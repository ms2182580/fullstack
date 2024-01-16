import { H4 } from "../../ui/heading_body_text/HeaderFonts"
import { NavBar_D_HamburgerComponentDropdown_CCWrapper } from "./styles/NavBar_D_HamburgerComponentDropdown_CCWrapper.js"

const COMMUNITY_CLASSES_NESTED = [
  { name: "Fitness" },
  { name: "Art" },
  { name: "Music" },
  { name: "Daily Living Skills" },
  { name: "ASL & Languages" },
  { name: "STEM" },
  { name: "Academics" },
]

export const NavBar_D_HamburgerComponentDropdown_CC = ({
  handleHideHover,
  classNameToFocusLogic,
}) => {
  return (
    <NavBar_D_HamburgerComponentDropdown_CCWrapper onBlur={handleHideHover}>
      {COMMUNITY_CLASSES_NESTED.map((x, i) => (
        <>
          <H4
            tabIndex={0}
            normal
            key={`${x.name}_${i}`}
            className={classNameToFocusLogic}
            data-content={x.name}
          >
            {x.name}
          </H4>
        </>
      ))}
    </NavBar_D_HamburgerComponentDropdown_CCWrapper>
  )
}
