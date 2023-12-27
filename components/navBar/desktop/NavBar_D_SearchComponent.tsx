import { Search2SVG } from "../../../assets/icons2"
import { NavBar_D_InputDiagnosis } from "./NavBar_D_InputDiagnosis"
import { NavBar_D_InputKeyword } from "./NavBar_D_InputKeyword"
import { NavBar_D_InputLocation } from "./NavBar_D_InputLocation"
import { NavBar_D_SearchComponentWrapper } from "./styles/NavBar_D_SearchComponentWrapper.js"

export const NavBar_D_SearchComponent = () => {
  return (
    <NavBar_D_SearchComponentWrapper>
      <NavBar_D_InputKeyword />
      <NavBar_D_InputDiagnosis />
      <NavBar_D_InputLocation widthOfDropdown={110} />

      <button>
        <Search2SVG />
      </button>
    </NavBar_D_SearchComponentWrapper>
  )
}
