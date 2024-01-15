import { H4 } from "../../ui/heading_body_text/HeaderFonts"
import { NavBar_D_InfoDropdownWrapper } from "./styles/NavBar_D_InfoDropdownWrapper.js"

const LIST = [
  { name: "Get Help" },
  { name: "Tell us about you" },
  { name: "Help  other families" },
  { name: "FAQ" },
]

export const NavBar_D_InfoDropdown = ({ theRef }) => {
  return (
    <NavBar_D_InfoDropdownWrapper ref={theRef}>
      {LIST.map((x, i) => (
        <li key={`${x.name}_${i}`}>
          <H4 tabIndex={0} normal>
            {x.name}
          </H4>
        </li>
      ))}
    </NavBar_D_InfoDropdownWrapper>
  )
}
