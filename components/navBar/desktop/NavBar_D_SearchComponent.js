import { useRouter } from "next/router"
import { SearchSVG } from "../../../assets/Icons"
import { ButtonSmall } from '../../../components/ui/buttons/general/index.js'
import { NavBar_D_InputDiagnosis } from "./NavBar_D_InputDiagnosis"
import { NavBar_D_InputKeyword } from "./NavBar_D_InputKeyword"
import { NavBar_D_InputLocation } from "./NavBar_D_InputLocation"
import { NavBar_D_SearchComponentWrapper } from "./styles/NavBar_D_SearchComponentWrapper.js"

export const NavBar_D_SearchComponent = () => {

  const { push } = useRouter()
  const handleMoveUser = () => {
    push("/ORG/speech-therapists")
  }

  return (
    <NavBar_D_SearchComponentWrapper>
      <NavBar_D_InputKeyword />
      <NavBar_D_InputLocation />
      <NavBar_D_InputDiagnosis />

      <span onClick={handleMoveUser}>
        <ButtonSmall>
          <SearchSVG />
        </ButtonSmall>
      </span>
    </NavBar_D_SearchComponentWrapper>
  )
}
