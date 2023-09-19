import { H4 } from "../../ui/heading_body_text/HeaderFonts.js"
import { NavBar_D_InfoDropdownWrapper } from "./styles/NavBar_D_InfoDropdownWrapper.js"

const INFO_LIST = [
  { name: "Get Help" },
  { name: "Tell us about you" },
  { name: "Help  other families" },
  { name: "FAQ" }
]

export const NavBar_D_InfoDropdown = ({ theRef }) => {
  return (
    <NavBar_D_InfoDropdownWrapper ref={theRef}>
      {INFO_LIST.map((x, i) => (
        <>
          <H4 normal key={`${x.name}_${i}`}>{x.name}</H4>
        </>
      ))}
    </NavBar_D_InfoDropdownWrapper>
  )
}
