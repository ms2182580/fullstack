import { H4 } from "../../ui/heading_body_text/HeaderFonts.js"
import { NavBar_D_GTSDropdownWrapper } from "./styles/NavBar_D_GTSDropdownWrapper.js"

const LIST = [
  { name: "with Medical Insurance" },
  { name: "with Medicaid" },
  { name: "with the Department of Education" },
  { name: "with State DD Dgencies" },
  { name: "with Other Funds" },
  { name: "with Human Service Agencies" },
  { name: "Out-of-pocket" },
]

export const NavBar_D_GTSDropdown = ({ theRef }) => {
  return (
    <NavBar_D_GTSDropdownWrapper ref={theRef}>
      {LIST.map((x, i) => (
        <>
          <H4 tabIndex={0} normal key={`${x.name}_${i}`}>{x.name}</H4>
        </>
      ))}
    </NavBar_D_GTSDropdownWrapper>
  )
}
